import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    render() {
        const {todos,toggleTode}=this.props;
        return (
            <ul>
                {
                    todos.map(todo=>{
                        return <Todo key={todo.id} {...todo}
                            onClick={()=>{toggleTode(todo.id)}}
                        />}
                    )
                }
            </ul>
        );
    }
}

export default TodoList;