import { combineReducers, createStore } from "redux";
import authReducer from "./Component/authReducer";
import themeReducer from "./Component/themeReducer";
import counterReducer from "./Component/counterReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    theme: themeReducer,
    counter: counterReducer
})

const store = createStore(rootReducer)

export default store