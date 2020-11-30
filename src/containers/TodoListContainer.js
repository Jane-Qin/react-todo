import { connect } from "react-redux";
import { toggleTodo, fetchTodos } from "../actions";
import TodoList from "../components/TodoList";
import {getVisibleTodos} from '../selector/index';

const mapStateToProps = state => ({
  todos: getVisibleTodos(state).toJS(),    //将immutable对象转化为普通js对象
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  fetchTodos: () => dispatch(fetchTodos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);