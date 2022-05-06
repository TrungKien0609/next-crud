// export const addTodoActions = {
//   type: "totoList/addTodo",
//   payload: {
//     id: 1,
//     name: "lean react",
//     completed: false,
//     priority: "Medium",
//   },
// };
// de tranh viec lam lai cocde redux cung cap method actionCreator
// va de dynamic action nua
export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};
export const toggleTodoStatus = (id) => {
  return {
    type: "todoList/toggleTodoStatus",
    payload: id,
  };
};
export const searchFilterChange = (text) => {
  return {
    type: "filter/searchFilterChange",
    payload: text,
  };
};
export const statusFilterChange = (status) => {
  return {
    type: "filter/statusFilterChange",
    payload: status,
  };
};
export const priorityTodoChange = (priority) => {
  return {
    type: "filter/priorityTodoChange",
    payload: priority,
  };
};
