import React from 'react';
import { ItemDetails, Record } from '../item-details';
import { withSwapiData } from '../hoc/';

const VehicleDetails = (props) => {

    return (
        <ItemDetails {...props} >
            <Record feature="model" label="Model" />
            <Record feature="manufacturer" label="Manufacturer" />
            <Record feature="passengers" label="Passengers" />
        </ItemDetails >
    );
};

const mapMethodsToProps = (swapiData) => {
    return {
        itemData: swapiData.getVehicle,
        itemImgUrl: swapiData.getVehicleImg
    }
}

export default withSwapiData(VehicleDetails, mapMethodsToProps);