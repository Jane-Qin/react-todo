import {ADD_TODO,TOGGLE_TODO} from '../actions/actionTypes';
/**
 * todo的reducer只需管理todos的状态
 * @param {*} state 
 * @param {*} action 
 */
const todos=(state=[],action)=>{
    switch(action.type){
        case ADD_TODO:
            return [
                ...state,
                {
                    id:action.id,
                    text:action.text,
                    completed:false
                }
            ]
        case TOGGLE_TODO:
            return state.map(todo=>{
                return (todo.id===action.id)?{...todo,completed:!todo.completed}:todo} )
        default:
            return state;
    }
}
export default todos;