// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from 'axios';
// import './Signup.css'
// function Signup() {    
//     const [name, setName] = useState(''); // Default to empty string
//     const [email, setEmail] = useState(''); // Default to empty string
//     const [password, setPassword] = useState(''); // Default to empty string
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post("http://localhost:3001/register", { name, email, password })
//             .then(result => {
//                 console.log(result);
//                 navigate("/login");
//             })
//             .catch(err => console.log(err));
//     };

//     return (
//         <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
//             <div className="bg-white p-3 rounded w-25">
//                 <h2><center>Sign Up</center></h2>

//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <label htmlFor="name">
//                             <strong>Name</strong>
//                         </label>
//                         <input
//                             type="text"
//                             placeholder='Enter Name'
//                             autoComplete='off'
//                             id='name' // Add an id attribute for better accessibility
//                             name='name' // Use 'name' for the name input
//                             className='form-control rounded-0'
//                             value={name} // Use value prop for controlled input
//                             onChange={(e) => setName(e.target.value)}
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="email">
//                             <strong>Email</strong>
//                         </label>
//                         <input
//                             type="email" // Change to 'email' for validation
//                             placeholder='Enter Email'
//                             autoComplete='off'
//                             id='email' // Add an id attribute for better accessibility
//                             name='email' // Use 'email' for the email input
//                             className='form-control rounded-0'
//                             value={email} // Use value prop for controlled input
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="password">
//                             <strong>Password</strong>
//                         </label>
//                         <input
//                             type="password"
//                             placeholder='Enter Password'
//                             id='password' // Add an id attribute for better accessibility
//                             name='password' // Use 'password' for the password input
//                             className='form-control rounded-0'
//                             value={password} // Use value prop for controlled input
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                     </div>
//                     <button type="submit" className="btn btn-success w-100 rounded-0">
//                         Sign Up
//                     </button>
//                 </form>
//                 <p>Already have an account?</p>
//                 <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
//                     Login
//                 </Link>
//             </div>
//         </div>
//     );
// }

// export default Signup;














// import { useState } from 'react';
// import './signup.css';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const [firstname, setFirstname] = useState('');
//   const [lastname, setLastname] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState(''); // Add confirm password
//   const [role, setRole] = useState('Worker'); // Default to Worker
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       alert('Passwords do not match!');
//       return;
//     }

//     // Post form data to backend API
//     axios.post('http://localhost:3001/api/auth/register', { firstname, lastname, email, password, role })
//       .then(result => {
//         console.log(result);
//         // Navigate to login after successful registration
//         navigate('/login');
//       })
//       .catch(err => {
//         console.error(err);
//         alert("Error registering user");
//       });
//   };

//   return (
//     <section className="background-radial-gradient overflow-hidden">
//       <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
//         <div className="row gx-lg-5 align-items-center mb-5">
//           <div className="col-lg-6 mb-5 mb-lg-0">
//             <h1 className="my-5 display-5 fw-bold ls-tight">
//               Sign up <br />
//             </h1>
//             <p className="mb-4 opacity-70">
//               Join us today and start exploring amazing features and benefits. Create your account and enjoy the best we have to offer.
//             </p>
//           </div>

//           <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
//             <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
//             <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

//             <form onSubmit={handleSubmit}>
//               {/* Firstname */}
//               <div className="form-outline mb-4">
//                 <input
//                   type="text"
//                   id="firstname"
//                   className="form-control"
//                   required
//                   value={firstname}
//                   onChange={(e) => setFirstname(e.target.value)}
//                 />
//                 <label className="form-label" htmlFor="firstname">First Name</label>
//               </div>

//               {/* Lastname */}
//               <div className="form-outline mb-4">
//                 <input
//                   type="text"
//                   id="lastname"
//                   className="form-control"
//                   required
//                   value={lastname}
//                   onChange={(e) => setLastname(e.target.value)}
//                 />
//                 <label className="form-label" htmlFor="lastname">Last Name</label>
//               </div>

//               {/* Email */}
//               <div className="form-outline mb-4">
//                 <input
//                   type="email"
//                   id="email"
//                   className="form-control"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <label className="form-label" htmlFor="email">Email Address</label>
//               </div>

//               {/* Password */}
//               <div className="form-outline mb-4">
//                 <input
//                   type="password"
//                   id="password"
//                   className="form-control"
//                   required
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <label className="form-label" htmlFor="password">Password</label>
//               </div>

//               {/* Confirm Password */}
//               <div className="form-outline mb-4">
//                 <input
//                   type="password"
//                   id="confirmPassword"
//                   className="form-control"
//                   required
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                 />
//                 <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
//               </div>

//               {/* Role */}
//               <div className="mb-4">
//                 <select
//                   className="form-select"
//                   value={role}
//                   onChange={(e) => setRole(e.target.value)}
//                 >
//                   <option value="Worker">Worker</option>
//                   <option value="Hire">Hire</option>
//                 </select>
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="btn btn-primary btn-block mb-4"
//                 style={{
//                   display: 'flex',
//                   width: '20%',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   bottom: '20%',
//                 }}
//               >
//                 Sign up
//               </button>

//               {/* Login Redirect */}
//               <div className="log text-center">
//                 Already registered? <a href="/login" style={{ color: 'blue' }}>Login</a>
//               </div>
//             </form>

//             <div className="text-center">
//               <p>or sign up with:</p>
//               <button type="button" className="btn btn-link btn-floating mx-1">
//                 <i className="fab fa-facebook-f"></i>
//               </button>
//               <button type="button" className="btn btn-link btn-floating mx-1">
//                 <i className="fab fa-google"></i>
//               </button>
//               <button type="button" className="btn btn-link btn-floating mx-1">
//                 <i className="fab fa-twitter"></i>
//               </button>
//               <button type="button" className="btn btn-link btn-floating mx-1">
//                 <i className="fab fa-github"></i>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Signup;

















import { useState } from 'react';
import './signup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // Add confirm password
  const [role, setRole] = useState('Worker'); // Default to Worker
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // <img src="https://img.freepik.com/premium-vector/programmer-engineering-coding-programmer-working-code-web-app-development-computer_999327-92306.jpg" alt="" />

    // Post form data to backend API
    axios.post('http://localhost:3001/api/auth/register', { firstname, lastname, email, password, role })
      .then(result => {
        console.log(result);
        // Navigate to login after successful registration
        navigate('/login');
      })
      .catch(err => {
        console.error(err);
        alert("Error registering user");
      });
  };

  return (
    <section className="background-radial-gradient overflow-hidden">
      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h1 className="my-5 display-5 fw-bold ls-tight">
              Sign up <br />
            </h1>
            <p className="mb-4 opacity-70">
              Join us today and start exploring amazing features and benefits. Create your account and enjoy the best we have to offer.
            </p>
            <img
              src="https://img.freepik.com/premium-vector/programmer-engineering-coding-programmer-working-code-web-app-development-computer_999327-92306.jpg"
              alt="Signup Illustration"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

            <form onSubmit={handleSubmit}>
              {/* Firstname */}
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="firstname"
                  className="form-control"
                  required
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <label className="form-label" htmlFor="firstname">First Name</label>
              </div>

              {/* Lastname */}
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="lastname"
                  className="form-control"
                  required
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
                <label className="form-label" htmlFor="lastname">Last Name</label>
              </div>

              {/* Email */}
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="form-label" htmlFor="email">Email Address</label>
              </div>

              {/* Password */}
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="form-label" htmlFor="password">Password</label>
              </div>

              {/* Confirm Password */}
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="confirmPassword"
                  className="form-control"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
              </div>

              {/* Role */}
              <div className="mb-4">
                <select
                  className="form-select"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="Worker">Worker</option>
                  <option value="Hire">Hire</option>
                </select>
              </div>
<br />
              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary btn-block mb-4"
                style={{
                  display: 'flex',
                  width: '20%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  bottom: '20%',
                }}
              >
                Sign up
              </button>

              {/* Login Redirect */}
              <div className="log text-center">
                Already registered? <a href="/login" style={{ color: 'blue' }}>Login</a>
               
              </div>
           
            </form>

            <div className="text-center">
              <p>or sign up with:</p>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-google"></i>
              </button>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-twitter"></i>
              </button>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-github"></i>
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
