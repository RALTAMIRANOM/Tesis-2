import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./views/Home/Home";
import Login from "./views/Login";
import Error from "./views/Error";
import Register from "./views/Register";
import Proceso from "./views/Proceso";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <div className="app-container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/error" component={Error} />
            <PrivateRoute path="/proceso" component={Proceso} />
            <Redirect to="/error" />
          </Switch>
        </Router>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default App;
