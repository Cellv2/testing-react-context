import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MyComponent from "./components/MyComponent";
import Layout from "./Layouts/Layout";
import Store from "./stores/store";

import "./App.css";

const App = () => {
    return (
        <Router>
            <Store>
                <div className="App">
                    <Layout>
                        <Switch>
                            <Route exact path="/">
                                <MyComponent />
                            </Route>
                            <Route path="/input"></Route>
                        </Switch>
                    </Layout>
                </div>
            </Store>
        </Router>
    );
};

export default App;
