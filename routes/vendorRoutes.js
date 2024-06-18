const express= require('express');
const router=express.Router();
const vendorController= require('../controllers/vendorController')

router.post('/register',vendorController.vendorRegister);
router.post('/login',vendorController.vendorLogin);

router.get('/all-vendors',vendorController.getAllVendors);
router.get('/single-vendor/:vendorId',vendorController.getVendorById);

module.exports= router;