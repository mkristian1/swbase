import React, { Component } from 'react';
import MainContent from '../main-content';
import { CharacterDetails } from '../sw-components';
import { CharacterList } from '../sw-components/item-lists';

export default class Characters extends Component {
    state = {
        selectedId: 1,
    };

    getSelectedItem = (id) => {
        this.setState({
            selectedId: id
        });
    };

    render() {

        return (
            <MainContent
                left={<CharacterList getSelectedItem={this.getSelectedItem} />}
                right={<CharacterDetails itemId={this.state.selectedId} />}>
            </MainContent>
        );
    };
};