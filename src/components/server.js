const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const sendEmail = require('./sendEmail');
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/fifa_ticket_booking', { useNewUrlParser: true, useUnifiedTopology: true });

const formDataSchema = new mongoose.Schema(
    {
        match: String,
        seat: Number,
        name: String,
        phone: Number,
        email: String,
    },
    { collection: 'tickets' },
);

const FormData = mongoose.model('FormData', formDataSchema);

app.post('/api/submitData', async (req, res) => {
    try {
        const existingBooking = await FormData.findOne({ match: req.body.match, seat: req.body.seat });

        if (existingBooking) {
            return res.status(400).json({ message: 'Seat already booked' });
        }

        const newFormData = new FormData(req.body);
        const savedFormData = await newFormData.save();

        const emailData = {
            to: req.body.email,
            match: req.body.match,
            seat: req.body.seat,
        };

        sendEmail(emailData);

        res.status(201).json({ message: 'Ticket booked successfully and sent to your Email', data: savedFormData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
