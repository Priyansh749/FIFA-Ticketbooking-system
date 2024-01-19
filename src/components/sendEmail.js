const sgMail = require('@sendgrid/mail');

const sendGridApiKey = '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';

sgMail.setApiKey(sendGridApiKey);

const sendEmail = async ({ to, match, seat }) => {
    try {
        const msg = {
            to,
            from: 'priyansh.workemail@gmail.com',
            subject: 'Your tickets for FIFA has been booked',
            text: `Your tickets for FIFA - Match: ${match}, Seat: ${seat} have been booked successfully.`,
        };

        await sgMail.send(msg);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error.response.body);
    }
};

module.exports = sendEmail;