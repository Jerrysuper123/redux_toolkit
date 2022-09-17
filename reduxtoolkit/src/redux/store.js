//this is a global space, where we store our reducers and state
// friendly abstraction over standard createStore
import { configureStore } from "@reduxjs/toolkit";
//*import (export default) can be any name just like, you change the original name to an alias
import counterReducer from "./counterSlicer";

export const store = configureStore({
  reducer: {
    //useSelector(state=>state.counter.value)
    counter: counterReducer,
  },
});
