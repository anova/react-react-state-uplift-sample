import React from 'react';

const scaleNames = {
    c: 'Santigrat',
    f: 'Fahrenayt'
};

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>{scaleNames[scale]} cinsinden sıcaklık girin:</legend>
                <input type="number" value={temperature}
                onChange={this.handleChange} />
            </fieldset>
        );
    }
}

export { TemperatureInput };