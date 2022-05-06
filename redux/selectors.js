import { createSelector } from "@reduxjs/toolkit"; //reselect
// export const todoListSelector = (state) => {
//   const searchText = searchTextSelector(state);
//   // khong the su dung truc tiep searchTextSelector
//   const todosRemaining = state.todoList.filter((todo) => {
//     return todo.name.includes(searchText);
//   });
//   return todosRemaining;
// };
export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filter.search;
export const statusTodoSelector = (state) => state.filter.status;
export const priorityTodoSelector = (state) => state.filter.priority;
export const todosRemainingSelector = createSelector(
  todoListSelector, // return todoList
  searchTextSelector, // return searchText
  statusTodoSelector,
  priorityTodoSelector,
  (todoList, searchText, statusTodo, priorityTodo) => {
    const todosRemaining = todoList.filter((todo) => {
      if (statusTodo === "All") {
        // console.log((priorityTodo.length === 0 ? true : priorityTodo.includes(todo.priority)))
        return priorityTodo.length
          ? todo.name.includes(searchText) &&
              priorityTodo.includes(todo.priority)
          : todo.name.includes(searchText);
      } else {
        return (
          todo.name.includes(searchText) &&
          todo.completed === (statusTodo === "Completed" ? true : false) &&
          (priorityTodo.length ? priorityTodo.includes(todo.priority) : true)
        );
      }
    });
    return todosRemaining;
  }
);
