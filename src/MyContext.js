import React, { createContext, useContext, useState } from "react";

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [selectedQueryId, setSelectedQueryId] = useState(0);

  return (
    <MyContext.Provider value={{ selectedQueryId, setSelectedQueryId }}>
      {children}
    </MyContext.Provider>
  );
};

// Custom hook to use the context
export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("context error");
  }
  return context;
};
