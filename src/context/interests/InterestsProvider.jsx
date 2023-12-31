import React, { createContext, useContext, useReducer } from "react";
import InterestsReducer from "./InterestsReducer";

const InterestsContext = createContext();
const InterestsContextDispatcher = createContext();
const initialState = {
  interestList: [],
  total: 0,
};

const InterestsProvider = ({ children }) => {
  const [interestList, dispatchInterest] = useReducer(
    InterestsReducer,
    initialState
  );
  return (
    <InterestsContext.Provider value={interestList}>
      <InterestsContextDispatcher.Provider value={dispatchInterest}>
        {children}
      </InterestsContextDispatcher.Provider>
    </InterestsContext.Provider>
  );
};

export default InterestsProvider;

export const UseInterests = () => useContext(InterestsContext);
export const InterestsActions = () => useContext(InterestsContextDispatcher);
