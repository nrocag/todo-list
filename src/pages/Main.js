import React, { Component } from "react";
import Head from "../components/Head";
import TodoList from "./TodoList";
import TodoAdmin from '../components/TodoAdmin';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            idTodo: 1
        }
    }

    todoSelected(id) {
        this.setState({
            idTodo: id
        });
    }

    render() {
        return (
            <div>
                <Head />
                <div className="container cont-ppal">
                    <TodoAdmin idTodo={this.state.idTodo} />
                    <TodoList todoSelected={this.todoSelected.bind(this)} />
                </div>
            </div>
        );
    }
}

export default Main /* Hace público el componente */