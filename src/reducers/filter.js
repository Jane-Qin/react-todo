import {SET_FILTER} from '../actions/actionTypes'
/**
 * filter的reducer只需管理filter的状态
 * @param {*} state 
 * @param {*} action 
 */
const filter=(state='all',action)=>{
    switch(action.type){
        case SET_FILTER:
            return action.filter;
        default:
            return state
    }
}
export default filter;