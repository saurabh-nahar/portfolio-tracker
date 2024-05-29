import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from './portfolioSlice';

const appStore = configureStore({
    reducer:{
        portfolio: portfolioReducer,
    }
});

export default appStore;