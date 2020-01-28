import React from 'react';
import { SwapiDataConsumer } from '../swapi-service-context';

const withSwapiData = (Wrapped, mapMethodsToProps) => {
    return (props) => {
        return (
            <SwapiDataConsumer>
                {
                    (swapiData) => {
                        const dataProps = mapMethodsToProps(swapiData);
                        return (
                            <Wrapped {...props} {...dataProps} />
                        )
                    }
                }
            </SwapiDataConsumer>
        )
    }
};

export default withSwapiData;