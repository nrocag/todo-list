import { EventEmitter } from "events";
import Dispatcher from "./dispatcher";
import Cookie from 'react-cookies';

class TodoData extends EventEmitter {

    constructor() {
        super();
        this.todosList = Cookie.load('todos1');

        console.log(this.todoslist);


        if (this.todosList == null) {
            this.todosList = [
                {
                    id: 1,
                    name: 'Quarterly',
                    when: "Tomorrow",
                    statetodo: "Editorial"
                },
                {
                    id: 2,
                    name: 'Recruiting',
                    when: "Today",
                    statetodo: "Q1 Goals"
                },
                {
                    id: 3,
                    name: 'Quarterly',
                    when: "Tomorrow",
                    statetodo: "Recruiting"
                },
                {
                    id: 4,
                    name: 'Quarterly',
                    when: "Tomorrow",
                    statetodo: "Editorial"
                }
            ];

            console.log(this.todosList);

            this.savetodos();
        }
    }

    savetodos() {
        Cookie.save('todos1', this.todosList, { path: '/' });
    }

    create(todo) {
        todo.id = Date.now();
        //Spread Operator in React {...}
        this.todosList = [todo, ...this.todosList];
        this.savetodos();
        this.emit("change");
    }

    update(todo) {
        this.todosList = this.todosList.map(element => element.id === todo.id ? todo : element);
        this.savetodos();
        this.emit("change");
    }

    delete(id) {
        this.todosList = this.todosList.filter(element => element.id !== parseInt(id, 10));
        this.savetodos();
        this.emit("change");
    }

    getAll() {
        console.log(this.todosList);

        return this.todosList;
    }

    getById(id) {
        let todo = this.todosList.filter((e) => e.id === parseInt(id, 10))[0];
        if (todo === undefined || todo === null) {
            todo = {
                id: -1,
                name: '',
                when: "Tomorrow",
                statetodo: "Editorial"
            }
        }
        return todo;
    }

    handleActions(action) {
        console.debug("Recibe algo", action);
        switch (action.type) {
            case 'CREATE':
                this.create(action.todo);
                break;
            case 'UPDATE':
                this.update(action.todo);
                break;
            case 'DELETE':
                this.delete(action.id);
                break;
            default:
                break;
        }
    }
}

const todoData = new TodoData();
Dispatcher.register(todoData.handleActions.bind(todoData));
export default todoData;