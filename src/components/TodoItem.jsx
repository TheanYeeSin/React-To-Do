import React, { Component } from "react";
import styles from "./TodoItem.module.css";

class TodoItem extends Component {
  state = {
    editing: false,
  };
  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

  handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
      this.setState({ editing: false });
    }
  };

  render() {
    const { id, title, completed } = this.props.todos;
    let viewMode = {};
    let editMode = {};
    if (this.state.editing) {
      viewMode.display = "none";
    } else {
      editMode.display = "none";
    }

    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    };
    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          ...
        </div>

        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={title}
          onChange={(e) => {
            this.props.setUpdateProps(e.target.value, id);
          }}
          onKeyDown={this.handleUpdatedDone}
        ></input>

        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => this.props.handleChangeProps(id)}
        />
        <button onClick={() => this.props.deleteTodoProps(id)}>DELETE</button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </li>
    );
  }
}
export default TodoItem;
