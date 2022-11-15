import React from "react";
import Todo from "./components/todo/Todo";
import "./less/main.less";


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Todo />
    );
  }
}
export default  App;
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("index"));
