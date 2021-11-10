//TODO Utility Types
//!Partial<Type>
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});

//!Required<Type>
interface Props {
  a?: number;
  b?: string;
}
type MyProps = Required<Props>;

//! Readonly<Type>
interface TodoR {
  title: string;
}
const todoR: Readonly<TodoR> = {
  title: "Delete inactive users",
};

// todoR.title = "Hello";

//!Record<Keys, Type>
interface CatInfo {
  age: number;
  breed: string;
}
type CatName = "miffy" | "boris" | "mordred";

type CatType = Record<CatName, CatInfo>;
const cats: CatType = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

//!Pick<Type, Keys>

interface TodoPick {
  title: string;
  description: string;
  completed: boolean;
}
type TodoPreview = Pick<TodoPick, "title" | "completed">;

const todoPick: TodoPreview = {
  title: "Clean room",
  completed: false,
};

// console.log(todoPick);

//!Omit<Type, Keys>

interface TodoOmit {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<TodoOmit, "description">;

//!Exclude<Type, ExcludedUnion>
type T0 = Exclude<"a" | "b" | "c", "a">;

//! Extract<Type, Union>
type T0 = Extract<"a" | "b" | "c", "a" | "f">;
