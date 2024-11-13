import { createContext } from "react";

export const TodoItems = createContext({
  items: [],
  addNewItem: () =>{},
  deleteItem: () =>{},
  });