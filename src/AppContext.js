import React from "react";

const initialState = {
    test1: '',
    test2: '',
    count: 0,
    setOurValues: () => {},
}

const AppContext = React.createContext(initialState);

export default AppContext;
