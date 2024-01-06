import React, { Component } from "react";
import TodoList from "./TodoList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import NavigationBar from "./NavigationBar";
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Setup development environment",
        completed: true,
      },
      {
        id: uuidv4(),
        title: "Develope website and add content",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Deploy to live server",
        completed: false,
      },
    ],
  };

  handleChange = (id) => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    });
  };

  delTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    });
  };

  render() {
    return (
      <React.Fragment>
        <NavigationBar className="navigation" />
        <div className="container">
          <div className="inner">
            <Header />
            <InputTodo addTodoProps={this.addTodo} />
            <TodoList
              todos={this.state.todos}
              handleChangeProps={this.handleChange}
              deleteTodoProps={this.delTodo}
              setUpdateProps={this.setUpdate}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TodoContainer;
