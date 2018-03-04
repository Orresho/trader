import React from "react";
import Item from "./item/item";
import { itemsMock } from '../../config/itemsMock';
import Car_data from '../../config/MOCK_DATA'
import './items.css';

const items = ({
    // onSelectItem,
}) => (
        <div className="items-wrapper">
            {Car_data && (
                Car_data.map((itm) => {
                    return <Item
                        item={itm}
                        key={itm.id}
                    // onSelectItem={onSelectItem}
                    />
                }))}
        </div>
    )

export default items;