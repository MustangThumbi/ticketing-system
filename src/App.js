
import '../src/Styles/App.css';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ClientLogin from './components/ClientLogin';
import RaiseTicket from './components/RaiseTicket';
import AgentDashBoard from './components/AgentDashBoard';
import ClientTickets from './components/ClientTickets';
import { useSelector } from 'react-redux';
import Topbar from './components/Topbar';
import SuperAgent from './components/SuperAgent';

function App() {
  const isLoggedIn = useSelector(state =>state.user.loggedIn)
  console.log(isLoggedIn)
  return (
    <div className="App">
      <BrowserRouter>
      <Topbar/>
      
        <Routes>
          <Route path="/" element={<ClientLogin />}></Route>
          <Route path="/customer" element={<RaiseTicket />}></Route>
          <Route path="/agent" element={<AgentDashBoard/>}></Route>
          <Route path="/superagent" element={<SuperAgent/>}></Route>

          <Route path="/customer/mytickets" element={<ClientTickets />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
