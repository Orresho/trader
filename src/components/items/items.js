import React from "react";
import item from "./item/item";
import { itemsMock } from '../../config/itemsMock';

const items = ({
    onSelectItem
}) => (

    <div>
        {console.log(itemsMock)}
        {itemsMock && 
            itemsMock.map((itm, index) => {
            <item 
                item={itm}
                key={index}
                onSelectItem={onSelectItem}
             />
        })}
    </div>
)

export default items;