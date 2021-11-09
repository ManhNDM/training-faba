import {
  SET_TODO_INPUT,
  ADD_TODO_INPUT,
  TOGGLE_TODO_INPUT,
  DESTROY_TODO_INPUT,
  ALL_TOGGLE_TODO_INPUT,
  START_EDIT_TODO_INPUT,
  END_EDIT_TODO_INPUT,
  CANCEL_EDIT_TODO_INPUT,
  SET_TODO_INPUT_EDIT,
  FILTER_TODO_INPUT,
  SWITCH_FILTER_TODO_INPUT,
  CLEAR_COMPLETED_TODO_INPUT
} from "../constant/todo.constant";

export const setTodoInput = (payload) => ({
  type: SET_TODO_INPUT,
  payload,
});

export const setTodoInputEdit = (payload) => ({
    type: SET_TODO_INPUT_EDIT,
    payload,
  });

export const addTodoInput = (payload) => ({
  type: ADD_TODO_INPUT,
  payload,
});

export const toggleTodoInput = (payload) => ({
  type: TOGGLE_TODO_INPUT,
  payload,
});

export const allToggleTodoInput = (payload) => ({
  type: ALL_TOGGLE_TODO_INPUT,
  payload,
});

export const destroyTodoInput = (payload) => ({
  type: DESTROY_TODO_INPUT,
  payload,
});

export const startEditTodoInput = (payload) => ({
    type: START_EDIT_TODO_INPUT,
    payload,
});
export const endEditTodoInput = (payload) => ({
    type: END_EDIT_TODO_INPUT,
    payload,
});
export const cancelEditTodoInput = (payload) => ({
    type: CANCEL_EDIT_TODO_INPUT,
    payload,
});

export const filterTodoInput = (payload) => ({
    type: FILTER_TODO_INPUT,
    payload,
});

export const swtichFilterTodoInput = (payload) => ({
    type: SWITCH_FILTER_TODO_INPUT,
    payload,
});

export const clearCompletedTodoInput = (payload) => ({
    type: CLEAR_COMPLETED_TODO_INPUT
    ,
    payload,
});

