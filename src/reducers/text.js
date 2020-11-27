import {SET_TODO_TEXT} from '../actions/actionTypes';
/**
 * text的reducer只管理text的状态
 * @param {*} state 
 * @param {*} action 
 */
const text =(state='',action)=>{
    switch(action.type){
        case SET_TODO_TEXT:
            return action.text
        default:
            return state;
    }
}
export default text;