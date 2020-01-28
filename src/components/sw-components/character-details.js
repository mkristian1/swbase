import React from 'react';
import { ItemDetails, Record } from '../item-details';
import { withSwapiData } from '../hoc/';

const CharacterDetails = (props) => {

    return (
        <ItemDetails {...props} >
            <Record feature="height" label="Height" />
            <Record feature="hairColor" label="Hair Color" />
        </ItemDetails >
    );
};

const mapMethodsToProps = (swapiData) => {
    return {
        itemData: swapiData.getCharacter,
        itemImgUrl: swapiData.getCharacterImg
    }
}

export default withSwapiData(CharacterDetails, mapMethodsToProps);