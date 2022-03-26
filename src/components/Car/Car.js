import React from 'react';
import './Car.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Car = ({ car, handleAddingIntoCart }) => {
    const { horsepower, img_url, make, name, price, year, model } = car;
    return (
        <div className='grid-item'>
            <div className='car-info'>
                <img src={img_url} alt="car_images" />
                <div className="car-desc">
                    <h3><b>Name:</b> {name}</h3>
                    <p><b>Model: </b>{model}</p>
                    <p><b>Make:</b> {make}</p>
                    <p><b>Horsepower:</b> {horsepower}</p>
                    <p><b>Price:</b> ${price}</p>
                    <p><b>Year:</b> {year}</p>
                </div>
            </div>
            <hr />
            <button className='add-cart' onClick={() => handleAddingIntoCart(car)}>Add to cart <FontAwesomeIcon icon={faCartPlus} /></button>
        </div>
    );
};

export default Car;
