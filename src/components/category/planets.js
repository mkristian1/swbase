import React, { Component } from 'react';
import MainContent from '../main-content';
import { PlanetDetails } from '../sw-components';
import { PlanetList } from '../sw-components/item-lists';

export default class Planets extends Component {
    state = {
        selectedId: 9,
    };

    getSelectedItem = (id) => {
        this.setState({
            selectedId: id
        });
    };

    render() {

        return (
            <MainContent
                left={<PlanetList getSelectedItem={this.getSelectedItem} />}
                right={<PlanetDetails itemId={this.state.selectedId} />}>
            </MainContent>
        );
    };
};