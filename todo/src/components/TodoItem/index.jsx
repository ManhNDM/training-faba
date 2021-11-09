import React from "react";
import { useStore, todoActions } from "../../context";
export default function TodoItem({ todo }) {
  const [state, dispatch] = useStore();
  const {editIndex,valueEdit } = state;
 
  const handleChangeCompleted = (id) => {
    dispatch(todoActions.toggleTodoInput(id));
  };
  const handleDestroyTodo = (id) => {
    dispatch(todoActions.destroyTodoInput(id));
  };
  const handleStartEdit = (id) => {
    dispatch(todoActions.startEditTodoInput(id))
  }

  const handleEndEdit= (event) => {
    event.keyCode === 13 &&
    dispatch(todoActions.endEditTodoInput(event.currentTarget.value));

  };
  return (
    <li className={(todo.completed ? "completed" : "") +  (editIndex === todo.id ? 'editing' : '')}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleChangeCompleted(todo.id)}
        />
        <label onDoubleClick={() => {handleStartEdit(todo.id)}}>{todo.title}</label>
        <button
          className="destroy"
          onClick={() => handleDestroyTodo(todo.id)}
        />
      </div>
      <input className="edit" value={valueEdit} 
            onKeyUp = {(event) => {handleEndEdit(event)}}
            onChange={(e) => {
              dispatch(todoActions.setTodoInputEdit(e.target.value));
            }}
            onBlur = {() => {dispatch(todoActions.cancelEditTodoInput())}}
      />
    </li>
  );
}
