import React from "react";
import { useStore, todoActions } from "../../context";

export default function Footer() {
  const [state, dispatch] = useStore();
  const { todos, filters, filter } = state;
  
  return (
    <footer className="footer">
      {/* This should be `0 items left` by default */}
      <span className="todo-count">
        <strong>{todos.filter(filters.active).length}</strong> item left
      </span>
      {/* Remove this if you don't implement routing */}
      <ul className="filters">
        {Object.keys(filters).map((type) => (
          <li key={type}>
            <a
              onClick={() => {
                dispatch(todoActions.swtichFilterTodoInput(type));
              }}
              href="#"
              className={filter === type && "selected"}
            >
              {type[0].toUpperCase() + type.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      {
   
        todos.filter(filters.completed).length > 0 && <button
        onClick={() => {
          dispatch(todoActions.clearCompletedTodoInput());
        }}
        className="clear-completed"
      >
        Clear completed
      </button>
      }
    </footer>
  );
}
