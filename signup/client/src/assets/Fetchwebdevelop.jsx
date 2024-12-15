

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './fetch.css';
// import Card from './Card';
// import Recommenheader from './recommenheader';
// const Fetchwebdevelop= () => {
//   const key = "AIzaSyAqg0Bg0ZF0lA03t-LRfso3HRizJl2u8Jw";
//   const apnaclg = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UC1XBh-m27kkgwLAwu_SRJBg&key=${key}&maxResults=20`; 
//   const codewithharry = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCeVMnSShP_Iviwkknt83cww&key=${key}&maxResults=20`;
// //   const project = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCqZwFqhrn8QXclNz3VbdWLw&key=${key}&maxResults=20`;

//   const [data, setdata] = useState([]);
//   const getMachine = async () => {
//     try {
//       const res1 = await axios.get(apnaclg);
//       const res2 = await axios.get(codewithharry);
//     //   const res3 = await axios.get(project);
//     //   console.log("Campus Codex Data:", res1.data.items);
//     //   console.log("Code with Harry Data:", res2.data.items);
//     //   console.log("Project Data:", res3.data.items);
      
//       setdata([...res1.data.items, ...res2.data.items]);
//     } catch (error) {
//       if (error.response) {
//         console.log("Error response:", error.response.data);
//       } else if (error.request) {
//         console.log("No response received:", error.request);
//       } else {
//         console.log("Axios error:", error.message);
//       }
//     }
//   };

//   useEffect(() => {
//     getMachine();
//   }, []);

//   const filterdata = data.filter((curElem) =>
//     curElem.snippet?.title?.toLowerCase().includes("web development") ||
//     curElem.snippet?.description?.toLowerCase().includes("mern projects") ||
//     curElem.snippet?.description?.toLowerCase().includes("web development projects") ||
//     curElem.snippet?.description?.toLowerCase().includes("web development course") ||
//     // curElem.snippet?.description?.toLowerCase().includes("projects") 
//     curElem.snippet?.title?.toLowerCase().includes("web development") ||
//     curElem.snippet?.description?.toLowerCase().includes("web development") ||
//     curElem.snippet?.description?.toLowerCase().includes("mern stack") ||
//     curElem.snippet?.description?.toLowerCase().includes("react") ||
//     curElem.snippet?.description?.toLowerCase().includes("node.js") ||
//     curElem.snippet?.description?.toLowerCase().includes("full stack")
//     // curElem.snippet?.title?.toLowerCase().includes("deep learning") ||
//     // curElem.snippet?.title?.toLowerCase().includes("python for beginners") ||
//     // curElem.snippet?.title?.toLowerCase().includes("generative ai series")
//   );

//   console.log("Filtered Data:", filterdata);

//   return (
//     <>
//       <Recommenheader />
//       <div className='machine'>
//         {filterdata.length > 0 ? (
//           filterdata.map((currElem) => {
//             return <Card key={currElem.id} getMachine={currElem} />;
//           })
//         ) : (
//           <>Loading</>
//         )}
//       </div>
//     </>
//   );
// };

// export default Fetchwebdevelop;











import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './fetch.css';
import Card from './Card';
import Recommenheader from './recommenheader';

const Fetchwebdevelop = () => {
    const key = "AIzaSyAqg0Bg0ZF0lA03t-LRfso3HRizJl2u8Jw";
    
    // Fetch more results
    const apnaclg = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UC1XBh-m27kkgwLAwu_SRJBg&key=${key}&maxResults=50`; 
    const codewithharry = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCeVMnSShP_Iviwkknt83cww&key=${key}&maxResults=50`;
    const freecodecamp = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UClLQp_GforzsmSpSec5M7Ww&key=${key}&maxResults=50`; 
    const academind = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCSJbGtTlrDami-tDGPUV9-w&key=${key}&maxResults=50`;

    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state

    const getMachine = async () => {
        setLoading(true); // Start loading
        try {
            const res1 = await axios.get(apnaclg);
            const res2 = await axios.get(codewithharry);
            const res3 = await axios.get(freecodecamp);
            const res5 = await axios.get(academind);

            setdata([
                ...res1.data.items, 
                ...res2.data.items, 
                ...res3.data.items,
                ...res5.data.items
            ]);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    useEffect(() => {
        getMachine();
    }, []);

    const filterdata = data.filter((curElem) =>
        curElem.snippet?.title?.toLowerCase().includes("web development") ||
        curElem.snippet?.description?.toLowerCase().includes("mern projects") ||
        curElem.snippet?.description?.toLowerCase().includes("web development projects") ||
        curElem.snippet?.description?.toLowerCase().includes("web development course") ||
        curElem.snippet?.title?.toLowerCase().includes("mern stack") ||
        curElem.snippet?.description?.toLowerCase().includes("react") ||
        curElem.snippet?.description?.toLowerCase().includes("node.js") ||
        curElem.snippet?.description?.toLowerCase().includes("full stack")
    );

    

    return (
        <>
            <Recommenheader />
            <div className='machine'>
                {loading ? ( // Show loading indicator
                    <p>Loading videos...</p>
                ) : filterdata.length > 0 ? (
                    filterdata.map((currElem) => (
                        <Card key={currElem.id} getMachine={currElem} />
                    ))
                ) : (
                    <p>No videos found.</p>
                )}
            </div>
        </>
    );
};

export default Fetchwebdevelop;
