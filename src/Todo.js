import React, {
    Component
} from 'react'
import "./Todo.css"

class Todo extends Component {
    constructor(props){
        super(props);
        this.state={
            isEditing: false,
            task: this.props.task,
            isDone:false
        }
        this.toggleForm = this.toggleForm.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.isDone = this.isDone.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }
    toggleForm(){
        this.setState({isEditing: !this.state.isEditing})
    }
    handleUpdate(evt){
        evt.preventDefault();
        this.props.updateTodo(this.props.id,this.state.task)
        this.setState({isEditing:false})

    }
    handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  isDone(){
      this.setState({isDone: !this.state.isDone})
      
  }
    render() {
        let isDone = null;
        if (this.state.isDone){
            isDone = {
                textDecoration: "line-through",
                color:"gray"
            }
        }

        let result;
        if(this.state.isEditing){
            result=(
                <div className="form-update">
                    <form className="form-update" onSubmit={this.handleUpdate}>
                        <input  type="text" value={this.state.task} name="task" onChange={this.handleChange}/>
                        <button>Save</button>
                    </form>
                </div>
            )
        }else{
            result =                         
            <div className="todos">
            <div style={isDone} onClick={this.isDone} className="todos-task">
                {this.props.task}
            </div>
            <div>
            <button onClick={this.toggleForm}>Edit</button>
            <button onClick={this.props.removeTodo}>X</button>
            </div>
            </div>
        }
        return result
    }
}

export default Todo;