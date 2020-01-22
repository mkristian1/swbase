import React, { Component } from 'react';
import SwapiData from '../../services/swapi-data';
import ItemList from '../item-list';
import MainContent from '../main-content';

import ItemDetails from '../item-details';

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
        const {getCharacterImg, getCharacter, getAllCharacter } =this.swapiData;
        const itemListCharacter = (<ItemList
            getSelectedCharacter={this.getSelectedCharacter}
            itemData={getAllCharacter} />);

        const CharacterTemplate = (
            <ItemDetails
                itemData={getCharacter}
                itemId={this.state.selectedId}
                itemImgUrl={getCharacterImg}
            />);

        return (
            <MainContent left={itemListCharacter} right={CharacterTemplate} />

        );
    };


}