import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";
import pngimage from "../images/check.png";

const SelectPlan = () => {
  const { data, setData } = useContext(FormContext);
  const plans = [
    {
      title: "Intro",
      price: "19",
    },
    {
      title: "Base",
      price: "39",
    },
    {
      title: "Premium",
      price: "119",
    },
  ];

  function handleClick(e) {
    const selectedPlan = e.target.dataset.value;
    setData({ ...data, selectedPlan: selectedPlan });
    const plan = document.querySelectorAll(".plan");
    plan.forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");
  }
  return (
    <>
      <div className="form-title">
        <h1>Select Plan</h1>
        <p>Please Select your Plan</p>
      </div>
      <form action="">
        <div className="plans-container">
          {plans.map((item) => {
            return (
              <div className={`plan`} data-value={item.title} onClick={handleClick}>
                <div className="title">
                  <div className="circle">
                    <img width="20" src={pngimage} alt="" />
                  </div>
                  <h4>{item.title}</h4>
                </div>
                <div className="price">
                  <p>
                    <span> ${item.price}</span> / Month
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </form>
    </>
  );
};

export default SelectPlan;
