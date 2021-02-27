import React from "react";
import "../../App.css";

export default function Log() {
  return (
    <form className="forms">
      <div className="form-email">
        <label>
          Email address
          <input type="text" name="email" placeholder="Email address..." />
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
