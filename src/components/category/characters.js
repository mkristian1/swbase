import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import MainContent from '../main-content';
import { CharacterDetails } from '../sw-components';
import { CharacterList } from '../sw-components/item-lists';

export default class Characters extends Component {
    state = {
        selectedId: 1,
    };

    getSelectedItem = (id) => {
        this.setState({
            selectedId: id
        });
    };

    render() {

        return (
            <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Test</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <MainContent
                left={<CharacterList getSelectedItem={this.getSelectedItem} />}
                right={<CharacterDetails itemId={this.state.selectedId} />}>
            </MainContent>
            </>
        );
    };
};