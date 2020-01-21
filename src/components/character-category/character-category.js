import React, { Component } from 'react';
import SwapiData from '../../services/swapi-data';
import ItemList from '../item-list';
import MainContent from '../main-content';

import CharacterDetails from '../character-details';
import { render } from '@testing-library/react';

export default class CharacterCategory extends Component {
    swapiData = new SwapiData();
    
    state = {
        selectedId: 1,
        selectIdPlanet: 2
    }

    getSelectedCharacter = (id) => {
        this.setState({
            selectedId: id
        });
    };

    render() {
        const itemListCharacter = (<ItemList
            getSelectedCharacter={this.getSelectedCharacter}
            itemData={this.swapiData.getAllCharacter} />);

        const CharacterTemplate = (<CharacterDetails characterId={this.state.selectedId} />);

        return (
            <MainContent left={itemListCharacter} right={CharacterTemplate} />

        );
    };


}