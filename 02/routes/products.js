const express = require("express");
const controller = require("../controllers/products");

const router = express.Router();

// GET /call/products
router.get( "/products", controller.getProducts );

// Post /call/product
router.post( "/product", controller.postProduct );

module.exports = router;
