import Order from '../model/Order.js'

export async function createOrder(req, res) {
    try {
        const order = new Order(req.body)
        await order.save()
        res.send({
            status: "success",
            message: order
        })

    } catch (error) {
        console.log(error)
    }
}


export async function getOrderByUser(req, res) {
    const { user } = req.query
    try {
        const orderedItems = await Order.find({ user: user }).populate('User').populate('Product');
        res.send({
            status: "success",
            message: orderedItems
        })

    } catch (error) {
        console.log(error)
        res.send({
            status: "failed",
            message: error.message
        })
    }
}

export async function updateOrder(req, res) {
    const { id } = req.params
    try {
        const order = await Order.findByIdAndUpdate(id, req.body, { new: true })

        if (order) {
            res.send({
                status: 'success',
                message: order
            })
        } else {
            res.send({
                status: 'failed',
                message: "order doesn't updated"
            })
        }

    } catch (error) {
        console.log(error)
    }
}

export async function deleteOrder(req, res) {
    const { id } = req.params
    try {
        const order = await Order.findByIdAndDelete(id)

        if (order) {
            res.send({
                status: 'success',
                message: order
            })
        } else {
            res.send({
                status: 'failed',
                message: "order doesn't deleted"
            })
        }

    } catch (error) {
        console.log(error)
    }
}