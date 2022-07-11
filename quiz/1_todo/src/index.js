//아래와 같이 type으로 정의하는것도 하나의 방법
// type Todo = {
//   id: number;
//   title: string;
//   done: boolean;
// }
var TodoItemImpl = /** @class */ (function () {
    function TodoItemImpl(id, title, done) {
        this.id = id;
        this.title = title;
        this.done = done;
    }
    return TodoItemImpl;
}());
var todoItems;
var fetchTodoItems = function () {
    var todos = [];
    todos.push(new TodoItemImpl(1, "안녕", false));
    todos.push(new TodoItemImpl(2, "타입", false));
    todos.push(new TodoItemImpl(3, "스크립트", false));
    return todos;
};
// crud methods
var fetchTodos = function () {
    var todos = fetchTodoItems();
    return todos;
};
var addTodo = function (todo) {
    todoItems.push(todo);
};
var deleteTodo = function (index) {
    todoItems.splice(index, 1);
};
var completeTodo = function (index, todo) {
    todo.done = true;
    todoItems.splice(index, 1, todo);
};
// business logic
var logFirstTodo = function () {
    return todoItems[0];
};
var showCompleted = function () {
    return todoItems.filter(function (item) { return item.done; });
};
// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
var addTwoTodoItems = function (todo) {
    // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
    var todosLength = todoItems.length;
    var todoItem = new TodoItemImpl(todosLength, todo, false);
    todoItems.push(todoItem);
};
// NOTE: 유틸 함수
var log = function () {
    console.log(todoItems);
};
todoItems = fetchTodoItems();
addTwoTodoItems("hello");
addTwoTodoItems("world");
log();
