import React from 'react';
import { ItemDetails, Record } from '../item-details';
import { withSwapiData } from '../hoc/';

const PlanetDetails = (props) => {

    return (
        <ItemDetails {...props} >
            <Record feature="population" label="Population" />
            <Record feature="diameter" label="Diameter" />
        </ItemDetails >
    );
};

const mapMethodsToProps = (swapiData) => {
    return {
        itemData: swapiData.getPlanet,
        itemImgUrl: swapiData.getPlanetImg
    }
}

export default withSwapiData(PlanetDetails, mapMethodsToProps);