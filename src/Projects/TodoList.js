import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import { Provider } from "react-redux";
import ToDoListLogic from "./ToDoComponents/Components/ToDoListLogic";
import CRUD from "./ToDoComponents/reducers/CRUD";

const store = configureStore({
  reducer: {
    CRUD: CRUD,
  },
});

const ToDoList = () => {
  return (
    <Provider store={store}>
      <ToDoListLogic />
    </Provider>
  );
};

export default ToDoList;
