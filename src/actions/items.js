import * as actionType from "./actionTypes";
import uuid from 'uuid';

// Add item to the trading post
export const addItem = ({ itemType = '', name = '', description = '', status = '', price = '', seller = '' } = {}) => ({
    type: actionType.ADD_ITEM,
    payload: {
        id: uuid(),
        itemType,
        name,
        description,
        status,
        price,
        seller
    }
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