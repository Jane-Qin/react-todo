import { connect } from "react-redux";
import { addTodo, setTodoText } from "../actions/index";
import AddTodo from "../components/AddTodo";
import {getText} from '../selector/index'

//将redux中的state映射到组件的props上 ，state是redux的全局state
const mapStateToProps = (state) => ({
  text:getText(state),
});
//将redux的action映射到组件的props上，组件就可以根据props的方法，调用redux中的action
const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => dispatch(addTodo(text)),
  setTodoText: (text) => dispatch(setTodoText(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
