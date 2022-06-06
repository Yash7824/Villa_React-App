import React from 'react';
import '../CSS/Navbar.css';

export default function Navbar() {
  return (
    <header>
        <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-linkuto nav">
                <li className="nav-item"><a className="navbar-brand nav-link active" href="/">Villa</a></li>
                <li className="nav-item"><a className="navbar-brand nav-link active" href="/">Home</a></li>
                <li className="nav-item"><a className="navbar-brand nav-link active" href="/room">Rooms</a></li>
                <li className="nav-item"><a className="navbar-brand nav-link active" href="/Activities">Activities</a>
                </li>
                <li className="nav-item"><a className="navbar-brand nav-link active" href="/Amenities">Amenities</a></li>
                
                <li className="nav-item"><a className="navbar-brand nav-link active" href="/Reviews">Reviews</a></li>
                {/* <li className="nav-item"><a className="navbar-brand nav-link active" href="/About">About Us</a></li> */}
                <li className="nav-item"><a className="navbar-brand nav-link active" href="/Contact">Contact Us</a></li>
                <li className="nav-item"><a className="navbar-brand nav-link active" href="/Menu">Menu</a></li>
                <li className="nav-item"> <button className="btn btn-outline-success my-2 my-sm-0" type="submit"> <a href="/Booknow">Book Now</a>
                        </button></li>
            </ul>
        </nav>
    </header>
  )
}
