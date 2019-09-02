import React, { Component } from "react";
import * as TodoActions from "../data/todo-action";
import TodoData from "../data/todo-data";

class TodoAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Todo: TodoData.getById(this.props.idTodo)
        };
    }

    saveTodo = () => {
        console.log("Save todo",this.state.Todo);
        if (this.state.Todo.id > 0) {
            TodoActions.updateTodo(this.state.Todo);
        } else {
            TodoActions.createTodo(this.state.Todo);
        }
    }

    updateName = (e) => {
        const todoUpdate = this.state.Todo;
        todoUpdate.name = e.target.value;
        this.setState({ Todo: todoUpdate });
    }

    clearTodo = () =>{
        console.log("Clear todo");
        const todoClean = this.state.Todo;
        todoClean.name = '';
        todoClean.id = -1;
        this.setState({ Todo: todoClean });
    }

    render() {
        return (
            <div>
                <div className="input-group todo-admin">
                    <input onChange={e => this.updateName(e)} value={this.state.Todo.name}
                    type="text" className="form-control" placeholder="¿Qué realizarás?" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button" onClick={this.saveTodo.bind(this)}>Guardar</button>
                        <button className="btn btn-secondary" type="button" onClick={this.clearTodo.bind(this)}>Limpiar</button>
                    </div>                   
                </div>
                <hr className="hrShadow" />
            </div>
        );
    }
}

export default TodoAdmin /* Hace público el componente */