import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'
import "./TodoList.css"

class TodoList extends Component {
    static defaultProps = {};
    constructor(props) {
        super(props);
        this.state = {
            todos:[]
        };
        this.addTodo = this.addTodo.bind(this);
        this.update = this.update.bind(this);
    }
  addTodo(newtodo) {
    this.setState(state => ({
      todos: [...state.todos, newtodo]
    }));
  }
  deleteTodo(id){
      this.setState({
          todos: this.state.todos.filter(todo => todo.id !== id)
      })
  }
update(id,updatedTask){
    const updatedTodos = this.state.todos.map(todo => {
        if(todo.id===id){
            return{...todo,task:updatedTask}
        }
        return todo
    })
    this.setState({todos:updatedTodos})
}

    renderItems() {
    return (
<div>
        {this.state.todos.map(item => (
            <Todo updateTodo={this.update} key={item.id} id={item.id} task={item.task} removeTodo={()=>this.deleteTodo(item.id)} />
        ))}
</div>
    );
  }
    render() {
        return (
            <div className="basis">
            <h1>Todo List!</h1>
            <h4>Add your tasks to the list:</h4>
            <NewTodoForm addTodo={this.addTodo}/>
            {this.renderItems()}
            </div>
        );
    }
}

export default TodoList;