import React from 'react';
import { toCelsius, toFahrenheit, tryConvert } from '../conversions/common';
import { BoilingVerdict } from './BoilingVerdict';
import { TemperatureInput } from './TemperatureInput';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = { temperature: 0, scale: 'c' };
    }

    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <TemperatureInput 
                    scale="c"
                    temperature={ celsius }
                    onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput
                    scale="f"
                    temperature={ fahrenheit }
                    onTemperatureChange={this.handleFahrenheitChange} />
                <BoilingVerdict celsius={celsius} />
            </div>
        );
    }
}

export { Calculator };