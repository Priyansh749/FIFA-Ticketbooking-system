/* eslint-disable jsx-a11y/anchor-is-valid */
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import background2 from './images/background2.jpg';

function MatchForm() {
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            match: document.getElementById('match').value,
            seat: document.getElementById('seat').value,
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
        };

        try {
            const response = await fetch('http://localhost:3001/api/submitData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.status === 400) {
                setMessage(result.message);
                alert(result.message); // Display alert for seat already booked
            } else {
                setMessage(result.message);
                alert(result.message); // Display alert for successful booking
            }

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <body style={{
                backgroundImage: `url(${background2})`,
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
                                <Link to="/Scorecard" className="nav-link fontwhite">
                                    Scorecard
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

                <div style={{ margin: 'initial', width: '67%', paddingLeft: '50px', paddingTop: '60px' }}>
                    <form className="" style={{ width: '70%' }} onSubmit={handleSubmit}>
                        <fieldset style={{ border: '1px solid white', padding: '25px' }}>
                            <center> <legend>Ticket Booking</legend></center>

                            <label htmlFor="match">Select Match:</label>
                            <select style={{ backgroundColor: 'white' }} id="match" name="match">
                                <option value="argentina vs brazil">Argentina vs Brazil</option>
                                <option value="spain vs germany">Spain vs Germany</option>
                                <option value="portugal vs croatia">Portugal vs Croatia</option>
                                <option value="netherlands vs england">Netherlands vs England</option>
                                <option value="ecuador vs england">Ecuador vs England</option>
                                <option value="france vs portugal">France vs Portugal</option>
                                <option value="netherlands vs england">Netherlands vs England</option>
                                <option value="ecuador vs croatia">Ecuador vs Croatia</option>
                            </select>

                            <label htmlFor="seat">Select Seat:</label>
                            <input style={{ width: '100%' }} type="number" min="101" max="720" id="seat" name="seat" required />
                            <br />
                            <label htmlFor="name">Full name:</label>
                            <input type="text" id="name" name="name" required />
                            <br />
                            <label htmlFor="phone">Phone number:</label>
                            <input type="number" id="phone" name="phone" minLength={10} maxLength={10} required />
                            <br />
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                            <br />
                            <br />
                            <input className='btn btn-primary' type="submit" value="Book Ticket" />
                        </fieldset>
                    </form>
                </div>
                <footer style={{ textAlign: 'center', marginTop: '100px' }}>
                    <p>Copyright &copy; {new Date().getFullYear()} FIFA Ticket Booking</p>
                </footer >
            </body>
        </>
    );
}

export default MatchForm;
