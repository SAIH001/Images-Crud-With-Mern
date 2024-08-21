const express =require('express');


const router  = express.Router();


const {getImage} = require('../controllers/imageController')

router.route('/').get(getImage)




module.exports = router

