import React from 'react';
import * as TodoActions from "../data/todo-action";
import TodoData from "../data/todo-data";
import ModalTodoDelete from "../components/ModalTodoDelete";

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            list: TodoData.getAll()
        }
    }

    UNSAFE_componentWillMount() {
        TodoData.on("change", () => {
            this.setState({
                list: TodoData.getAll()
            });
        });
    }

    todoDelete(id) {
        TodoActions.deleteTodo(id);
    }

    todoSelected(id) {
        this.props.todoSelected(id);
    }

    getStyleButton(statetodo) {
        switch (statetodo) {
            case "Editorial":
                return "btn btn-primary";
            case "Q1 Goals":
                return "btn btn-info";
            case "Recruiting":
                return "btn btn-success";
            case "Mobile":
                return "btn btn-warning";
            default:
                return "btn btn-primary";
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    {
                        this.state.list.map((item) => {
                            console.log(item);
                            return (
                                <div key={item.id}>
                                    <div key={item.id} className="row">
                                        <div className="col col-sm-1 text-right">
                                            <i className="far fa-check-circle" />
                                        </div>
                                        <div className="col text-left">
                                            <a className="nav-link" href="#" onClick={() => this.todoSelected(item.id)}>
                                                {item.name}
                                            </a>
                                        </div>
                                        <div className="col col-md-2 text-right">
                                            <button type="button"
                                                className={this.getStyleButton(item.statetodo) + " btn-rounded btn-sm"}>
                                                {item.statetodo}
                                            </button>
                                        </div>
                                        <div className="col col-md-1 text-right when-todo">{item.when}</div>
                                        <div className="col col-md-1">
                                            <ModalTodoDelete executeAcepted={this.todoDelete.bind(this)} id={item.id}/>
                                        </div>
                                    </div>
                                    <hr className="row" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default TodoList