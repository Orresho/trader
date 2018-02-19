import React, { Component } from "react";
import itemListComponent from '../../components/tradingPostPage/itemListComponent';
import { connect } from 'react-redux';

class ItemsContainer extends Component {
    render() {
        return (
            <div>
                {this.props.items.map((item) => {
                    return <itemListComponent key={item.id} {...item} />
                })}
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
