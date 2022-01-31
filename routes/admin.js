const path = require('path');
const express = require('express');

// IMPORTING CONTROLLER
const adminController = require('../controllers/admin');

const router = express.Router();

// ROUTES
router.get('/add-product', adminController.getAddProduct);
router.get('/products', adminController.getProducts);
router.post('/add-product', adminController.postAddProduct);
router.get('/edit-product/:id', adminController.getEditProduct);
router.post('/edit-product', adminController.postEditProducts);
router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;