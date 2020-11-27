import { connect } from "react-redux";
import { toggleTodo } from "../actions/index";
import TodoList from "../components/TodoList";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "all":
      return todos;
    case "completed":
      return todos.filter((t) => t.completed);
    case "active":
      return todos.filter((t) => !t.completed);
    default:
      return new Error("unknow filter" + filter);
  }
};
//将redux中的state映射到组件的props上 ，state是redux的全局state
const mapStateToProps = (state) =>( {
    todos: getVisibleTodos(state.todos, state.filter)
  });
//将redux中的action映射到组件的props,组件就可以根据props上的方法调用redux中的action
const mapDispatchToProps = (dispatch) =>( {
    toggleTodo: (id) => dispatch(toggleTodo(id))
  })
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
