import React from "react";

interface Notification {
  image?: string;
  title: string;
  body: string;
}

const Message: React.FC<{ notification: Notification }> = ({
  notification,
}) => {
  return (
    <>
      <div id="notificationHeader">
        {/* image is optional */}
        {notification.image && (
          <div id="imageContainer">
            <img src={notification.image} width={100} alt="Notification" />
          </div>
        )}
        <span>{notification.title}</span>
      </div>
      <div id="notificationBody">{notification.body}</div>
    </>
  );
};

export default Message;
