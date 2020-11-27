import {createStore} from 'redux';
import rootReducer from './reducers';
import {addTodo,setFilter,setTodoText,toggleTodo} from './actions/index';

const store=createStore(rootReducer)
//初始state
console.log(store.getState());
//订阅state的变化
const unsubscribe=store.subscribe(()=>{
    console.log(store.getState())
});
store.dispatch(addTodo('learn about actions'));
store.dispatch(toggleTodo(0));
store.dispatch(setFilter('active'));
store.dispatch(setTodoText('learn'));
//取消订阅
unsubscribe();