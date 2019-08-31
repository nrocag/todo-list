import React, { Component } from "react";
import Head from "../components/Head";
import TodoList from "./TodoList";

class Main extends Component {
    render() {
        return (
            <div>
                <Head />                
                <TodoList />
            </div>
        );
    }
}

export default Main /* Hace público el componente */