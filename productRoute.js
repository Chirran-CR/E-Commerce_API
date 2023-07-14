const express = require("express");
const { getAllProducts, addAProduct, updateAProduct, deleteAProduct } = require("./productController");
const tryCatch = require("./tryCatch");
const productRouter = express.Router();

productRouter.get("/",tryCatch(getAllProducts));
productRouter.post("/",tryCatch(addAProduct));
productRouter.put("/:id",tryCatch(updateAProduct));
productRouter.delete("/:id",tryCatch(deleteAProduct));

module.exports = productRouter;