/* eslint-disable jsx-a11y/anchor-is-valid */
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import background1 from './images/background1.jpg'
import React from 'react';
// import './css/Upcoming.css';

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
                <center className='container'>
                    <h2 style={{ color: 'white' }}>FIFA-24 Scorecard</h2>
                    <table className="bordered-table" border="1px">
                        <tr>
                            <th>Teams</th>
                            <th>Scores</th>
                            <th>Start - Finish Time</th>
                            <th>Stadium</th>
                        </tr>
                        <tr>
                            <td>Argentina-Brazil</td>
                            <td>0-2</td>
                            <td>10:00 PM</td>
                            <td>Maracanã Stadium, Rio de Janeiro</td>
                        </tr>
                        <tr>
                            <td>Ecuador-Germany</td>
                            <td>2-4</td>
                            <td>10:00 PM</td>
                            <td>Lusail iconic stadium, Lusail</td>
                        </tr>
                        <tr>
                            <td>portugal-Croatia</td>
                            <td>4-2</td>
                            <td>10:00 PM</td>
                            <td>Khalifa international stadium, Doha</td>
                        </tr>
                        <tr>
                            <td>Spain-Germany</td>
                            <td>3-2</td>
                            <td>10:00 PM</td>
                            <td>Allianz Arena, Munich</td>
                        </tr>
                        <tr>
                            <td>England-Spain</td>
                            <td>4-2</td>
                            <td>10:00 PM</td>
                            <td>Maracanã Stadium, Rio de Janeiro</td>
                        </tr>
                        <tr>
                            <td>Argentina-Brazil</td>
                            <td>0-2</td>
                            <td>10:00 PM</td>
                            <td>Maracanã Stadium, Rio de Janeiro</td>
                        </tr>
                        <tr>
                            <td>Ecuador-Germany</td>
                            <td>2-4</td>
                            <td>10:00 PM</td>
                            <td>Lusail iconic stadium, Lusail</td>
                        </tr>
                        <tr>
                            <td>portugal-Croatia</td>
                            <td>4-2</td>
                            <td>10:00 PM</td>
                            <td>Khalifa international stadium, Doha</td>
                        </tr>
                        <tr>
                            <td>Spain-Germany</td>
                            <td>3-2</td>
                            <td>10:00 PM</td>
                            <td>Allianz Arena, Munich</td>
                        </tr>
                        <tr>
                            <td>England-Spain</td>
                            <td>4-2</td>
                            <td>10:00 PM</td>
                            <td>Maracanã Stadium, Rio de Janeiro</td>
                        </tr>
                        <tr>
                            <td>Argentina-Brazil</td>
                            <td>0-2</td>
                            <td>10:00 PM</td>
                            <td>Maracanã Stadium, Rio de Janeiro</td>
                        </tr>
                        <tr>
                            <td>Ecuador-Germany</td>
                            <td>-</td>
                            <td>-</td>
                            <td>Lusail iconic stadium, Lusail</td>
                        </tr>
                        <tr>
                            <td>portugal-Croatia</td>
                            <td>-</td>
                            <td>-</td>
                            <td>Khalifa international stadium, Doha</td>
                        </tr>
                        <tr>
                            <td>Spain-Germany</td>
                            <td>-</td>
                            <td>-</td>
                            <td>Allianz Arena, Munich</td>
                        </tr>
                        <tr>
                            <td>England-Spain</td>
                            <td>-</td>
                            <td>-</td>
                            <td>Maracanã Stadium, Rio de Janeiro</td>
                        </tr>
                    </table>
                </center>
                <footer>
                    <p>Copyright &copy; 2024 FIFA Ticket Booking</p>
                </footer>
            </body>
        </>
    );
}
export default Home;