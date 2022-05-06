import { combineReducers } from "redux";
import filtersReducer from "../components/Filters/FilterSlice";
import todoListReducer from "../components/TodoList/TodoSlice";
// const rootReducer = (
//   state = {},
//   action
// ) => {
//    // fisrt
//   /*action = {
//         type : "loadsomehting",
//         payload : {data}
//     }*/
//   // switch (action.type) {
//   //   case "todoList/addTodo":
//   //     return {
//   //       ...state,
//   //       todoList: [...state.todoList, action.payload],
//   //     };
//   //   case "filter/searchFilterChange":
//   //     return {
//   //       ...state,
//   //       filter: {
//   //         ...state.filter,
//   //         search: action.payload,
//   //       }
//   //     };
//   //   default:
//   //     return state;
//   // } 

//   //second method
//   return {
//     filter: filtersReducer(state.filter, action),
//     todoList: todoListReducer(state.todoList, action),
//   };
// };

//third way is using combineReducers : sau khi thuc hien combineReducer no se tra ve giong cach 2
const rootReducer = combineReducers({
  filter: filtersReducer,
  todoList: todoListReducer
})
export default rootReducer;
