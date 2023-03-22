import React, { createContext, useState } from "react";
const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    selectedPlan: "",
  });
  return <FormContext.Provider value={{ data, setData }}>{children}</FormContext.Provider>;
};

export { FormProvider, FormContext };
