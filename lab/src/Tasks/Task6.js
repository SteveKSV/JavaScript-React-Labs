import React from 'react';

class Task6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: 'Learn React', done: false },
        { text: 'Build a Todo App', done: true },
        { text: 'Deploy to Netlify', done: false },
      ]
    };
  }

  addTodo = (todo) => {
    this.setState({ todos: [...this.state.todos, todo] });
  };

  removeTodo = (index) => {
    const newTodos = [...this.state.todos];
    newTodos.splice(index, 1);
    this.setState({ todos: newTodos });
  };

  editTodo = (index, newTodo) => {
    const newTodos = [...this.state.todos];
    newTodos[index] = newTodo;
    this.setState({ todos: newTodos });
  };

  toggleTodo = (index) => {
    const newTodos = [...this.state.todos];
    newTodos[index] = {
      ...newTodos[index],
      done: !newTodos[index].done,
    };
    this.setState({ todos: newTodos });
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li
              key={index}
              style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
            >
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => this.toggleTodo(index)}
              />
              {todo.text}
              <button onClick={() => this.removeTodo(index)}>X</button>
              <button onClick={() => this.editTodo(index, { text: 'New text', done: false })}>Edit</button>
            </li>
          ))}
        </ul>
        <button onClick={() => this.addTodo({ text: 'New todo', done: false })}>Add Todo</button>
      </div>
    );
  }
}

export default Task6;
