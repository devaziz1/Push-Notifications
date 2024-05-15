import  { useEffect } from "react";

import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "./firebase/firebaseConfig";

import "./App.css";
import { toast, ToastContainer } from "react-toastify";
import Message from "./Components/Message";
import "react-toastify/dist/ReactToastify.css";

async function requestPermission() {
  //requesting permission using Notification API
  const permission = await Notification.requestPermission();

  if (permission === "granted") {
    const token = await getToken(messaging, {
      vapidKey:
        "BED75Y19525DySQdfR5NwxOenESufZf8IAQWstUrOdb1kmzgVsfDjYEiqOaFvg1REQV_vOW633U4tO_7_MjqiMw",
    });

    //We can send token to server
    console.log("Token generated : ", token);
  } else if (permission === "denied") {
    //notifications are blocked
    alert("You denied for the notification");
  }
  
  onMessage(messaging, (payload) => {
    toast(<Message notification={payload.notification} />);
  });

}

function App() {
  useEffect(() => {
    requestPermission();
  }, []);
  return (
    <div>
      <ToastContainer />
    </div>
  );
}

export default App;
