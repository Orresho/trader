import React from "react";
import Item from "./item/item";
import { itemsMock } from '../../config/itemsMock';

const items = ({
    // onSelectItem,
}) => (
        <div>
            {itemsMock && (
                itemsMock.map((itm, index) => {
                    return <Item
                        item={itm}
                        key={index}
                    // onSelectItem={onSelectItem}
                    />
                }))}
        </div>
    )

export default items;