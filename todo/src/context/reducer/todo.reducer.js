import {
  SET_TODO_INPUT,
  ADD_TODO_INPUT,
  ALL_TOGGLE_TODO_INPUT,
  TOGGLE_TODO_INPUT,
  DESTROY_TODO_INPUT,
  START_EDIT_TODO_INPUT,
  END_EDIT_TODO_INPUT,
  SET_TODO_INPUT_EDIT,
  SWITCH_FILTER_TODO_INPUT,
  CLEAR_COMPLETED_TODO_INPUT,
  CANCEL_EDIT_TODO_INPUT
} from "../constant/todo.constant";

const initState = {
  todos: [],
  todoInput: "",
  filter: "all",
  filters: {
    all: () => true,
    active: (todo) => !todo.completed,
    completed: (todo) => todo.completed,
  },
  editIndex:null,
  valueEdit:null,
};

function todoReduce(state, action) {
  switch (action.type) {
    case SET_TODO_INPUT:
      return { ...state, todoInput: action.payload };
    case ADD_TODO_INPUT:
      {
          const newTodo = {
              id: new Date().getTime(),
              completed:false,
              title: action.payload
          }
          return {...state,todos:[...state.todos,newTodo],todoInput:''}
      }
    case TOGGLE_TODO_INPUT:
        {
            const newTodos = state.todos.map(todo => {
             return  todo.id === action.payload ? {...todo,completed:!todo.completed} : todo
            } )
            return {...state,todos:newTodos}

        }
    case DESTROY_TODO_INPUT:
        {
            const newTodos = state.todos.filter(todo => todo.id !== action.payload)
            return {...state,todos:newTodos}

        }
    case ALL_TOGGLE_TODO_INPUT:
        {
            const newTodos = state.todos.map(todo => ({...todo,completed:action.payload}))
            return {...state,todos:newTodos}
        }
    case START_EDIT_TODO_INPUT:
        let indexTodo = state.todos.findIndex(todo => todo.id === action.payload)
        state.valueEdit = state.todos[indexTodo].title
        return {...state,editIndex:action.payload}
    case END_EDIT_TODO_INPUT:
        {
            if(state.editIndex !== null){
                let indexTodo = state.todos.findIndex(todo => todo.id === state.editIndex)
                console.log(indexTodo,state.valueEdit);
                state.todos[indexTodo].title= state.valueEdit
               
                
            }
            state.editIndex = null
            return {...state}
        }
    case SET_TODO_INPUT_EDIT : 
            return { ...state, valueEdit: action.payload };
    case SWITCH_FILTER_TODO_INPUT:
            {
                state.filter = action.payload;
                return {...state}
            }
    case CLEAR_COMPLETED_TODO_INPUT :
        state.todos = state.todos.filter(state.filters.active);
        return {...state};
    case CANCEL_EDIT_TODO_INPUT:
       
        state.editIndex = null;
        return {...state}
    default:
      throw new Error("Invalid action");
  }
}

export { initState };
export default todoReduce;
