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
import Login from "./views/Login/Login";
import Error from "./views/Error";
import Register from "./views/Register";
import Proceso from "./views/Process/Proceso";
import Evaluacion from "./views/Process/Evaluation/Evaluacion.jsx";
import Resultado from "./views/Process/Result/Resultado";

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
            {/* <PrivateRoute path="/proceso" component={Proceso} /> */}
            <Route path="/proceso" component={Proceso} />
            <Redirect to="/error" />
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default App;
