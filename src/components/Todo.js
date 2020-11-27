import React, { Component } from 'react';

class Todo extends Component {
    render() {
        const {completed,text,onClick}=this.props;
        return (
            //line-through 中划线
            <li style={{textDecoration:completed?"line-through":"none"}}
            onClick={onClick}> 
                {text}
            </li>
        );
    }
}

export default Todo;