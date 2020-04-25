const initTodoData = [
    {
        title: 'Ngemut permen',
        status: 0,
    },
    {
        title: 'Beli bakpao',
        status: 0,
    },
];

export function todo(state = initTodoData, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.todo];
        case 'TOGGLE_STATUS':
            return state.map((todo) =>
                todo.title === action.todo.title 
                ? { ...todo, status: !todo.status }
                : todo
            );
        default:
            return state;
    }
}
