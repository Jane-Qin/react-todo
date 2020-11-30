//import {combineReducers} from 'redux'
import {combineReducers} from "redux-immutable"; //从redux-immutable中引入的combineReducers,可以识别immutable类型的reducer的
import todos from './todos';
import filter from './filter';
import text from './text'; 
export default combineReducers({
    todos,
    text,
    filter
});