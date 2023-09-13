import Brand from "../model/Brand.js"
import Cart from "../model/Cart.js"

export async function addToCart(req, res) {
    try {
        const cart = new Cart(req.body)
        await cart.save()
        res.send({
            status: "success",
            message: cart
        })

    } catch (error) {
        console.log(error)
    }
}


export async function getCartByUser(req, res) {
    const { user } = req.query
    try {
        const cartItems = await Cart.find({ user: user }).populate('User').populate('Product');
        res.send({
            status: "success",
            message: cartItems
        })

    } catch (error) {
        console.log(error)
        res.send({
            status: "failed",
            message: error.message
        })
    }
}

export async function updateCart(req, res) {
    const { id } = req.params
    try {
        const cart = await Cart.findByIdAndUpdate(id, req.body, { new: true })

        if (cart) {
            res.send({
                status: 'success',
                message: cart
            })
        } else {
            res.send({
                status: 'failed',
                message: "cart doesn't updated"
            })
        }

    } catch (error) {
        console.log(error)
    }
}

export async function deleteCart(req, res) {
    const { id } = req.params
    try {
        const cart = await Cart.findByIdAndDelete(id)

        if (cart) {
            res.send({
                status: 'success',
                message: cart
            })
        } else {
            res.send({
                status: 'failed',
                message: "Wrong productId"
            })
        }

    } catch (error) {
        console.log(error)
    }
}