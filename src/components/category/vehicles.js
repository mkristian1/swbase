import React, { Component } from 'react';
import MainContent from '../main-content';
import { VehicleDetails } from '../sw-components';
import { VehicleList } from '../sw-components/item-lists';

export default class Vehicles extends Component {
    state = {
        selectedId: 6,
    };

    getSelectedItem = (id) => {
        this.setState({
            selectedId: id
        });
    };

    render() {

        return (
            <MainContent
                left={<VehicleList getSelectedItem={this.getSelectedItem} />}
                right={<VehicleDetails itemId={this.state.selectedId} />}>
            </MainContent>
        );
    };
};