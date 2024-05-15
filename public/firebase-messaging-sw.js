import firebase from "firebase/app";

// Initialize the Firebase app in the service worker
// "Default" Firebase configuration (prevents errors)
const firebaseConfig = {
  apiKey: "AIzaSyCwzwDY_FcOfj1QV-pqAOVmBOUYlxdHHsY",
  authDomain: "notifications-ce449.firebaseapp.com",
  projectId: "notifications-ce449",
  storageBucket: "notifications-ce449.appspot.com",
  messagingSenderId: "181522787622",
  appId: "1:181522787622:web:82beaead280d928ebb25e7",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
