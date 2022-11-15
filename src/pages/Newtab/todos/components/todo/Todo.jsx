import React from "react";

import StatusBar from "../status-bar/StatusBar";
import TodoList from "../todo-list/TodoList";
import styles from "./less/todo.less";

const Todo = props => (
  <div className={styles.todo}>
    <h1 className={styles.headline}>
      New List
    </h1>
    <StatusBar />
    <TodoList />
    <footer>
      <p className={styles.footerNote}>
        Inspired by Apple MacOS Reminders
      </p>
    </footer>
  </div>
);

export default Todo;
