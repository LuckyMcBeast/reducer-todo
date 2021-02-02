export default todoReducer;
export const ADD_ITEM = 'ADD_ITEM';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

export const initialState = {
    todos : [ 
    {
        task : 'Create a ToDo List',
        completed: false,
        id : 0
    }
]}

export let itemID = 0;

function todoReducer(state, action) {
    switch(action.type){
        case 'ADD_ITEM':
            itemID++;
            return { ...state, todos: [...state.todos, 
                {
                    task: action.payload,
                    completed: false,
                    id: itemID
                }
            ]                   
        }
        case 'TOGGLE_COMPLETED':

            console.log(action.payload);
            return {...state, todos : state.todos.map((item) => {
                if(item.id === action.payload){
                    return { ...item, completed : !item.completed }
                }
                else{ return item }
            })

        }
        
        default: return state;
    }
}

