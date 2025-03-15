import { combineReducers, createStore } from "redux";
import authReducer from "./Component/authReducer";
import themeReducer from "./Component/themeReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    theme: themeReducer,
})

const store = createStore(rootReducer)

export default store