import React from "react";

function Thankyou() {
  return (
    <div className="pass-result">
      <div className="container">
        <img src="./images/icon-success.svg" alt="icon" />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to ash@loremcompany.com. Please open
          it and click the button inside to confirm your subscription.
        </p>
        <button className="btn">Dismiss message</button>
      </div>
    </div>
  );
}

export default Thankyou;
