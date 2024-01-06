import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todos={todo}
            handleChangeProps={this.props.handleChangeProps}
            deleteTodoProps={this.props.deleteTodoProps}
            setUpdateProps = {this.props.setUpdateProps}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
