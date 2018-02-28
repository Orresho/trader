import * as actionType from "./actionTypes";

// Add item to the trading post
export const addItem = () => ({
    type: actionType.ADD_ITEM,
})

// Remove item with the passed id
export const removeItem = ({ id } = {}) => ({
    type: actionType.REMOVE_ITEM
});

// Edit the item with the passed id and object updates
export const editItem = (id, updates) => ({
    type: actionType.EDIT_ITEM,
    id,
    updates
})