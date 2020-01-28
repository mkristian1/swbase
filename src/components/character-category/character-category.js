import React, { Component } from 'react';
import SwapiData from '../../services/swapi-data';
import ItemList from '../item-list';
import MainContent from '../main-content';

import { ItemDetails, Record } from '../item-details';

export default class CharacterCategory extends Component {

    swapiData = new SwapiData();

    state = {
        selectedId: 1,
    };

    getSelectedCharacter = (id) => {
        this.setState({
            selectedId: id
        });
    };

    render() {
        const { getCharacterImg, getCharacter, getAllCharacter } = this.swapiData;
        const itemListCharacter = (
            <ItemList
                getSelectedCharacter={this.getSelectedCharacter}
                itemData={getAllCharacter}>
                {i => (
                    `${i.name} - (${i.birthYear})`
                )}
            </ItemList>
        );

        const CharacterTemplate = (
            <ItemDetails
                itemData={getCharacter}
                itemId={this.state.selectedId}
                itemImgUrl={getCharacterImg}>
                <Record feature="height" label="Height" />
                <Record feature="hairColor" label="Hair Color" />
            </ItemDetails>
        );

        return (
            <MainContent left={<p>ss </p>} right={CharacterTemplate} />
        );
    };


}