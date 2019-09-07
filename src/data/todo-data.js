import { EventEmitter } from "events";
import Dispatcher from "./dispatcher";
import Cookie from 'react-cookies';

class TodoData extends EventEmitter {

    constructor() {
        super();
        this.todosList = Cookie.load('todos1');

        if (this.todosList == null || this.todosList.lenght <= 0) {
            this.todosList = [
                {
                    id: 1,
                    name: 'Quarterly newsletter',
                    when: "Tomorrow",
                    statetodo: "Editorial"
                },
                {
                    id: 2,
                    name: 'Recruiting blog post',
                    when: "Today",
                    statetodo: "Q1Goals"
                },
                {
                    id: 3,
                    name: 'Mobile app launch',
                    when: "Today",
                    statetodo: "Mobile"
                },
                {
                    id: 4,
                    name: 'Interview John H.',
                    when: "Today",
                    statetodo: "Recruiting"
                },
                {
                    id: 5,
                    name: 'Submit update to mobile storefronts',
                    when: "Today",
                    statetodo: "Mobile"
                },
                {
                    id: 6,
                    name: 'Schedule meeting with Alex',
                    when: "Yesterday",
                    statetodo: "WebSite"
                },
                {
                    id: 7,
                    name: 'Homepage refresh',
                    when: "Yesterday",
                    statetodo: "Sales"
                }
            ];
            
            this.savetodos();
        }
    }

    savetodos() {        
        Cookie.save('todos1', this.todosList, { path: '/' });
        console.log("Save todos", this.todosList);
    }

    getNew()
    {
        let todo = {
            id: -1,
            name: '',
            when: "Tomorrow",
            statetodo: "Editorial"
        }

        return todo;
    }

    create(todo) {
        todo.id = this.todosList.length + 10;
        console.log("create todo", todo);
        console.log("create todo list", this.todosList);

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
        console.log("Get all", this.todosList);
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