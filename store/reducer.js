import { SET_TODO_INPUT, ADD_TODO} from "./constant";

const iniState = {
    todos: [],
    todoInput: {
        id: '',
        name: '',
        status: ''
    },
}

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:            
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        default:
            throw new Error('Invalid action');
    }
}

export { iniState }
export default reducer;
