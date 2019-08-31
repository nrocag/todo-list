import React, { Component } from "react";
import * as TodoActions from "../data/todo-action";
import TodoData from "../data/todo-data";

class AdminTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Todo: TodoData.getById(this.props.id)
        };
    }

    create() {
        //event.preventDefault();
        if (this.state.id > 0) {
            //TodoActions.updateTodo(this.state.Todo);
        } else {
            //TodoActions.createTodo(this.state.Todo);
        }
    }

    updateName(e) {
        const TodoUpdate = this.state.Todo;
        TodoUpdate.name = e.target.value;
        this.setState({ Todo: TodoUpdate });
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="inputName">Nombre</label>
                    <input onChange={e => this.updateName(e)} value={this.state.Todo.name}
                        className="form-control" id="inputName" aria-describedby="emailHelp" placeholder="Fulanito de tal" />
                </div>
                <button type="button" className="btn btn-primary btn-lg">Add Task</button>
            </div>
        );
    }
}

export default AdminTodo /* Hace público el componente */