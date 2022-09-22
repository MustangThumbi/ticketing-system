import React from 'react'
import { Avatar } from "@mui/material";
import "./AgentDashBoard.css"
import { Link } from "react-router-dom";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";



function AgentDashBoard() {
  return (
    <div className="agentdashboard">
      <div className="agentdashboard_sidebar">
        <div className="agentdashboard_sidebar_header">
          <Avatar src="https://avatars.dicebear.com/api/human/:matiru5810.svg" />
          <h1>username</h1>
        </div>
        <div className="agentdashboard_sidebar_nav">

          <div className="button_container">
             <Link to="/customer" className="header_link"> 
            <span className="span_tickets">
              <h2>My Reports</h2>
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
          <div className="ticket_info1">
            <h2>subject:printer failure</h2>
            <h3>status:open</h3>
          </div>
          <div className="ticket_info1">
            <h2>subject:printer failure</h2>
            <h3>status:open</h3>
          </div>
          <div className="ticket_info1">
            <h2>subject:printer failure</h2>
            <h3>status:open</h3>
          </div>
          <div className="ticket_info1">
            <h2>subject:printer failure</h2>
            <h3>status:open</h3>
          </div>
          <div className="ticket_info1">
            <h2>subject:printer failure</h2>
            <h3>status:open</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgentDashBoard