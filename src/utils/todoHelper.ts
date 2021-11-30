export default class TodoHelper {
  setTodos: any;

  constructor(setTodos: any) {
    this.setTodos = setTodos;
  }

  addTodo(todo: any) {
    const newTodo = {
      title: todo,
      isDone: false,
      id: Date.now(),
    };

    this.setTodos((todos: any) => [newTodo, ...todos]);
  }

  deleteTodo(allTodos: any, id: any) {
    let newTodos = allTodos;
    newTodos = newTodos.filter((todoItem: any) => todoItem.id !== id);
    this.setTodos(newTodos);
  }

  resolveTodo(allTodos: any, id: any) {
    this.setTodos(
      allTodos.filter((todoItem: any) => {
        if (todoItem.id === id) {
          todoItem.isDone = !todoItem.isDone;
        }
        return todoItem;
      })
    );
  }

  editTodo(allTodos: any, id: any, title: any) {
    this.setTodos(
      allTodos.filter((todoItem: any) => {
        if (todoItem.id === id) {
          todoItem.title = title;
        }
        return todoItem;
      })
    );
  }
}
