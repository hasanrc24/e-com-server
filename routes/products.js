const express = require("express");
const router = express.Router();
const { getProducts, getProductsAll } = require("../controllers/products");

router.route("/").get(getProducts);
router.route("/test").get(getProductsAll);

module.exports = router;
