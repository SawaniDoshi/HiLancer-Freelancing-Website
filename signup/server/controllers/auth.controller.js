






// const EmployeeSchema = require("../model/Employee");
// const bcrypt = require('bcrypt');

// const register = async (req, res) => {
//   try {
//     const { firstname, lastname, email, password, role } = req.body;
//     if (!firstname || !lastname || !email || !password || !role) {
//       return res.status(400).send('All fields are required');
//     }
//     // Log the incoming request
//     console.log('Request body:', req.body);

//     // Check if the email already exists (trim to avoid whitespace issues)
//     const existingUser = await EmployeeSchema.findOne({ email: email.trim() });
//     if (existingUser) {
//       return res.status(400).send("User with this email already exists.");
//     }

//     // Hash the password asynchronously
//     const hash = await bcrypt.hash(password, 10);

//     // Create a new user
//     const newUser = new EmployeeSchema({
//       firstname,
//       lastname,
//       email: email.trim(), // Ensure email is stored trimmed
//       password: hash,
//       role,
//     });

//     // Save newUser to the database
//     await newUser.save();
//     res.status(201).send("User has been created successfully.");
//   } catch (err) {
//     console.error('Registration error:', err); // More detailed error logging
//     res.status(500).send("Something went wrong");
//   }
// };

// const login = async (req, res) => {
//   try {
//     const user = await EmployeeSchema.findOne({ email: req.body.email });
//     if (!user) {
//       return res.status(404).send("User not found");
//     }

//     const isCorrect = bcrypt.compareSync(req.body.password, user.password);
//     if (!isCorrect) {
//       return res.status(400).send("Wrong password");
//     }

//     res.status(200).send("Login successful");
//   } catch (err) {
//     console.error('Login error:', err);
//     res.status(500).send("Something went wrong");
//   }
// };

// const logout = (req, res) => {
//   // Logout logic here
//   res.status(200).send("Logged out successfully");
// };

// module.exports = { register, login, logout };















// const EmployeeSchema = require("../model/Employee");
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const secret_key='NUqGCBv8Wv'
// const register = async (req, res) => {
//   try {
//     const { firstname, lastname, email, password, role } = req.body;
//     if (!firstname || !lastname || !email || !password || !role) {
//       return res.status(400).send('All fields are required');
//     }
//     // Log the incoming request
//     console.log('Request body:', req.body);

//     // Check if the email already exists (trim to avoid whitespace issues)
//     const existingUser = await EmployeeSchema.findOne({ email: email.trim() });
//     if (existingUser) {
//       return res.status(400).send("User with this email already exists.");
//     }

//     // Hash the password asynchronously
//     const hash = await bcrypt.hash(password, 10);

//     // Create a new user
//     const newUser = new EmployeeSchema({
//       firstname,
//       lastname,
//       email: email.trim(), // Ensure email is stored trimmed
//       password: hash,
//       role,
//     });

//     // Save newUser to the database
//     await newUser.save();
//     res.status(201).send("User has been created successfully.");
//   } catch (err) {
//     console.error('Registration error:', err); // More detailed error logging
//     res.status(500).send("Something went wrong");
//   }
// };

// const login = async (req, res) => {
//   try {
//     const user = await EmployeeSchema.findOne({ email: req.body.email });
//     if (!user) {
//       return res.status(404).send("User not found");
//     }

//     const isCorrect = await bcrypt.compare(req.body.password, user.password); // Use async compare
//     if (!isCorrect) {
//       return res.status(400).send("Wrong password");
//     }

//     const token = jwt.sign(
//       {
//         id: user._id, // Correct reference to user ID
//         role: user.role,
//       },
//       secret_key // Use the defined variable directly
//     );

//     res.cookie("accessToken", token, {
//       httpOnly: true,
//     }).status(200).json({ message: "Login successful", role: user.role }); // Send role in response
//   } catch (err) {
//     console.error('Login error:', err);
//     res.status(500).send("Something went wrong");
//   }
// };


// const logout = (req, res) => {
//   // Logout logic here
//   res.status(200).send("Logged out successfully");
// };

// module.exports = { register, login, logout };


























const EmployeeSchema = require("../model/Employee");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret_key='NUqGCBv8Wv'
const register = async (req, res) => {
  try {
    const { firstname, lastname, email, password, role } = req.body;
    if (!firstname || !lastname || !email || !password || !role) {
      return res.status(400).send('All fields are required');
    }
    // Log the incoming request
    console.log('Request body:', req.body);
    // Check if the email already exists (trim to avoid whitespace issues)
    const existingUser = await EmployeeSchema.findOne({ email: email.trim() });
    if (existingUser) {
      return res.status(400).send("User with this email already exists.");
    }

    // Hash the password asynchronously
    const hash = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new EmployeeSchema({
      firstname,
      lastname,
      email: email.trim(), // Ensure email is stored trimmed
      password: hash,
      role,
    });

    // Save newUser to the database
    await newUser.save();
    res.status(201).send("User has been created successfully.");
  } catch (err) {
    console.error('Registration error:', err); // More detailed error logging
    res.status(500).send("Something went wrong");
  }
};

const login = async (req, res) => {
  try {
    console.log('Login request body:', req.body); // Log the incoming request body

    const { email, password, role } = req.body; // Ensure role is destructured here

    const user = await EmployeeSchema.findOne({ email: email.trim() });
    if (!user) {
      return res.status(404).send("User not found");
    }

    const isCorrect = await bcrypt.compare(password, user.password); // Use async compare
    if (!isCorrect) {
      return res.status(400).send("Wrong password");
    }

    // Log the roles for comparison
    console.log('User role from DB:', user.role);
    console.log('Role from request:', role);

    // Check if the entered role matches the role in the database
    if (user.role !== role) {
      return res.status(403).send("Role does not match the user's role in the database.");
    }

    const token = jwt.sign(
      {
        id: user._id, // Correct reference to user ID
        role: user.role,
      },
      secret_key // Use the defined variable directly
    );

    res.cookie("accessToken", token, {
      httpOnly: true,
    }).status(200).json({ message: "Login successful", role: user.role }); // Send role in response
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).send("Something went wrong");
  }
};



const logout = (req, res) => {
  // Logout logic here
  res.status(200).send("Logged out successfully");
};

module.exports = { register, login, logout };
