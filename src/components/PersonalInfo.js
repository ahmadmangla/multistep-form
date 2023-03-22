import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";

const PersonalInfo = () => {
  const { data, setData } = useContext(FormContext);
  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  }
  return (
    <>
      <div className="form-title">
        <h1>Personal Info</h1>
        <p>Please Provide your name, email address and phone number</p>
      </div>
      <form action="">
        <div className="form-item">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="e.g Stphen King" value={data.name} onChange={handleChange} />
        </div>
        <div className="form-item">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" placeholder="e.g Stphenking@gmail.com" value={data.email} onChange={handleChange} />
        </div>
        <div className="form-item">
          <label htmlFor="phone">Phone Number</label>
          <input type="text" name="phone" placeholder="e.g +1 2334 343434" value={data.phone} onChange={handleChange} />
        </div>
      </form>
    </>
  );
};

export default PersonalInfo;
