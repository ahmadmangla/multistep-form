import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";

const Summary = () => {
  const { data, setData } = useContext(FormContext);
  return (
    <>
      <div className="form-title">
        <h1>Summary</h1>
      </div>
      <form action="">
        <div className="form-item">
          <label htmlFor="name">Name</label>
          <span>{data.name}</span>
        </div>
        <div className="form-item">
          <label htmlFor="email">Email Address</label>
          <span>{data.email}</span>
        </div>
        <div className="form-item">
          <label htmlFor="phone">Phone Number</label>
          <span>{data.phone}</span>
        </div>
        <div className="form-item">
          <label htmlFor="phone">Selected Plan</label>
          <span>{data.selectedPlan}</span>
        </div>
      </form>
    </>
  );
};

export default Summary;
