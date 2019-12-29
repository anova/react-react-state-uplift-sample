import React from 'react';

function BoilingVerdict(props) {
    if(props.celsius >= 100) {
        return <p>Su kaynar. Sıcaklık: {props.celsius} derece.</p>;
    }
    return <p>Su kaynamaz. Sıcaklık: {props.celsius} derece.</p>;
}

export { BoilingVerdict };