import React from 'react';
import * as TodoActions from "../data/todo-action";
import TodoData from "../data/todo-data";
import AdminTodo from "../components/AdminTodo"
import TodoItem from "../components/TodoItem"

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            list: TodoData.getAll(),
            idTodo: -1
        }

        console.log(this.state.list);
    }

    deleteTodo(id) {
        console.log(id);
        TodoActions.deleteTodo(id);
    }

    selectTodo(id) {
        console.log(id);
        //this.setState({ idTodo: id });
    }

    
    /*
        UNSAFE_componentWillMount(){
            DevicesData.on("change", () => {
                this.setState({
                    list: DevicesData.getAll()
                });
            });
        }*/

    render() {
        return (
            <div> 
                <AdminTodo />
                <div className="container">
                    {
                        this.state.list.map((item) => {
                            return (
                                <TodoItem item={item} select={this.selectTodo.bind(this)} />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default TodoList