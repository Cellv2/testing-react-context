import React, { useState } from "react";

const initialState = {
    name: "MyTestName",
    email: "Test.Name@email.com",
};

export const Context = React.createContext({});

type StoreProps = {
    children: any;
};

const Store = (props: StoreProps) => {
    const [state, setState] = useState(initialState);

    return (
        <Context.Provider value={[state, setState]}>
            {props.children}
        </Context.Provider>
    );
};

export default Store;
