import { SET_TODO_INPUT, ADD_TODO, REMOVE_TODO} from "./constant";

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
            const updateTask = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return {...todo, status: "done"};
                }
                return todo;
            });
            return {
                ...state,
                todos: updateTask
            }
        case ADD_TODO:
            if (action.payload.name == null) {
                alert("Task is required");
                return state;
            }
            state.todos.map((todo) => {
                if (todo.name == action.payload.name) alert("Task is exist");
            });
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(
                  (todo) => todo.id !== action.payload
                ),
            }
        default:
            throw new Error('Invalid action');
    }
}

export { iniState }
export default reducer;
