import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';
const todos=[{
    id:1,
    text:"学习react1",
    completed:false
},{
    id:2,
    text:"学习react1",
    completed:false
},{
    id:3,
    text:"学习react1",
    completed:false
},{
    id:4,
    text:"学习react1",
    completed:true
},{
    id:5,
    text:"学习react1",
    completed:true
},{
    id:6,
    text:"学习react1",
    completed:true
}];
const filter="all";
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            todos:[],
            filter:'all'
        }
        this.nextTodoId=0;
    }
    render() {
        const todos=this.getVisibleTodos();
        const {filter}=this.state;
        return (
            <div>
                <AddTodo addTodo={this.addTodo}/>
                <TodoList todos={todos} toggleTode={this.toggleTode}/>
                <Footer filter={filter} setVisibilityFiter={this.setVisibilityFiter}/>
            </div>
        );
    };
    getVisibleTodos=()=>{
        const currentFilter=this.state.filter;
        return this.state.todos.filter(item=>{
            if(currentFilter==='active'){
                return !item.completed
            }else if(currentFilter==='completed'){
                return item.completed
            }else{
                return true
            }
        })
    };
    addTodo=text=>{
        const todo={
            id:this.nextTodoId++,
            text,
            completed:false
        }
        const newTodos=[todo,...this.state.todos];
        this.setState({
            todos:newTodos
        })
    };
    toggleTode=id=>{
        const newTodos=this.state.todos.map(item=>{
            return item.id===id?{...item,completed:!item.completed}:item
        });
        this.setState({
            todos:newTodos
        })
    };
    setVisibilityFiter=(filter)=>{
        this.setState({
            filter:filter
        })
    }
}

export default App;