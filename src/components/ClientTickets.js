import React from 'react'
import { Link } from "react-router-dom";
import "../Styles/ClientTickets.css"
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";

function ClientTickets() {
  return (
    <div className="client_tickets">
      <div className="client_tickets_header">
        <Link to="/customer" className='backheader_link'>
          <ArrowCircleLeftOutlinedIcon className="back_button" />
        </Link>
        <div className="clients_tickets_header_title">
          <h3>My tickets:</h3>
        </div>

        <div className="clients_tickets_display">
          <div className="ticket_info">
            <h3>subject:printer failure</h3>
            <h3>status:open</h3>
            <h3>agent:matiru</h3>
            <button>closeticket</button>
          </div>
          <div className="ticket_info">
            <h3>subject:printer failure</h3>
            <h3>status:open</h3>
            <h3>agent:matiru</h3>
            <button>closeticket</button>
          </div>
          <div className="ticket_info">
            <h3>subject:printer failure</h3>
            <h3>status:open</h3>
            <h3>agent:matiru</h3>
            <button>closeticket</button>
          </div>
          <div className="ticket_info">
            <h3>subject:printer failure</h3>
            <h3>status:open</h3>
            <h3>agent:matiru</h3>
            <button>closeticket</button>
          </div>
          <div className="ticket_info">
            <h3>subject:printer failure</h3>
            <h3>status:open</h3>
            <h3>agent:matiru</h3>
            <button>closeticket</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientTickets