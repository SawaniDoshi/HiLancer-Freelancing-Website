// import React, { useState, useEffect } from 'react';
// import './findjob.css';
// import axios from 'axios';
// import { Link } from 'react-router-dom'; 
// const FindJob = () => {
//   const [loading, setLoading] = useState(true);
//   const [findjob, setJob] = useState([]);

//   useEffect(() => {
//     setLoading(true);
//     axios.get('http://localhost:3001/api/jobs/all')
//       .then(response => {
//         setJob(response.data);
//         setLoading(false); 
//       })
//       .catch(err => {
//         console.log(err);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <>
//       <header>
//         <div className="header-container">
//           <h1 className="logo-title">Hilancing</h1>
//           <nav className="main-nav">
//             <ul className="nav-list">
//               <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
//               <li className="nav-item"><a href="#" className="nav-link">Find Work</a></li>
//               <li className="nav-item"><a href="#" className="nav-link">Deliver Work</a></li>
//               <li className="nav-item"><a href="#" className="nav-link">Manage Finances</a></li>
//               <li className="nav-item"><a href="#" className="nav-link">Messages</a></li>
//               <li className="nav-item nav-dropdown">
//                 <a href="#" className="dropdown-toggle nav-link">Account</a>
//                 <ul className="dropdown-menu">
//                 <li className="dropdown-item"><a href="#" className="dropdown-link">Profile</a></li>
//                   <li className="dropdown-item"><a href="#" className="dropdown-link">Account Settings</a></li>
//                   <li className="dropdown-item"><a href="#" className="dropdown-link">Logout</a></li>
//                 </ul>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </header>
//       <main>
//         <section className="hero-section">
//           <div className="hero-container">
//             <h2 className="hero-title">Find the Perfect Job or Freelancer</h2>
//             <div className="search-bar">
//               <input
//                 type="text"
//                 className="search-input"
//                 placeholder="Search for jobs or freelancers"
//               />
//               <button className="search-button">Search</button>
//             </div>
//             <div className="filter-options">
//               <label htmlFor="category" className="filter-label">Category:</label>
//               <select id="category" className="category-select">
//                 <option value="all">All</option>
//                 <option value="web-development">Web Development</option>
//                 <option value="graphic-design">Graphic Design</option>
//                 <option value="writing">Writing</option>
//               </select>
//               <label htmlFor="budget" className="filter-label">Budget:</label>
//               <input
//                 type="range"
//                 id="budget"
//                 className="budget-slider"
//                 min="0"
//                 max="1000"
//                 step="10"
//               />
//               <span id="budget-value" className="budget-value">Rs 0</span>
//             </div>
//           </div>
//         </section>
        
//         <section className="featured-jobs-section">
//           <div className="featured-jobs-container">
//             <h2 className="featured-jobs-title">Featured Jobs</h2>
//             <div className="jobs-carousel">
//               {findjob.length > 0 ? (
//                 findjob.map((job, index) => (
//                   <div className="job-card" key={index}>
//                     <h3 className="job-title">{job.Jobtitle}</h3>
//                     <Link to={`/job/${job.id}`}>View Details</Link>

//                     <p className="job-details">Fixed-price - Entry level - Est. Budget: {job.Budget}</p>
//                     <p className="job-description">Details about the job...</p>
//                     {/* <button className="apply-btn">Apply Now</button> */}
                  
//                     <button className="apply-btn">
//                       <Link to={`/job/${job.id}`} style={{ textDecoration: 'none', color: 'white' }}> {/* Link to JobDetails with job ID */}
//                         Apply Now
//                       </Link>
//                     </button>
                  
//                   </div>
//                 ))
//               ) : (
//                 <p>No jobs found.</p>
//               )}
//             </div>
//           </div>
//         </section>
//       </main>
//       <footer>
//         <div className="footer-container">
//           <p className="footer-text">&copy; 2024 Hilancing. All rights reserved.</p>
//         </div>
        
//       </footer>
//     </>
//   );
// };

// export default FindJob;







// import React, { useState, useEffect } from 'react';
// import './findjob.css';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const FindJob = () => {
//     const [loading, setLoading] = useState(true);
//     const [findjob, setJob] = useState([]);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         setLoading(true);
//         setError('');
//         axios.get('http://localhost:3001/api/jobs/all')
//             .then(response => {
//                 setJob(response.data);
//                 setLoading(false);
//             })
//             .catch(err => {
//                 console.log(err);
//                 setError('Error fetching jobs: ' + err.message);
//                 setLoading(false);
//             });
//     }, []);

//     const handleApply = (job) => {
//         const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
//         if (!appliedJobs.some(appliedJob => appliedJob._id === job._id)) {
//             appliedJobs.push(job);
//             localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs));
//             alert('Applied for the job successfully!');
//         } else {
//             alert('You have already applied for this job!');
//         }
//     };

//     return (
//         <>
//             <header>
//                 <div className="header-container">
//                     <h1 className="logo-title">Hilancing</h1>
//                     <nav className="main-nav">
//                         <ul className="nav-list">
//                             <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
//                             <li className="nav-item"><a href="#" className="nav-link">Find Work</a></li>
//                             <li className="nav-item"><a href="#" className="nav-link">Deliver Work</a></li>
//                             <li className="nav-item"><a href="#" className="nav-link">Manage Finances</a></li>
//                             <li className="nav-item"><a href="#" className="nav-link">Messages</a></li>
//                             <li className="nav-item nav-dropdown">
//                                 <a href="#" className="dropdown-toggle nav-link">Account</a>
//                                 <ul className="dropdown-menu">
//                                     <li className="dropdown-item"><a href="#" className="dropdown-link">Profile</a></li>
//                                     <li className="dropdown-item"><a href="#" className="dropdown-link">Account Settings</a></li>
//                                     <li className="dropdown-item"><a href="#" className="dropdown-link">Logout</a></li>
//                                 </ul>
//                             </li>
//                         </ul>
//                     </nav>
//                 </div>
//             </header>

//             <main>
//                 <section className="hero-section">
//                     <div className="hero-container">
//                         <h2 className="hero-title">Find the Perfect Job or Freelancer</h2>
//                         <div className="search-bar">
//                             <input
//                                 type="text"
//                                 className="search-input"
//                                 placeholder="Search for jobs or freelancers"
//                             />
//                             <button className="search-button">Search</button>
//                         </div>
//                         <div className="filter-options">
//                             <label htmlFor="category" className="filter-label">Category:</label>
//                             <select id="category" className="category-select">
//                                 <option value="all">All</option>
//                                 <option value="web-development">Web Development</option>
//                                 <option value="graphic-design">Graphic Design</option>
//                                 <option value="writing">Writing</option>
//                             </select>
//                             <label htmlFor="budget" className="filter-label">Budget:</label>
//                             <input
//                                 type="range"
//                                 id="budget"
//                                 className="budget-slider"
//                                 min="0"
//                                 max="1000"
//                                 step="10"
//                             />
//                             <span id="budget-value" className="budget-value">Rs 0</span>
//                         </div>
//                     </div>
//                 </section>

//                 <section className="featured-jobs-section">
//                     <div className="featured-jobs-container">
//                         <h2 className="featured-jobs-title">Featured Jobs</h2>

//                         {/* Error Handling */}
//                         {error && <p style={{ color: 'red' }}>{error}</p>}

//                         {/* Loading state */}
//                         {loading ? (
//                             <p>Loading jobs...</p>
//                         ) : (
//                             <div className="jobs-carousel">
//                                 {findjob.length > 0 ? (
//                                     findjob.map((job) => (
//                                         <div className="job-card" key={job._id}>
//                                             <h3 className="job-title">{job.Jobtitle}</h3>
//                                             <Link to={`/job/${job.id}`}>View Details</Link>
//                                             <p className="job-details">Fixed-price - Entry level - Est. Budget: {job.Budget}</p>
//                                             <p className="job-description">{job.Jobdesc}</p>
                                            
//                                             {/* Apply button */}
//                                             <button className="apply-btn" onClick={() => handleApply(job)}>
//                                                 Apply Now
//                                             </button>
//                                         </div>
//                                     ))
//                                 ) : (
//                                     <p>No jobs found.</p>
//                                 )}
//                             </div>
//                         )}
//                     </div>
//                 </section>
//             </main>

//             <footer>
//                 <div className="footer-container">
//                     <p className="footer-text">&copy; 2024 Hilancing. All rights reserved.</p>
//                 </div>
//             </footer>
//         </>
//     );
// };

// export default FindJob;



























import React, { useState, useEffect } from 'react';
import './findjob.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const FindJob = () => {
    const [loading, setLoading] = useState(true);
    const [findjob, setJob] = useState([]);
    const [error, setError] = useState('');
    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {
        setLoading(true);
        setError('');
        axios.get('http://localhost:3001/api/jobs/all')
            .then(response => {
                setJob(response.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setError('Error fetching jobs: ' + err.message);
                setLoading(false);
            });
    }, []);

    // Load applied jobs from localStorage
    useEffect(() => {
        const storedAppliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
        setAppliedJobs(storedAppliedJobs);
    }, []);

    const handleApply = (job) => {
        const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
        if (!appliedJobs.some(appliedJob => appliedJob._id === job._id)) {
            appliedJobs.push(job);
            localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs));
            setAppliedJobs(appliedJobs); // Update state for applied jobs
            alert('Applied for the job successfully!');
        } else {
            alert('You have already applied for this job!');
        }
    };

    return (
        <>
            <header>
                <div className="header-container">
                    <h1 className="logo-title">Hilancing</h1>
                    <nav className="main-nav">
                        <ul className="nav-list">
                            <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Find Work</a></li>
                            <li className="nav-item nav-dropdown">
                                <a href="/DeliverTask" className="dropdown-toggle nav-link">Deliver Work</a>

{/* Inside the "Deliver Work" dropdown menu */}
{/* <li className="dropdown-item">
    <Link to="/deliver-task" className="dropdown-link">Upload Task</Link>
</li> */}


                                <ul className="dropdown-menu">
                                    {appliedJobs.length > 0 ? (
                                        appliedJobs.map((job, index) => (
                                            <li key={index} className="dropdown-item">
                                                <Link to={`/job/${job._id}`} className="dropdown-link">{job.Jobtitle}</Link>
                                            </li>
                                        ))
                                    ) : (
                                        <li className="dropdown-item"><span className="dropdown-link">No jobs applied yet</span></li>
                                    )}
                                    {/* New "Upload Task" option */}
                                    <li className="dropdown-item">
                                        <Link to="/DeliverTask" className="dropdown-link">Upload Task</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item"><a href="#" className="nav-link">Manage Finances</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Messages</a></li>
                            <li className="nav-item nav-dropdown">
                                <a href="#" className="dropdown-toggle nav-link">Account</a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item"><a href="#" className="dropdown-link">Profile</a></li>
                                    <li className="dropdown-item"><a href="#" className="dropdown-link">Account Settings</a></li>
                                    <li className="dropdown-item"><a href="#" className="dropdown-link">Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main>
                <section className="hero-section">
                    <div className="hero-container">
                        <h2 className="hero-title">Find the Perfect Job or Freelancer</h2>
                        <div className="search-bar">
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Search for jobs or freelancers"
                            />
                            <button className="search-button">Search</button>
                        </div>
                        <div className="filter-options">
                            <label htmlFor="category" className="filter-label">Category:</label>
                            <select id="category" className="category-select">
                                <option value="all">All</option>
                                <option value="web-development">Web Development</option>
                                <option value="graphic-design">Graphic Design</option>
                                <option value="writing">Writing</option>
                            </select>
                            <label htmlFor="budget" className="filter-label">Budget:</label>
                            <input
                                type="range"
                                id="budget"
                                className="budget-slider"
                                min="0"
                                max="1000"
                                step="10"
                            />
                            <span id="budget-value" className="budget-value">Rs 0</span>
                        </div>
                    </div>
                </section>

                <section className="featured-jobs-section">
                    <div className="featured-jobs-container">
                        <h2 className="featured-jobs-title">Featured Jobs</h2>

                        {/* Error Handling */}
                        {error && <p style={{ color: 'red' }}>{error}</p>}

                        {/* Loading state */}
                        {loading ? (
                            <p>Loading jobs...</p>
                        ) : (
                            <div className="jobs-carousel">
                                {findjob.length > 0 ? (
                                    findjob.map((job) => (
                                        <div className="job-card" key={job._id}>
                                            <h3 className="job-title">{job.Jobtitle}</h3>
                                            <Link to={`/job/${job.id}`}>View Details</Link>
                                            <p className="job-details">Fixed-price - Entry level - Est. Budget: {job.Budget}</p>
                                            <p className="job-description">{job.Jobdesc}</p>
                                            
                                            {/* Apply button */}
                                            <button className="apply-btn" onClick={() => handleApply(job)}>
                                                Apply Now
                                            </button>
                                        </div>
                                    ))
                                ) : (
                                    <p>No jobs found.</p>
                                )}
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <footer>
                <div className="footer-container">
                    <p className="footer-text">&copy; 2024 Hilancing. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default FindJob;

