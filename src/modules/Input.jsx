import React, { useState } from 'react'

const Input = () => {
    const [radians, setRadians] = useState(0);
    const [degrees, setDegrees] = useState(0);

    function toDegrees(radians) {
        return radians * 57.296;
    }

    function toRadians(degrees) {
        return degrees * 0.01745;
    }

    return (
        <div>
            <h3>Degrees : </h3>
            <input
                onChange={e => {

                    e.target.value < 0 ? e.target.value = 0 : setDegrees(e.target.value);
                    setRadians(toRadians(e.target.value));
                }}
                type="number"
                value={degrees}
            />
            <h3>Radians : </h3>
            <input
                onChange={e => {
                    e.target.value < 0 ? e.target.value = 0 : setRadians(e.target.value);
                    setDegrees(toDegrees(e.target.value));
                }}
                type="number"
                value={radians}
            />
        </div>
    );
};

export default Input;