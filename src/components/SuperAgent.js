import React,{useState} from 'react'
import { Avatar, Button, Input, Modal } from "@mui/material";
import "../Styles/AgentDashBoard.css"
import { Link } from "react-router-dom";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { AddCircleOutline } from '@mui/icons-material';
import { registerWithEmailAndPassword } from '../Database/firebase';



function SuperAgent() {
    const [email, setEmail] = useState('');
    const [username, setUsername]= useState('');
    const [password, setPassword] = useState('');
    const [openSignUp, setOpenSignUp]= useState("");
    const [open,setOpen]= useState(true)
    // const login = e => {
  return (
    <div className="agentdashboard">
               <Modal
     className='signup-modal'
  open={openSignUp}
  onClose={() =>setOpenSignUp(false)}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
>
   <form className='signup-form'>
 <center> 
    <img className='signup-logo' src=" https://avatars.dicebear.com/api/human/:matiru5810.svg"/>
   </center>
   

   <Input
   placeholder="email"
   type="text"
   className='signup-input'
   value={email}
   onChange={(e)=> setEmail(e.target.value)}/>

<Input
   placeholder="Username"
   type="text"
   className='signup-input'
   value={username}
   onChange={(e)=> setEmail(e.target.value)}/>
 

   <Input
   placeholder="password"
   type="password"
   value={password}
    className='signup-input'
   onChange={(e)=> setPassword(e.target.value)}/>
   <Button className='signup-btn' type="submit" onClick={registerWithEmailAndPassword}>signup</Button>
   <Button className='google' type="submit" >Google</Button>
</form>

  
  </Modal>
      <div className="agentdashboard_sidebar">
        <div className="agentdashboard_sidebar_header">
          <Avatar src="https://avatars.dicebear.com/api/human/:matiru5810.svg" />
          <h1>username</h1>
        </div>
        <div className="agentdashboard_sidebar_nav">

          <div className="button_container">
             <Link to="/customer" className="header_link"> 
            <span className="span_tickets">
              <h2>Agents</h2>
            </span>
            </Link>
          </div>
          <div className="button_container">
             <Link to="/customer" className="header_link"> 
            <span className="span_tickets">
              <h2>Customers</h2>
            </span>
            </Link>
          </div>
          <div className="button_container">
             <Link to="/customer" className="header_link"> 
            <span className="span_tickets">
              <h2>Report</h2>
            </span>
            </Link>
          </div>
          
          
        
          <div className="button_container">
            <Link to="/customer" className="header_link"> 
            <span className="span_tickets">
              <h2>StaffRoom</h2>
            </span>
            </Link>
          </div>
          
        </div>
      </div>
      <div className="agentdashboard_tickets">
        <div className="agentdashboard_tickets_header">
          <div className=" agentdashboard_tickets_header_heading">
            <h1> date 12th dec 2000</h1>
            <ArrowCircleLeftOutlinedIcon />
          </div>
          <div className=" agentdashboard_tickets_header_title">
            <h2>Tickets</h2>

            <div className="button_wrap">
              <button className="tickets_open">open tickets</button>
              <button className="tickets_closed"> closed tickets</button>
            </div>
          </div>
        </div>
        <div className="agentdashboard_tickets_ticketsdisplay">
       <div className='add_agent'><AddCircleOutline onClick={() => setOpenSignUp(true)} className='Add_icon'/> <h2>Add agent</h2></div>
        </div>
      </div>
    </div>
  );
}

export default SuperAgent