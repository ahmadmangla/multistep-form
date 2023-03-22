import React, { useState } from "react";
import AddOn from "./AddOn";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import Summary from "./Summary";

const Form = () => {
  const titles = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];
  const [controlStep, setControlStep] = useState(0);

  let i = 0;

  function stepController() {
    if (titles[controlStep] === "YOUR INFO") {
      return <PersonalInfo />;
    } else if (titles[controlStep] === "SELECT PLAN") {
      return <SelectPlan />;
    } else if (titles[controlStep] === "ADD-ONS") {
      return <AddOn />;
    } else if (titles[controlStep] === "SUMMARY") {
      return <Summary />;
    }
  }

  function handleForwardClick() {
    if (controlStep !== titles.length - 1) {
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
        <div className="buttons">
          {controlStep !== 0 ? (
            <button onClick={handleBackwardClick} className="prev-step-button">
              Prevous Step
            </button>
          ) : (
            ""
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
