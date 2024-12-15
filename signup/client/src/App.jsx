import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Ask from './assets/ask'
import Signup from './assets/Signup'; 
import Login from './assets/Login';
import Home from './assets/Home'
import Fresherexperienced from './assets/fresherexperienced';
import Workerdetails from './assets/Workerdetails';
import Recommendation from './assets/recommendation';
import FindJob from './assets/findjob';
import Hireexpert from './assets/hireexpert';
import Fetchmachine from './assets/fetchmachine';
import Fetchwebdevelop from './assets/Fetchwebdevelop';
import Datascience from './assets/datascience';
import DeliverTask from './assets/DeliverTask';
import JobDetails from './JobDetails'; // Import your job details component
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} /> {/* Route for the root path */}
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/ask' element={<Ask />} />
        <Route path='/fresherexperienced' element={< Fresherexperienced  />} />
        <Route path='/recommendation' element={< Recommendation />} />
        <Route path='/workerdetails' element={< Workerdetails />} />
        <Route path='/findjob' element={<FindJob/>}/>
        <Route path='/hireexpert' element={<Hireexpert/>}/>
        <Route path='/fetchmachine' element={<Fetchmachine/>}/>
        <Route path='/fetchwebdevelop' element={<Fetchwebdevelop/>}/>
        <Route path='/datascience' element={<Datascience/>}/>
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path='/DeliverTask' element={<DeliverTask/>}/>
 {/* Job details page */}
 

        {/* <Route path='/postjobs' element={<Hireexpert/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
