// const initialState = {
//   search: "",
//   status: "All",
//   priority: [],
// };
// const filtersReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "filter/searchFilterChange":
//       return {
//         ...state, // input  la state.filter san co
//         search: action.payload,
//       };
//     case "filter/statusFilterChange":
//       return {
//         ...state,
//         status: action.payload
//       }
//     case 'filter/priorityTodoChange':
//       return {
//         ...state,
//         priority: [...action.payload]
//       }
//     default:
//       return state;
//   }
// };

// toolkit

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  status: "All",
  priority: [],
};
export default createSlice({
  name: "filter",
  initialState,
  reducers: {
    searchFilterChange: (state, action) => {
      //mutation: cho phep update truc tiep. khong can phai return lai state moi
      state.search = action.payload;
    }, // => action {type : "filter/searchFilterChange"}
    statusFilterChange: (state,action) => {
      state.status = action.payload
    },
    priorityTodoChange: (state,action) => {
      state.priority = action.payload
    },
  },
});
