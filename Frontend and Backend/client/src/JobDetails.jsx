// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const JobDetails = () => {
//   const { id } = useParams();
//   const [job, setJob] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get(`http://localhost:3001/api/jobs/${id}`)
//       .then(response => {
//         setJob(response.data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.log(err);
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) return <p>Loading job details...</p>;

//   if (!job) return <p>Job not found.</p>;

//   return (
//     <div>
//       <h2>{job.Jobtitle}</h2>
//       <p>{job.Description}</p>
//       <p>Budget: {job.Budget}</p>
//       <p>Contact: {job.ContactInfo}</p>
//       {/* Add more details as necessary */}
//     </div>
//   );
// };

// export default JobDetails;







// // src/components/JobDetails.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
//  // Add your styles if necessary

// const JobDetails = () => {
//   const { id } = useParams(); // Get the job ID from the URL parameters
//   const [job, setJob] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchJobDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3001/api/jobs/${id}`); // Fetch job details by ID
//         setJob(response.data);
//         setLoading(false);
//       } catch (err) {
//         console.error(err);
//         setLoading(false);
//       }
//     };

//     fetchJobDetails();
//   }, [id]);

//   if (loading) {
//     return <p>Loading job details...</p>;
//   }

//   if (!job) {
//     return <p>Job not found.</p>;
//   }

//   return (
//     <div className="job-details-container">
//       <h2 className="job-title">{job.Jobtitle}</h2>
//       <p className="job-description">{job.Jobdesc}</p>
//       <h3>Requirements:</h3>
//       <ul className="job-requirements">
//         {job.ReqSkills.map((skill, index) => (
//           <li key={index}>{skill}</li>
//         ))}
//       </ul>
//       <p className="job-budget">Budget: Rs {job.Budget}</p>
//       <p className="job-date">Posted on: {new Date(job.Date).toLocaleDateString()}</p>
//       <button className="apply-button">Apply Now</button>
//     </div>
//   );
// };

// export default JobDetails;






import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    // Fetch job details based on ID
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`YOUR_API_URL/jobs/${id}`); // Replace with your API endpoint
        const data = await response.json();
        setJob(data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (!job) {
    return <div>Loading...</div>; // Show loading state
  }

  return (
    <div>
      <h2>{job.Jobtitle}</h2>
      <p>{job.Jobdesc}</p>
      <p><strong>Required Skills:</strong> {job.ReqSkills}</p>
      <p><strong>Budget:</strong> {job.Budget}</p>
      {/* Add more details as necessary */}
    </div>
  );
};

export default JobDetails;
