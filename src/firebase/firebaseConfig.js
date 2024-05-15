import { initializeApp } from "firebase/app";

import { getMessaging } from "firebase/messaging";

//Firebase Config values imported from .env file
const firebaseConfig = {
  apiKey: "AIzaSyCwzwDY_FcOfj1QV-pqAOVmBOUYlxdHHsY",
  authDomain: "notifications-ce449.firebaseapp.com",
  projectId: "notifications-ce449",
  storageBucket: "notifications-ce449.appspot.com",
  messagingSenderId: "181522787622",
  appId: "1:181522787622:web:82beaead280d928ebb25e7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Messaging service
export const messaging = getMessaging(app);
