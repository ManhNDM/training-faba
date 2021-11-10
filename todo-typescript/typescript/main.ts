const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

type TodoInput = {
  id: number;
  complete: boolean;
  title: string;
};
type Todos = TodoInput[];
type TodoMethod = {
  add: (todo: TodoInput) => void;
  delete: (id: number) => void;
  changeToggle:(id: number) => void;
  changeToggleAll:(checked:boolean) => void;
  render: () => void;
  init: () => void;
};

const todosDefault: Todos = [
  {
    id: 1,
    complete: false,
    title: "Nấu ăn",
  },
  {
    id: 2,
    complete: false,
    title: "Rưa bác",
  },
];

const app: () => TodoMethod = () => {
  const todos: Todos = [...todosDefault];
  const todoList = <HTMLUListElement>$(".todo-list");
  const newTodo = <HTMLUListElement>$(".new-todo");
  const allToggle = <HTMLInputElement>$('.toggle-all');
  return {
    add(todo) {
      todos.push(todo);
      
    },
    delete(id) {
        todos = todos.filter((todo: TodoInput)=> {
            console.log(todo,id);
            
            return todo.id != id
            
        });
    },
    changeToggle(id){
        todos = todos.map((todo: TodoInput) => {
            if(todo.id == id){
                return {...todo,complete:!todo.complete}
            }else{
                return todo
            }
        })
    }
    ,
    changeToggleAll(checked) {
        todos = todos.map((todo: TodoInput) => ({...todo,complete:checked}));
    }
    ,
    render() {
        const html:string = todos.map((todo:TodoInput) => (
            `
            <li class=${todo.complete && 'completed'}>
						<div class="view">
							<input class="toggle" data-toggle="${todo.id}" type="checkbox" ${todo.complete ? 'checked' : ''}>
							<label>${todo.title}</label>
							<button   data-index='${todo.id}' class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
			</li>
            `
        )).join('');
        todoList.innerHTML = html;
    },
    init() {
        newTodo.addEventListener('keyup',(e:KeyboardEvent) => {
          
           
            
           if( e.keyCode === 13){
              
               const todoNew:TodoInput = {
                   id:new Date().getTime(),
                   complete:false,
                   title:e.target.value,
               }
               this.add(todoNew)
               newTodo.focus();
               newTodo.value ='';

               this.render();
               
               
            
           }
        })
        todoList.onclick = (event) => {
             const deleteBtn = event.target.closest(".destroy");
             const checkboxToggle = event.target.closest(".toggle");
            
          
             if(deleteBtn){
                const index = deleteBtn.dataset.index
                this.delete(index)
                this.render();
             }
             if(checkboxToggle){
                const index = checkboxToggle.dataset.toggle
                this.changeToggle(index)
                this.render();
             }


        }

        allToggle.addEventListener('change',(e) => {
            console.log(e);
            
            this.changeToggleAll(e.target.checked);
            this.render();
        })
        this.render();
    }
  };
}

app().init();
