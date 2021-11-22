import React from "react";
import "../../App.css";

export default function Log() {
  return (
    <form name="Log-Hotel" method="POST" onSubmit="submit" className="forms" netlify >
      <input type="hidden" name="form-name" value="Log-Hotel" />
      <div className="form-email">
        <label htmlFor="email">
          Enter Email id 
          <input id="email" type="email" name="email" placeholder="Email address..." />
        </label>
      </div>
      <div className="form-name">
        <label>
          Enter Name
          <input type="text" name="name" placeholder="Name..." />
        </label>
      </div>
      <div className="form-member">
        <label>
          No. of Guests
          <input type="number" name="form-guest" defaultValue="1" />
        </label>
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
}
