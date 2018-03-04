import React from "react";
import './item.css';

const item = ({item}) => (
    <div>
        <div className="single-item-container">
            <h3>{item.car_make}</h3>
            <p>{item.car_model}</p>
        </div>
    </div>
)

export default item;