import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store, { saveState } from "./redux/store";

const Root = () => {
  useEffect(() => {
    window.addEventListener("unload", saveState);
  }, []);
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
