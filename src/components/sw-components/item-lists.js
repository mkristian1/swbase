import React from 'react';
import SwapiData from '../../services/swapi-data';
import {withData} from '../hoc';
import ItemList from '../item-list';

const swapiData = new SwapiData();

const { getAllCharacter, getAllPlanets, getAllVehicles } = swapiData;

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



const CharacterList = withData(
    withChildFunction(ItemList, renderCharacter), getAllCharacter);

const PlanetList = withData(
    withChildFunction(ItemList, renderPlanet), getAllPlanets);

const VehicleList = withData(
    withChildFunction(ItemList, renderVehicle), getAllVehicles);

export {
    CharacterList,
    PlanetList,
    VehicleList
}
