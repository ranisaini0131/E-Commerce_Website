import User from '../model/User.js'

export async function createUser(req, res) {
    try {
        const user = new User(req.body)
        await user.save()
        res.send({
            status: "success",
            message: user
        })

    } catch (error) {
        console.log(error)
    }
}


export async function getUserById(req, res) {
    const { id } = req.params

    try {
        const userId = await User.findById(id, 'name email id')//'name email id' sirf yhi ilega return me
        if (userId) {
            res.send({
                status: "success",
                message: userId
            })
        } else {
            res.send({
                status: "failed",
                message: "invalid userID"
            })
        }

    } catch (error) {

    }
}

export async function updateUser(req, res) {
    const { id } = req.params

    try {
        const userId = await User.findByIdAndUpdate(id, req.body, { new: true })
        if (userId) {
            res.send({
                status: "success",
                message: userId
            })
        } else {
            res.send({
                status: "failed",
                message: "invalid userID"
            })
        }

    } catch (error) {

    }
}