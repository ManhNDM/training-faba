import React from "react";
import { useRef } from "react";
import { useStore, todoActions } from "../../context";

export default function Header() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;
  const refInput = useRef();

  const handleSubmitTodo = (event) => {
    event.keyCode === 13 &&
    dispatch(todoActions.addTodoInput(event.currentTarget.value)) && refInput.focus();

  };
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        ref={refInput}
        className="new-todo"
        placeholder="What needs to be done?"
        value={todoInput}
        onChange={(e) => {
          dispatch(todoActions.setTodoInput(e.target.value));
        }}
        onKeyUp={(event) => handleSubmitTodo(event)}
      />
    </header>
  );
}
