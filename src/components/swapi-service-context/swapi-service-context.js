import React from 'react';

const { 
    Provider: SwapiDataProvider,
    Consumer: SwapiDataConsumer
} = React.createContext();

export {
    SwapiDataProvider,
    SwapiDataConsumer
};