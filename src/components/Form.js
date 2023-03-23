import React, { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import Summary from "./Summary";

const Form = () => {
  const { data } = useContext(FormContext);
  const titles = ["YOUR INFO", "SELECT PLAN", "SUMMARY"];
  const [controlStep, setControlStep] = useState(0);
  const [error, setError] = useState(false);

  let i = 0;

  function stepController() {
    if (titles[controlStep] === "YOUR INFO") {
      return <PersonalInfo />;
    } else if (titles[controlStep] === "SELECT PLAN") {
      return <SelectPlan />;
    } else if (titles[controlStep] === "SUMMARY") {
      return <Summary />;
    }
  }

  function handleForwardClick() {
    if (data.name === "" || data.email === "" || data.phone === "") {
      setError(true);
      return;
    }
    if (controlStep !== titles.length - 1) {
      setError(false);
      setControlStep(controlStep + 1);
    }
  }

  function handleBackwardClick() {
    if (controlStep !== 0) {
      setControlStep(controlStep - 1);
    }
  }

  return (
    <div className="container">
      <div className="side-bar">
        <div className="step-container">
          <ul>
            {titles.map((item) => {
              i = i + 1;
              return (
                <li className="step-item">
                  <div
                    className="step-number"
                    style={
                      controlStep === i - 1
                        ? {
                            backgroundColor: "#bee1fd",
                            borderColor: "#bee1fd",
                            color: "var(--primary-color)",
                          }
                        : {}
                    }
                  >
                    {i}
                  </div>
                  <div className="">
                    <span>{`STEP ${i}`}</span>
                    <h4
                      style={
                        controlStep === i - 1
                          ? {
                              color: "var(--primary-color)",
                            }
                          : {}
                      }
                    >
                      {item}
                    </h4>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="main-form">
        {stepController()}
        {error && <p className="error">Please fill all the fields!</p>}
        <div className="buttons">
          {controlStep !== 0 && (
            <button onClick={handleBackwardClick} className="prev-step-button">
              Prevous Step
            </button>
          )}
          {controlStep !== titles.length - 1 ? (
            <button onClick={handleForwardClick} className="next-step-button">
              Next Step
            </button>
          ) : (
            <button className="submit-button">Submit</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
