
import '../src/Styles/App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ClientLogin from './components/ClientLogin';
import RaiseTicket from './components/RaiseTicket';
import AgentDashBoard from './components/AgentDashBoard';
import ClientTickets from './components/ClientTickets';
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn = useSelector(state =>state.user.loggedIn)
  console.log(isLoggedIn)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ClientLogin />}></Route>
          <Route path="/customer" element={<RaiseTicket />}></Route>
          <Route path="/agent" element={<AgentDashBoard/>}></Route>

          <Route path="/customer/mytickets" element={<ClientTickets />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
