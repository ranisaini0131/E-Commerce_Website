import User from "../model/User.js"

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