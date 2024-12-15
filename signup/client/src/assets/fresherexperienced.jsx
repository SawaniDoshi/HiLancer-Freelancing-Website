import React from 'react';
import './ask.css'; // Make sure this file includes the CSS above
import { useNavigate } from 'react-router-dom';
const Fresherexperienced = () => {

    const navigate=useNavigate()
    const working=()=>{
        navigate('/Workerdetails')
    }

    const fresher=()=>{
      navigate('/recommendation')
    }
  return (
    <>
    <div className='back'>
    <div className='image'>
     <img src="https://img.freepik.com/free-photo/abstract-luxury-plain-blur-grey-black-gradient-used-as-background-studio-wall-display-your-products_1258-63629.jpg?w=1380&t=st=1727846039~exp=1727846639~hmac=16dd755df18235414e91694e6c705e71ed562a0f35bce067a53adda2fc0d1c27" alt="" />
     </div>
    <div className='containersss'>
        <div className='box' onClick={working}>Experienced</div>
      <div className='box' onClick={fresher}>Fresher</div>
     
    </div>
    
     </div> </>
  );
}

export default Fresherexperienced;
