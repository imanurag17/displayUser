import { createStore } from "redux";
//import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import { reducer } from "../Reducer/reducer";
import { devToolsEnhancer } from "redux-devtools-extension";

const store = createStore(
    reducer,
    devToolsEnhancer({trace: true})
    )

export default store