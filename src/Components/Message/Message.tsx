import React from "react";

import "./Message.scss";

const Message = ({ msg, error }: any | null) => {
  return (
    <div className={`${msg && "msg"} ${error && "error"}`}>
      <p>
        {msg}
        {error}
      </p>
    </div>
  );
};

export default Message;
