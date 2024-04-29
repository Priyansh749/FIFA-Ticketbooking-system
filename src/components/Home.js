/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import book from './images/book.jpg';
import schedule from './images/upcoming.jpg';
import scorecard from './images/scorecard.png';
import Upcoming from './Upcoming';
import Scorecard from './Scorecard';
import Ticket from './Ticket';
import About from './About';
import './css/home.css';
import background1 from './images/background1.jpg';

function Home() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

      <body
        style={{
          backgroundImage: `url(${background1})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'repeat-y',
        }}
      >
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand fontwhite">
            <Link to="/">FIFA Ticket Booking</Link>
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/About" className="nav-link fontwhite">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <marquee style={{ color: 'white' }} direction="left">
          Welcome to FIFA Ticket Booking System - Your One-Stop Destination for Football Excitement!
        </marquee>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm">
              <div className="card bg-secondary text-white">
                <img className="card-img-right" style={{ width: '59rem' }} src={book} alt="Card image cap" />
                <div className="card-body">
                  <Link to="/Ticket" className="btn btn-primary">
                    Book now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card bg-secondary text-white">
                <img className="card-img-right" style={{ width: '28rem' }} src={schedule} alt="Card image cap" />
                <div className="card-body">
                  <Link to="/Upcoming" className="btn btn-primary">
                    Upcoming matches
                  </Link>
                </div>
              </div>
              <br />
              <div className="card bg-secondary text-white">
                <img className="card-img-right" style={{ width: '28rem' }} src={scorecard} alt="Card image cap" />
                <div className="card-body">
                  <Link to="/Scorecard" className="btn btn-primary">
                    Scorecard
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <p>Copyright &copy; 2024 FIFA Ticket Booking</p>
        </footer>
      </body>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Upcoming" element={<Upcoming />} />
        <Route path="/Scorecard" element={<Scorecard />} />
        <Route path="/Ticket" element={<Ticket />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
