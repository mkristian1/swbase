import React, { Component } from 'react';


const withData = (View, itemData) => {
    return class extends Component {
        state = {
            data: [],
            loading: true,
            error: false
        };

        onErrors = (err) => {
            this.setState({
                error: true
            })
        };

        componentDidMount() {

            itemData().then(data => {
                this.setState({
                    data,
                    loading: false
                });
            }, this.onErrors);
        }

        render() {

            const { data, loading, error } = this.state;

            return <View {...this.props} data={data}
                loading={loading} error={error} />;

        }
    }
}

export default withData;