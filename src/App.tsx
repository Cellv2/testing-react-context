import React from "react";

import MyComponent from "./components/MyComponent";
import Store from "./stores/store";

import "./App.css";

const App = () => {
    return (
        <Store>
            <div className="App">
                <MyComponent />
            </div>
        </Store>
    );
};

export default App;
