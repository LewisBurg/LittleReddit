import { combineReducers } from "@reduxjs/toolkit";
import postsReducer from "./postsReducer";
import subredditReducer from "./subredditReducer";

const rootReducer = combineReducers({
    posts: postsReducer,
    subredditReducer: subredditReducer
});

export default rootReducer;