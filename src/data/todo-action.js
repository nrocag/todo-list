import Dispatcher from "./dispatcher";

export function createTodo(todo){
    Dispatcher.dispatch({
        type: "CREATE",
        todo
    });
}

export function updateTodo(todo){
    Dispatcher.dispatch({
        type: "UPDATE",
        todo
    });
}

export function deleteTodo(id){
    Dispatcher.dispatch({
        type: "DELETE",
        id
    });
}

export default function deleteTodoFalse(id){
    Dispatcher.dispatch({
        type: "DELETE",
        id
    });
}