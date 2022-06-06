import React from 'react'
import '../CSS/BookNow.css'

import  { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import '../CSS/DateSelect.css'

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DateSelect = (props) => {
  const [startDate, setStartDate] = useState(null);
  return (
      <div className = "containerForDate">
        <label htmlFor="Check">{props.title}</label>
        <div className="datepicker">
            <DatePicker selected={startDate} onChange={(date => setStartDate(date))} />
        </div>
      
      </div>
    
  );
};

export default function BookNow() {
    return (
        <div>
            <div className="cont3">
                <h4>
                    CONTACT US FOR FURTHER CLARIFICATIONS
                </h4>
                <h1>
                    BOOK NOW.
                </h1>
            </div>

            <section id="main5">
                <div className="bookForm">
                    <input type="text" name="firstname" id="firstname" placeholder="FirstName" />
                    <input type="text" name="lastname" id="lastname" placeholder="LastName" />
                    <input type="email" name="email" id="email" placeholder="Email Address" />
                    <input type="tel" name="phone" id="phone" placeholder="Phone Number" />
                    <input type="number" name="adults" id="adults" placeholder="No. of Adults" />
                    <input type="number" name="kids" id="kids" placeholder="No. of Kids(5 to 12 years)" />
                    <select name="group" id="group1" aria-placeholder="Group Type">
                        <option value="none" selected disabled hidden>Group Type</option>
                        <option value="Family">Family</option>
                        <option value="Friend">Friend</option>
                        <option value="Stag">Stag</option>
                    </select>
                    <select name="room" id="room">
                        <option value="none" selected disabled hidden>Room Type</option>
                        <option value="Standard">Standard Room</option>
                        <option value="Executive">Executive Room</option>
                        <option value="Villa">Entire Villa</option>
                    </select>
                    {/* <input type="text" id="datepicker" placeholder="CheckIn" />
                    <input type="text" id="datepicker2" placeholder="CheckOut" /> */}
                    <DateSelect title = "CheckIn"/>
                    <DateSelect title = "CheckOut"/>
                    <textarea name="message" id="message" placeholder="Message"></textarea>
                    <input type="button" value="Submit" />
                </div>
            </section>

            
        </div>
    )
}
