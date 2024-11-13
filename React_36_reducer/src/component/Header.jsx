import React, { useContext } from "react";
import { TodoItems } from "../store/todo_items_store";

const Header = ()=>{
  const {heading} = useContext(TodoItems);

  return (
    <>
    <div className="heading">{heading}</div>
    </>
  )
}

export default Header;

