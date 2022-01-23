import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/login/Login";
import Register from "./Components/register/Register";
import Alert from "./Components/layout/Alert";
import Navbar from "./Components/Navbar";

// redux setup
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Alert />
        <Register />
      </Router>
    </Provider>
  );
};

export default App;
