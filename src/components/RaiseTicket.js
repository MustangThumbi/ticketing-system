import React,{useEffect, useState} from 'react'
import "../Styles/RaiseTicket.css"
import {  IconButton } from "@mui/material";
import { Link } from "react-router-dom";

import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
// import { addDoc, collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';
import {db} from '../Database/firebase';
import { addDoc, collection, doc, getDocs, serverTimestamp } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { addTicketAction } from '../Redux/actions/ticketAction';
import { selectUser, setActiveUser } from '../Redux/reducers/userSlice';

function RaiseTicket() {
  const[ticket,setTicket]=useState('')
  const[subject,setSubject]=useState('')
  const[description,setDescription]=useState('')
    
  
    const dispatch =  useDispatch();

const user = useSelector(selectUser);
const userName= dispatch(setActiveUser({username:user.username}))


    const addTicket= async()=>{
      dispatch(addTicketAction({
        subject,description,user,createdAt:serverTimestamp()
      }))
      setSubject('')
      setDescription('')
      setTicket('')
    };

    const createticket= async()=>{
     const ticketRef= await addDoc(collection(db, "tickets"), {
        username:userName,subject:subject,description:description,createdAt:serverTimestamp()
      });
    }
  


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
                <input
              type="text"
              placeholder="subject"
              value={subject}
              onChange={(e)=>setSubject(e.target.value)}/>
              </div>
              <div className="ticket_description">
                <h5>description: </h5>
                <textarea
                className="ticket_description_textarea"
                type="text"
                placeholder="description"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}>
                </textarea>

                
              </div>
              <div className="wrap_buttons">
                <button type="submit" onClick={createticket} className="ticket_submit_button">
                  submit
                </button>
,
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