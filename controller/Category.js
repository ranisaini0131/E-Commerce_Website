import Category from '../model/Category.js'

export async function createCategory(req, res) {
    try {
        const category = new Category(req.body)
        await category.save()
        res.send({
            status: "success",
            message: category
        })

    } catch (error) {
        console.log(error)
    }
}


export async function getAllCategory(req, res) {


    try {
        const categories = await Category.find({});
        res.send({
            status: "success",
            message: categories
        })

    } catch (error) {
        console.log(error)
        res.send({
            status: "failed",
            message: error.message
        })
    }
}