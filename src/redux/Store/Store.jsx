import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../State/Counter/CounterSlice";


export default configureStore({

    reducer:{
        counter: counterReducer
    }
})