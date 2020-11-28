import {ADD_TODO,FETCH_TODOS_FAILURE,FETCH_TODOS_REQUEST,FETCH_TODOS_SUCCESS,TOGGLE_TODO} from '../actions/actionTypes';
const initialState={
    isFetching:false,
    error:null,
    data:[]
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_TODOS_REQUEST:
            return {
                ...state, 
                isFetching:true
            }
        case FETCH_TODOS_SUCCESS:
            return {
                ...state,
                data:action.data,
                isFetching:false
            }
        case FETCH_TODOS_FAILURE:
            return {
                ...state,
                error:action.error,
                isFetching:false
                }
        default:
            return {
                ...state,
                data:todos(state.data,action)
            }
    }
}
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
export default reducer;
