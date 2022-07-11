class TodoItem {
  id: number;
  title: string;
  done: boolean;

  constructor(id: number, title: string, done: boolean) {
    this.id = id;
    this.title = title;
    this.done = done;
  }
}

let todoItems: Array<TodoItem>;

const fetchTodoItems = (): Array<TodoItem> => {
  const todos: Array<TodoItem> = [];
  todos.push(new TodoItem(1, '안녕', false));
  todos.push(new TodoItem(2, '타입', false));
  todos.push(new TodoItem(3, '스크립트', false));

  return todos;
};

// crud methods
const fetchTodos = (): Array<TodoItem> => {
  const todos: Array<TodoItem> = fetchTodoItems();
  return todos;
};

const addTodo = (todo: TodoItem): void => {
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
const addTwoTodoItems = (): void => {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
};

// NOTE: 유틸 함수
const log = (): void => {
  console.log(todoItems);
};

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
