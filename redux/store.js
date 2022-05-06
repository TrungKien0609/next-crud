// import  {createStore} from 'redux'
// import rootReducer from './reducer'
// // enhancer vao lam tham so thu 2
// import { composeWithDevTools } from 'redux-devtools-extension';
// // neu co  initialState thi createStore(rootReducer,initialState,composeWithDevTools)
// const store = createStore(rootReducer,composeWithDevTools()) // (reducer,initialState,enhancer)
// // enhancer la cac middleware(saga) neu khong co initialState co the truyen

// toolkit
import filtersReducer from "../components/Filters/FilterSlice";
import todoListReducer from "../components/TodoList/TodoSlice";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({ // composeWithDevTools (hay middleware khac) se tu dong dc add vao configurestore
  reducer: {
    filter: filtersReducer.reducer,
    todoList: todoListReducer.reducer,
  },
});
export default store;
