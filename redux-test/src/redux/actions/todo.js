export function toggleTodo(todo) {
    return {
        type: 'TOGGLE_STATUS',
        todo: todo
    };
}

export function addTodo(todo) {
    return {
        type: 'ADD_TODO',
        todo: todo
    }
}