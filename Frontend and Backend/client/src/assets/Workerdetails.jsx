// import React, { useState } from 'react'
// import './workdetails.css'
// import { useNavigate } from 'react-router-dom';
// const Workerdetails = () => {
//   const [category,setcategory]=useState([]);
//   const cate=(newcategory)=>{
//     setcategory([...category,newcategory])
//   }
//   const navigate=useNavigate();
//   const handleclick=()=>{
//     navigate('/findjob')
//   }
//   return (
//     <>
//     <div className='body'>
//     <div className='skill'> 
//     <h1 >Skills</h1> </div>
//     <div className='container6'>
//     <h2>Tell us your top skills</h2>
//     <p>This helps us recommended jobs for you</p>
//     <div>
//       <input type="text" placeholder='search a skill'/>
//     </div>
//     </div>

//     <div className='grid'>
//       <div className='category'>
//       <div className='grid-1'>Select category</div>
//       <p onClick={() => cate("Java")}>Java</p>
//       <p onClick={()=>cate("web dev")}>web dev</p>
//       <p onClick={()=>cate("design")}>design</p>
//       <p onClick={()=>cate("portfolio")}>portfolio</p>
//       </div>
      
//       <div className='grid-1'> 
//         {category.length===0? ("No category Selcted"):(
//       // category && <div>Category Selected : {category} </div>
//       <>
//       <p>Category selected</p>
//      { category.map((item,index)=>{
//         return <p key={index}>{item}</p>
//       })}
//       </>
//       )}

          
      
//       </div>
//       <div className='grid-1'>Skills selected </div>
//     </div>

//       </div>
//       <div className='new-section'>
//         <p className='resume'>Add your resume </p>
//           <form >
//             <input type="file" name='profileImage'  />
//             <button type='submit'>Upload</button>
//              </form>
         
       
//         </div>
//         <div className='btn-next'>
//       <button className='next' onClick={handleclick}>Next</button>
//       </div>
     

      
//     </>
//   )
// }

// export default Workerdetails







import React, { useState } from "react";
import "./workdetails.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Workerdetails = () => {
  const [category, setCategory] = useState([]);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const cate = (newCategory) => {
    setCategory([...category, newCategory]);
  };

  const handleClick = () => {
    navigate("/findjob");
  };

  const upload = (e) => {
    e.preventDefault(); // Prevent form submission and page reload

    // Create a new FormData object
    const formData = new FormData();
    formData.append("profileImage", file); // Append the file to the FormData
    // If you want to send other data like selected category, you can append it to FormData
    formData.append("category", JSON.stringify(category));

    // Send the FormData to the server using axios
    axios
      .post("http://localhost:3001/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        alert("File uploaded successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("File upload failed");
      });
  };

  return (
    <>
      <div className="body">
        <div className="skill">
          <h1>Skills</h1>
        </div>
        <div className="container6">
          <h2>Tell us your top skills</h2>
          <p>This helps us recommend jobs for you</p>
          <div>
            <input type="text" placeholder="Search a skill" />
          </div>
        </div>

        <div className="grid">
          <div className="category">
            <div className="grid-1">Select category</div>
            <p onClick={() => cate("Java")}>Java</p>
            <p onClick={() => cate("web dev")}>Web Dev</p>
            <p onClick={() => cate("design")}>Design</p>
            <p onClick={() => cate("portfolio")}>Portfolio</p>
          </div>

          <div className="grid-1">
            {category.length === 0 ? (
              "No category selected"
            ) : (
              <>
                <p>Category selected</p>
                {category.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
                <button>Add</button>
              </>
              
            )}
          </div>
        </div>

        <div className="new-section">
          <p className="resume">Add your resume</p>
          <form onSubmit={upload}>
            <input
              type="file"
              name="profileImage"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <button type="submit">Upload</button>
          </form>
        </div>

        <div className="btn-next">
          <button className="next" onClick={handleClick}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Workerdetails;


