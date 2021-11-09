import React from "react";
import { useStore,todoActions } from "../../context";
import TodoItem from "../TodoItem";

export default function TodoList() {
  const [state,dispatch] = useStore();
  const {todos,filters,filter} = state;

  const handleChangeAllToogle = (checked) => {
    dispatch(todoActions.allToggleTodoInput(checked));
  }
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" onChange={(e) =>handleChangeAllToogle(e.currentTarget.checked)} />
      <label htmlFor="toggle-all" >Mark all as complete</label>
      <ul className="todo-list">
          {todos && todos.filter(filters[filter]).map((todo,index) =>  <TodoItem key={index} todo={todo} /> )}
         
      </ul>
    </section>
  );
}
