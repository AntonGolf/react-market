import { combineReducers, createStore } from "redux";
import { cartReducer } from "./cartReducer";
import { currentReducer } from "./currentReducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    visible: currentReducer
})


export const store = createStore(rootReducer)