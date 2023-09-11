import Product from "../model/Product.js";


export async function createProduct(req, res) {
    // const { body } = req.body //gives error
    try {
        const product = new Product(req.body)
        await product.save()
        res.send({
            status: "success",
            message: product
        })

    } catch (error) {
        console.log(error.message)
    }
}

export async function getAllProduct(req, res) {

    //filter={"category": ["smartphone","laptops"]}
    //sort={_sort:"price",_order="desc"}
    //pagination={_page:1,_limit=10}

    let query = Product.find({});
    let totalProductsQuery = Product.find({});// for total products becoz same query ko hum count and total k liye use nhi kr skte

    if (req.query.category) {
        query = query.find({ category: req.query.category })
        totalProductsQuery = totalProductsQuery.find({ category: req.query.category })
    }

    if (req.query.brand) {
        query = query.find({ brand: req.query.brand })
        totalProductsQuery = totalProductsQuery.find({ brand: req.query.brand })
    }

    //sort and order sath me chalte h dono hone chaiye
    if (req.query._sort && req.query._order) {
        query = query.sort({ [req.query._sort]: req.query._order })//title:order
        totalProductsQuery = totalProductsQuery.sort({ [req.query._sort]: req.query._order })
    }

    //to find total products

    const totalProducts = await totalProductsQuery.count().exec()
    console.log({ totalProducts })


    if (req.query._page && req.query._limit) {
        const pageSize = req.query._limit;
        const page = req.query._page
        query = query.skip(pageSize * (page - 1)).limit(pageSize)//limit is means 1 page pr kitne products dikhana h
    }

    try {
        const docs = await query.exec();
        res.set('X-Total-Count', totalProducts)// not giving proper result becoz may be X-Total-Count' not defined
        res.send({
            status: 'success',
            message: docs
        })

    } catch (error) {
        console.log(error)

    }


}

export async function getProductById(req, res) {
    const { id } = req.params;

    try {
        const productId = await Product.findById(id)

        if (productId) {
            res.send({
                status: 'success',
                message: productId
            })

        } else {
            res.send({
                status: 'failed',
                message: "Product doesn't exist"
            })
        }


    } catch (error) {
        console.log(error)
    }
}

export async function updateProduct(req, res) {
    const { id } = req.params
    try {
        const productId = await Product.findByIdAndUpdate(id, req.body, { new: true })

        if (productId) {
            res.send({
                status: 'success',
                message: productId
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
