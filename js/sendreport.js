import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import { getMessaging, getToken} from "https://www.gstatic.com/firebasejs/9.0.1/firebase-messaging.js";

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

function requestPermission() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            console.log('Notification permission granted.');
        }
    });
}

getToken(messaging, { vapidKey: '<YOUR_PUBLIC_VAPID_KEY_HERE>' }).then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
    } else {
      // Show permission request UI
      console.log('No registration token available. Request permission to generate one.');
      // ...
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
  });

/*exports.sendEmail = functions.https.onCall((data, context) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-gmail-account@gmail.com',
      pass: 'your-gmail-account-password'
    }
  });

  const mailOptions = {
    from: 'your-gmail-account@gmail.com',
    to: data.to,
    subject: data.subject,
    text: data.body
  };

  return transporter.sendMail(mailOptions)
    .then(() => {
      return { message: 'Email sent successfully!' };
    })
    .catch((error) => {
      return { error: error.message };
    });
});*/