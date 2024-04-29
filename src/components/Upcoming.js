import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import React from 'react';
import background1 from './images/background1.jpg'
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
                    <a className="navbar-brand fontwhite" href="/">
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
                                <Link to="/Scorecard" className="nav-link fontwhite">
                                    Scorecard
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <center className='container'>
                    <h2 style={{color: 'white' }}>Upcoming Matches</h2>

                    <table className="bordered-table" border="1px">
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Teams</th>
                            <th>Stadium</th>
                        </tr>
                        <tr>
                            <td>11th Feb 2024</td>
                            <td>08:00 PM</td>
                            <td>Argentina vs Brazil</td>
                            <td>Maracanã Stadium, Rio de Janeiro</td>
                        </tr>
                        <tr>
                            <td>12th Feb 2024</td>
                            <td>07:00 PM</td>
                            <td>Spain vs Germany</td>
                            <td>Allianz Arena, Munich</td>
                        </tr>
                        <tr>
                            <td>13th Feb 2024</td>
                            <td>06:00 PM</td>
                            <td>Ecuador vs Germany</td>
                            <td>Lusail iconic stadium, Lusail</td>
                        </tr>
                        <tr>
                            <td>14th Feb 2024</td>
                            <td>06:00 PM</td>
                            <td>portugal vs Croatia</td>
                            <td>Khalifa international stadium, Doha</td>
                        </tr>
                        <tr>
                            <td>15th Feb 2024</td>
                            <td>06:00 PM</td>
                            <td>portugal vs Croatia</td>
                            <td>Khalifa international stadium, Doha</td>
                        </tr>
                        <tr>
                            <td>16th Feb 2024</td>
                            <td>08:00 PM</td>
                            <td>Argentina vs Brazil</td>
                            <td>Maracanã Stadium, Rio de Janeiro</td>
                        </tr>
                        <tr>
                            <td>17th Feb 2024</td>
                            <td>07:00 PM</td>
                            <td>Spain vs Germany</td>
                            <td>Allianz Arena, Munich</td>
                        </tr>
                        <tr>
                            <td>18th Feb 2024</td>
                            <td>06:00 PM</td>
                            <td>Ecuador vs Germany</td>
                            <td>Lusail iconic stadium, Lusail</td>
                        </tr>
                        <tr>
                            <td>19th Feb 2024</td>
                            <td>06:00 PM</td>
                            <td>portugal vs Croatia</td>
                            <td>Khalifa international stadium, Doha</td>
                        </tr>
                        <tr>
                            <td>20th Feb 2024</td>
                            <td>06:00 PM</td>
                            <td>portugal vs Croatia</td>
                            <td>Khalifa international stadium, Doha</td>
                        </tr>
                        <tr>
                            <td>21th Feb 2024</td>
                            <td>08:00 PM</td>
                            <td>Argentina vs Brazil</td>
                            <td>Maracanã Stadium, Rio de Janeiro</td>
                        </tr>
                        <tr>
                            <td>22th Feb 2024</td>
                            <td>07:00 PM</td>
                            <td>Spain vs Germany</td>
                            <td>Allianz Arena, Munich</td>
                        </tr>
                        <tr>
                            <td>27th Feb 2024</td>
                            <td>06:00 PM</td>
                            <td>Ecuador vs Germany</td>
                            <td>Lusail iconic stadium, Lusail</td>
                        </tr>
                        <tr>
                            <td>24th Feb 2024</td>
                            <td>06:00 PM</td>
                            <td>portugal vs Croatia</td>
                            <td>Khalifa international stadium, Doha</td>
                        </tr>
                        <tr>
                            <td>25th Feb 2024</td>
                            <td>06:00 PM</td>
                            <td>portugal vs Croatia</td>
                            <td>Khalifa international stadium, Doha</td>
                        </tr>
                        <tr>
                            <td>26th Feb 2024</td>
                            <td>08:00 PM</td>
                            <td>Argentina vs Brazil</td>
                            <td>Maracanã Stadium, Rio de Janeiro</td>
                        </tr>
                        <tr>
                            <td>27th Feb 2024</td>
                            <td>07:00 PM</td>
                            <td>Spain vs Germany</td>
                            <td>Allianz Arena, Munich</td>
                        </tr>
                        <tr>
                            <td>28th Feb 2024</td>
                            <td>06:00 PM</td>
                            <td>Ecuador vs Germany</td>
                            <td>Lusail iconic stadium, Lusail</td>
                        </tr>
                        <tr>
                            <td>29th Feb 2024</td>
                            <td>06:00 PM</td>
                            <td>portugal vs Croatia</td>
                            <td>Khalifa international stadium, Doha</td>
                        </tr>
                        <tr>
                            <td>30th Feb 2024</td>
                            <td>06:00 PM</td>
                            <td>portugal vs Croatia</td>
                            <td>Khalifa international stadium, Doha</td>
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