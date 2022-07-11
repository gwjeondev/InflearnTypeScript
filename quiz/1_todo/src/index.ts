//아래와 같이 type으로 정의하는것도 하나의 방법
// type Todo = {
//   id: number;
//   title: string;
//   done: boolean;
// }

interface TodoItem {
  id: number;
  title: string;
  done: boolean;
}

class TodoItemImpl implements TodoItem {
  constructor(public id: number, public title: string, public done: boolean) {}
}

let todoItems: Array<TodoItem>;

const fetchTodoItems = (): Array<TodoItem> => {
  const todos: Array<TodoItem> = [];
  todos.push(new TodoItemImpl(1, "안녕", false));
  todos.push(new TodoItemImpl(2, "타입", false));
  todos.push(new TodoItemImpl(3, "스크립트", false));

  return todos;
};

// crud methods
const fetchTodos = (): Array<TodoItem> => {
  const todos: Array<TodoItem> = fetchTodoItems();
  return todos;
};

const addTodo = (todo: TodoItem) => {
  todoItems.push(todo);
};

const deleteTodo = (index: number): void => {
  todoItems.splice(index, 1);
};

const completeTodo = (index: number, todo: TodoItem): void => {
  todo.done = true;
  todoItems.splice(index, 1, todo);
};

// business logic
const logFirstTodo = (): TodoItem => {
  return todoItems[0];
};

const showCompleted = (): Array<TodoItem> => {
  return todoItems.filter((item: TodoItem) => item.done);
};

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
const addTwoTodoItems = (todo: string): void => {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  const todosLength: number = todoItems.length;
  const todoItem = new TodoItemImpl(todosLength, todo, false);
  todoItems.push(todoItem);
};

// NOTE: 유틸 함수
const log = (): void => {
  console.log(todoItems);
};

todoItems = fetchTodoItems();
addTwoTodoItems("hello");
addTwoTodoItems("world");
log();
