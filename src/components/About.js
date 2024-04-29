/* eslint-disable jsx-a11y/anchor-is-valid */
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import React from 'react';
import background1 from './images/background1.jpg'

function Home() {
    return (
        <>
            <body style={{
                backgroundImage: `url(${background1})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}>
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand fontwhite">
                        <Link to="/">FIFA Ticket Booking</Link>
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/Ticket" className="nav-link fontwhite">
                                    Tickets
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Upcoming" className="nav-link fontwhite">
                                    Schedule
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="container">
                    <h2>About FIFA Ticket Booking System</h2>
                    <p>Welcome to the FIFA Ticket Booking System, developed by a passionate solo developer. This system is designed to provide football enthusiasts with a convenient way to book tickets for FIFA matches.</p>

                    <h3>My Mission</h3>
                    <p>My mission is to make the process of booking FIFA tickets as easy and enjoyable as possible. We understand the excitement and anticipation that comes with attending a FIFA match, and we're here to enhance that experience for you.</p>

                    <h3>Key Features</h3>
                    <ul>
                        <li>Easy match selection: Choose from a variety of exciting matches featuring top teams from around the world.</li>
                        <li>Simple booking process: My user-friendly interface allows you to book tickets in just a few clicks.</li>
                        <li>Upcoming match information: Stay informed about match dates, times, teams, and stadiums.</li>
                        <li>Customer support: We're here to assist you with any questions or issues you may have.</li>
                    </ul>

                    <h3>Meet the Developer</h3>
                    <p>Hi, I'm Priyansh S. Bhavsar, the developer behind this project. As a football fan myself, I wanted to create a platform that simplifies the ticket booking process and brings fans closer to the action. I'm dedicated to continuously improving this system to provide you with the best experience possible.</p>

                    <h3>Contact Us</h3>
                    <p>If you have any questions, feedback, or suggestions, please don't hesitate to get in touch with us:</p>
                    <p>Email: priyansh.workemail@gmail.com</p>

                    <p>Thank you for choosing the FIFA Ticket Booking System. We look forward to helping you secure your seats at the next thrilling FIFA match!</p>
                </div>

                <footer>
                    <p>Copyright &copy; 2024 FIFA Ticket Booking</p>
                </footer>
            </body>
        </>
    );
}
export default Home;