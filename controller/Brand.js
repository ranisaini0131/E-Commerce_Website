import Brand from "../model/Brand.js"

export async function createBrands(req, res) {
    try {
        const brands = new Brand(req.body)
        await brands.save()
        res.send({
            status: "success",
            message: brands
        })

    } catch (error) {
        console.log(error)
    }
}


export async function getAllBrands(req, res) {


    try {
        const brands = await Brand.find({});
        res.send({
            status: "success",
            message: brands
        })

    } catch (error) {
        console.log(error)
        res.send({
            status: "failed",
            message: error.message
        })
    }
}