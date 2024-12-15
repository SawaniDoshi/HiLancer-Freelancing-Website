









import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './fetch.css';
import Card from './Card';
import Recommenheader from './recommenheader';

const Fetchmachine = () => {
  const key = "AIzaSyAqg0Bg0ZF0lA03t-LRfso3HRizJl2u8Jw";
  const campuscodex = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCCWi3hpnq_Pe03nGxuS7isg&key=${key}&maxResults=50`; 
  const codewithharry = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCeVMnSShP_Iviwkknt83cww&key=${key}&maxResults=50`;
  const project = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCqZwFqhrn8QXclNz3VbdWLw&key=${key}&maxResults=50`;

  const [data, setdata] = useState([]);
  
  const getMachine = async () => {
    try {
      const res1 = await axios.get(campuscodex);
      const res2 = await axios.get(codewithharry);
      const res3 = await axios.get(project);
      console.log("Campus Codex Data:", res1.data.items);
      console.log("Code with Harry Data:", res2.data.items);
      console.log("Project Data:", res3.data.items);
      
      setdata([...res1.data.items, ...res2.data.items, ...res3.data.items]);

    } catch (error) {
      if (error.response) {
        console.log("Error response:", error.response.data);
      } else if (error.request) {
        console.log("No response received:", error.request);
      } else {
        console.log("Axios error:", error.message);
      }
    }
  };

  useEffect(() => {
    getMachine();
  }, []);

  const filterdata = data.filter((curElem) =>
    curElem.snippet?.title?.toLowerCase().includes("machine learning") ||
    curElem.snippet?.description?.toLowerCase().includes("machine learning") ||
    curElem.snippet?.description?.toLowerCase().includes("machine learning projects") ||
    curElem.snippet?.title?.toLowerCase().includes("deep learning") ||
    curElem.snippet?.title?.toLowerCase().includes("python for beginners") ||
    curElem.snippet?.title?.toLowerCase().includes("generative ai series")
  );

  console.log("Filtered Data:", filterdata);

  return (
    <>
      <Recommenheader />
      {/* <div className='mach'>
        <img src="https://cdn.pixabay.com/photo/2022/06/20/14/20/space-7273891_960_720.jpg" alt="" />
        </div> */}
      <div className='machine'>
        {filterdata.length > 0 ? (
          filterdata.map((currElem) => {
            return <Card key={currElem.id} getMachine={currElem} />;
          })
        ) : (
          <>Loading</>
        )
        }
        
        
        </div>
    </>
  );
};

export default Fetchmachine;








