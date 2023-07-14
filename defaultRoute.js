const express = require("express");
const defaultRouter = express.Router();

defaultRouter.get("/",(req,res)=>{
    res.send({
        message:"This is API Project for a simple E-Commerce App",
        Endpoints:"The api end points are /product, /product/:id-> for delete and updatation, /product to add a product"
    })
})

module.exports = defaultRouter;