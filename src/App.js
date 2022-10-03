
import '../src/Styles/App.css';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ClientLogin from './components/ClientLogin';
import RaiseTicket from './components/RaiseTicket';
import AgentDashBoard from './components/AgentDashBoard';
import ClientTickets from './components/ClientTickets';
import { useSelector } from 'react-redux';
import Topbar from './components/Topbar';
import SuperAgent from './components/SuperAgent';
import { Switch } from '@mui/material';
import { selectUser } from './Redux/reducers/userSlice';

function App() {
 
  const user= useSelector(selectUser)
  return (
    <div className="App">
      <BrowserRouter>
       
    
          {!user ?(
            <ClientLogin />
          ):(
           
           
             < Routes> 
          <Route path="/agent" element={<AgentDashBoard/>}></Route>
          <Route exact path="/" element={<RaiseTicket />}> </Route>
          <Route path="/superagent" element={<SuperAgent/>}></Route>
         
       
           </Routes>
          )}
          
          

        
      </BrowserRouter>
    </div>
  );
}

export default App;
