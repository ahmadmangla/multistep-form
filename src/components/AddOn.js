import React from "react";

const AddOn = () => {
  return (
    <>
      <div className="form-title">
        <h1>Add Ons</h1>
        <p>Please Provide your name, email address and phone number</p>
      </div>
      <form action="">
        <div className="form-item">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="e.g Stphen King" />
        </div>
        <div className="form-item">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="e.g Stphenking@gmail.com"
          />
        </div>
        <div className="form-item">
          <label htmlFor="phone">Phone Number</label>
          <input type="text" name="phone" placeholder="e.g +1 2334 343434" />
        </div>
      </form>
    </>
  );
};

export default AddOn;
