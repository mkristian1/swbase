import React from 'react';
import {withData, withSwapiData} from '../hoc';
import ItemList from '../item-list';


const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        );
    };
};

const renderCharacter = (i) => (`${i.name} - (${i.birthYear})`);
const renderPlanet = (i) => (`${i.name} - (${i.diameter})`);
const renderVehicle = (i) => (`${i.name} - (${i.model})`);

const mapCharacterMethodsToProps  = (swapiData) => {
    return {
        itemData: swapiData.getAllCharacter
    }
}
const mapPlanetMethodsToProps  = (swapiData) => {
    return {
        itemData: swapiData.getAllPlanets
    }
}
const mapVehicleMethodsToProps  = (swapiData) => {
    return {
        itemData: swapiData.getAllVehicles
    }
}

const CharacterList = withSwapiData(withData(
    withChildFunction(ItemList, renderCharacter)), mapCharacterMethodsToProps);

const PlanetList = withSwapiData(withData(
    withChildFunction(ItemList, renderPlanet)), mapPlanetMethodsToProps);

const VehicleList = withSwapiData(withData(
    withChildFunction(ItemList, renderVehicle)), mapVehicleMethodsToProps);

export {
    CharacterList,
    PlanetList,
    VehicleList
}
