import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import './Cars.css';

const Cars = () => {
    const [cars, setCars] = useState([]);

    // calling api
    useEffect(() => {
        fetch('data.json')
            .then(request => request.json())
            .then(response => setCars(response))
    }, []);

    // return segment from HTML to react conversion
    return (
        <div className='box-container'>
            <div className='grid-container'>
                {
                    cars.map(car => <Car
                        key={car.id}
                        car={car}
                    ></Car>)
                    // cars.map(car => console.log(car))
                }
            </div>
            <div className="side-bar">
                <h4>This is sidebar</h4>
            </div>
        </div>
    );
};

export default Cars;