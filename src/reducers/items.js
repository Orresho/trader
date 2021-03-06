import * as actionType from '../actions/actionTypes';

// Initial state is an array of items
const initialState = []

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_ITEM:
            return [
                ...state,
                action.item
            ]
        case actionType.REMOVE_ITEM:
            // Return a new array without the item with matching id
            return state.filter(({ id }) => id !== action.id)

        case actionType.EDIT_ITEM:
            return state.map((item) => {
                console.log(item)
                if (item.id === action.id) {
                    return {
                        ...item,
                        ...action.updates
                    }
                } else {
                    return item;
                }
            })

        default:
            return state;
    }
}

export default itemsReducer;