const itemModel = require("./productModel");

exports.getAllProducts = async (req,res)=>{
    const allProducts = await itemModel.find({});
    res.status(200).send({
        message:"All the products are obtained from DB.",
        ProductList:allProducts
    })
}

exports.addAProduct = async (req,res)=>{
    const product = req.body;
    const addedProduct = await itemModel.create(product);
    res.status(200).send({
        message:"Product added Successfully.",
        addedProduct:addedProduct
    })
}

exports.updateAProduct = async (req,res)=>{
    const id = req.params.id;
    const updatedProduct = await itemModel.findByIdAndUpdate({_id:id},req.body,{new:true});
    if(!updatedProduct){
        throw new Error("Wrong product Id is given.");
    }
    res.status(200).send({
        message:"Product is Updated Successfully.",
        updatedProduct:updatedProduct
    })
}

exports.deleteAProduct = async (req,res)=>{
    const id = req.params.id;
    const deletedProduct = await itemModel.findByIdAndDelete({_id:id});
    if(!deletedProduct){
        throw new Error("Wrong product Id is given.");
    }
    res.status(200).send({
        message:"Product is Deleted Successfully.",
        deletedProduct:deletedProduct
    })
}