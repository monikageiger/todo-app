import React, {
    Component
} from 'react'
import uuid from 'react-uuid'
import "./NewTodoForm.css"

class NewTodoForm extends Component {
    static defaultProps = {};
    constructor(props) {
        super(props);
        this.state = {
          task : ""
        
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
  handleSubmit(evt) {
    evt.preventDefault();
    const newtodo = { ...this.state, id: uuid() };
    this.props.addTodo(newtodo);
    this.setState({
            task : ""
          });
  }
    handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
    render() {
        return (
          <div className="todo-form">
            <form onSubmit={this.handleSubmit}>
                <label
                htmlFor="task">Task</label>
                <input
                id="task"
                name="task"
                type="text"
                placeholder="Task"
                onChange={this.handleChange}
                value={this.state.task}
                />

                <button>Add ToDo</button>
            </form>
            </div>
        );
    }
}

export default NewTodoForm;