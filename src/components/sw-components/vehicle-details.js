import React from 'react';
import { ItemDetails, Record } from '../item-details';
import { withSwapiData } from '../hoc/';

const VehicleDetails = (props) => {

    return (
        <ItemDetails {...props} >
            <Record feature="model" label="Model" />
            <Record feature="manufacturer" label="Manufacturer" />
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