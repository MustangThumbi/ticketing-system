
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ClientLogin from './ClientLogin';
import RaiseTicket from './RaiseTicket';
import ClientTickets from './ClientTickets';
import AgentDashBoard from './AgentDashBoard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<ClientLogin />}></Route>
          <Route path="/customer" element={<RaiseTicket />}></Route>
          <Route path="/agent" element={<AgentDashBoard/>}></Route>

          <Route path="/customer/mytickets" element={<ClientTickets />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
