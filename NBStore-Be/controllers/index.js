const UserController = require("./userController")
const productController = require("./productController")
const CategoryController = require("./categoryController")
const ProductWarehouse = require("./ProductWarehouse.controller")

const OrderController = require("./orderController")
module.exports = {
    UserController,
    productController,
    OrderController,
    ProductWarehouse,
    CategoryController
}