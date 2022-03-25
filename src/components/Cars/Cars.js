import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import './Cars.css';

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [carInfo, setCarInfo] = useState([]);

    // calling api
    useEffect(() => {
        fetch('data.json')
            .then(request => request.json())
            .then(response => setCars(response))
    }, []);

    // function for handle button event
    const handleAddingIntoCart = car => {
        console.log(car);
        setCarInfo(car);
    };

    // return segment from HTML to react conversion
    return (
        <div className='box-container'>
            <div className='grid-container'>
                {
                    cars.map(car => <Car
                        key={car.id}
                        car={car}
                        handleAddingIntoCart={handleAddingIntoCart}
                    ></Car>)
                }
            </div>
            <div className="side-bar">
                <div className='select-scheme'>
                    <img src={carInfo.img_url} alt="" />
                    <p>{carInfo.name}</p>
                </div>
            </div>
        </div>
    );
};

export default Cars;