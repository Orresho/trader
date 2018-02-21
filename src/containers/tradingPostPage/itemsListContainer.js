import React, { Component } from "react";
import itemListComponent from '../../components/tradingPost/itemListComponent';
import { connect } from 'react-redux';

class ItemsContainer extends Component {
    render() {
        return (
            <div>
                {props.items.length}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps)(ItemsContainer);
