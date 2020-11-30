import {
  ADD_TODO,
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  TOGGLE_TODO,
} from "../actions/actionTypes";
import Immutable from "immutable";
const initialState = {
  isFetching: false,
  error: null,
  data: [],
};
const reducer = (state = Immutable.fromJS(initialState), action) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return state.set("isFetching", true);
    // {
    //     ...state,
    //     isFetching:true
    // }
    case FETCH_TODOS_SUCCESS:
      return state.merge({
        isFetching: false,
        data: Immutable.fromJS(action.data),
      });
    // {
    //     ...state,
    //     data:action.data,
    //     isFetching:false
    // }
    case FETCH_TODOS_FAILURE:
      return state.merge({
        isFetching: false,
        error: action.error,
      });
    // {
    //     ...state,
    //     error:action.error,
    //     isFetching:false
    //     }
    default:
      const data = state.get("data");
      return state.set("data", todos(data, action));
    // return {
    //     ...state,
    //     data:todos(state.data,action)
    // }
  }
};
/**
 * todo的reducer只需管理todos的状态
 * @param {*} state
 * @param {*} action
 */
const todos = (state = Immutable.fromJS([]), action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = Immutable.fromJS({   
        id: action.id,
        text: action.text,
        completed: false,
      });
      return state.push(newTodo);  //每一个todo都是immutable不可变对象
    // return [
    //     ...state,
    //     {
    //         id:action.id,
    //         text:action.text,
    //         completed:false
    //     }
    // ]
    case TOGGLE_TODO:    //每一个todo都是immutable不可变对象，通过get、set获取和修改值
      return state.map((todo) => 
        todo.get("id") === action.id
          ? todo.set("completed", !todo.get("completed"))
          : todo
      );
    // return state.map(todo=>{
    //     return (todo.id===action.id)?{...todo,completed:!todo.completed}:todo} )
    default:
      return state;
  }
};
export default reducer;
