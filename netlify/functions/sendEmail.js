const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    exports.handler = async (event) => {
      if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
      }

      try {
        const { to, subject, design, copy } = JSON.parse(event.body);

        const msg = {
          to: [to, copy],
          from: 'mark@sirilankan.com', // Replace with your verified sender email
          subject: subject,
          html: design,
        };

        const response = await sgMail.send(msg);

        if (response && response[0].statusCode >= 200 && response[0].statusCode < 300) {
          return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully' }),
          };
        } else {
          console.error('SendGrid API Error:', response);
          return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Failed to send email', error: 'SendGrid API Error' }),
          };
        }
      } catch (error) {
        console.error('Error sending email:', error);
        return {
          statusCode: 500,
          body: JSON.stringify({ message: 'Failed to send email', error: error.message }),
        };
      }
    };
