// // We are creating functions in controller like delete update bea
// // becaus all is not possible in route\
// // user.controller.js
// // import EmployeeModel from "../model/Employee.js";
// const EmployeeModel = require('../model/Employee'); // Import your Employee model
// const jwt = require('jsonwebtoken');
// // const { param } = require('../routes/user.route');
// // const secret_key = 'NUqGCBv8Wv';

// const deleteUser =async (req, res) => {
// //    const token=req.cookies.accessToken;
   
// //    if(!token)
// //     {    return res.status(401).send("You are not authenticated")
// //    }
// const user=await EmployeeModel.findById(req.params.id)
// if(!user){
//     return res.status(404).send("user not found")
// }
// // jwt.verify(token,secret_key, async(err,payload)=>{
// //     if (err) {
// //         return res.status(403).send("Invalid token");
// //     }

//      if (req.userId !== user._id.toString()) {
//             return res.status(403).send("You can delete only your account");
//         }
    
// const deletedUser = await EmployeeModel.findByIdAndDelete(req.params.id);
// if (!deletedUser) return res.status(404).send("User not found");
// return res.status(200).send("User deleted successfully");
// }





// module.exports={deleteUser};




const EmployeeModel = require('../model/Employee'); // Import your Employee model
const jwt = require('jsonwebtoken');
const secret_key = 'NUqGCBv8Wv';

const deleteUser = async (req, res) => {
    const token = req.cookies.accessToken; // Get the token from cookies

    // Check if the token is provided
    if (!token) {
        return res.status(401).send("You are not authenticated");
    }

    // Attempt to find the user by ID
    const user = await EmployeeModel.findById(req.params.id);
    
    // Check if the user exists in the database
    if (!user) {
        return res.status(404).send("User not found");
    }

    // Verify the token
    jwt.verify(token, secret_key, async (err, payload) => {
        // Handle token verification error
        if (err) {
            return res.status(403).send("Invalid token");
        }

        // Compare the payload ID with the user ID
        if (payload.id !== user._id.toString()) {
            return res.status(403).send("You can delete only your account");
        }
        
        // Proceed to delete the user
        const deletedUser = await EmployeeModel.findByIdAndDelete(req.params.id);
        
        // Check if the deletion was successful
        if (!deletedUser) {
            return res.status(404).send("User not found");
        }
        
        // Send success response
        return res.status(200).send("User deleted successfully");
    });
};

module.exports = { deleteUser };
