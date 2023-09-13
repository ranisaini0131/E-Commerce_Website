import User from "../model/User.js"

export async function registerUser(req, res) {
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

export async function loginUser(req, res) {
    try {
        const { email, password } = req.body
        console.log(req.body, "20")

        const user = await User.find({ email });
        console.log(user)

        if (user) {
            if (password === user.password) {
                res.json({
                    status: "success",
                    message: "login successful"
                })
            } else {
                res.json({
                    status: "failed",
                    message: "Invalid Email or Password"
                })
            }
        } else {
            res.json({
                status: "failed",
                message: "User not found"
            })
        }
    } catch (error) {

    }
    // res.json(req.user)
}
