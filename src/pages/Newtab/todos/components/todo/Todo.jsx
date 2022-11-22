import React from "react";

import dayjs from 'dayjs'
import { connect } from "react-redux";
import StatusBar from "../status-bar/StatusBar";
import TodoList from "../todo-list/TodoList";
import styles from "./less/todo.less";
import {  Rate } from 'antd';
import { FrownOutlined, MehOutlined, SmileOutlined, HeartOutlined, QuestionCircleOutlined, StarFilled } from '@ant-design/icons';
  /**
   * Returns the list of visible todos depending on todo.completed flag
   * and based on showCompleted flag.
   **/
  const getCompletedByTodayTodos = (todos) => todos.filter(todo => {
    console.log(todo.completedAt)
    return todo.completed && todo.completedAt && dayjs(todo.completedAt).isSame(dayjs(), 'day');
  });

const Todo = props => {
  let todos = getCompletedByTodayTodos(props.todos)
  let length = todos.length;
  let rates = []
  while(length > 0){
    rates.push(<Rate allowHalf defaultValue={length >= 10? 10: length} count={10} style={{color: 'red', fontSize: 7}} /> );
    rates.push(<br/>)
    length -= 10
  }
  return (<div className={styles.todo}>
    <div style={{display:'flex', width: '100%', flexDirection: 'row'}}>
      <h1 className={styles.headline} style={{flex: 3}}>
        New List
      </h1>
      <div style={{display:'flex',flexDirection: 'row', flex: 7, justifyContent: 'right'}} >
        <div style={{color: 'gray', display: 'flex', flexDirection:'column'}}>
        {
          rates 
        }</div>
      </div>
    </div>
    <StatusBar />
    <TodoList />
    <footer>
      <p className={styles.footerNote}>
        Inspired by Apple MacOS Reminders
      </p>
    </footer>
  </div>
)}

const mapStateToProps = state => {
  return {
    todos: state.todoReducer.todos,
    showCompleted: state.filterReducer.showCompleted,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // showCompletedTodo: () => dispatch(showCompletedTodo()),
    // hideCompletedTodo: () => dispatch(hideCompletedTodo()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
// export default Todo;
