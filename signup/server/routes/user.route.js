// const express=require('express');
// const {deleteUser} = require('../controllers/user.controller');
// const router=express.Router();
// // router.get('/register')
// // router.get('/login')
// router.delete('/:id',deleteUser)
// module.exports=router;




const express = require('express');
const {deleteUser }= require('../controllers/user.controller');  // Import as a single function
const router = express.Router();
// const {verifyToken}=require('../middleware/jwt')

router.delete('/delete/:id',deleteUser);

module.exports = router;
