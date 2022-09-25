import React from 'react'
import "../Styles/RaiseTicket.css"
import {  IconButton } from "@mui/material";
import { Link } from "react-router-dom";

import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

function RaiseTicket() {
  return (
    <div className="raiseticket">
      <div className="raiseticket_header">
        <h1>Hello welcome username</h1>

        <IconButton>
          <LogoutRoundedIcon className="logout_btn" />
        </IconButton>
      </div>
      <div className=" raiseticket_footer">
        <div className="sidebar">
          <div className="button_container">
            <Link to="/customer" className="header_link">
              <span className="span_tickets">
                <h2>create a ticket</h2>
              </span>
            </Link>
          </div>
          <div className="button_container">
            <Link to="mytickets" className="header_link">
              <span className="span_mytickets">
                <h2>My Tickets</h2>
              </span>
            </Link>
          </div>
        </div>

        <div className="createticket">
          <div className="ticketcontent">
            <h3>create ticket 😃 </h3>

            <form>
              <div className="ticket_subject">
                <h5>subject: </h5>
                <input />
              </div>
              <div className="ticket_description">
                <h5>description: </h5>
                <input />
              </div>
              <div className="wrap_buttons">
                <button type="submit" className="ticket_submit_button">
                  submit
                </button>

                <button type="submit" className="ticket_cancel_button">
                  cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RaiseTicket