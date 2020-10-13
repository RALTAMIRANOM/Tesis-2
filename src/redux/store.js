import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import user from "./reducers/userReducer";

const reducer = combineReducers({
  user,
});

const globalState = localStorage.getItem("GLOBAL_STATE");
const initialState = globalState ? JSON.parse(globalState) : undefined;
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export const saveState = () => {
  const state = store.getState();
  localStorage.setItem("GLOBAL_STATE", JSON.stringify(state));
};

export default store;
