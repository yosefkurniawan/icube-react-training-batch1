export function cart(state = [], action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            console.log('123123123')
            // return state
            return [...state, action.item];
        default:
            return state
    }
}