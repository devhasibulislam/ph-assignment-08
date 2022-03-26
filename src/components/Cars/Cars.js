import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import Sidebar from '../Sidebar/Sidebar';
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
        // console.log(car);
        // console.log(carInfo);
        const matchId = carInfo.find(carId => carId.id === car.id);
        if (!matchId) {
            if (!(carInfo.length > 3)) {
                setCarInfo([...carInfo, car]);
            } else {
                alert('Can\'t add more than 4 items!!');
            }
        } else {
            alert('Already added this item!');
        }
        // console.log(matchId);
    };

    // handle delete item
    const deleteItem = car => {
        // console.log(item);
        // carInfo.splice(item, 1);
        // console.log('deletion successful!');
        // console.log(car);
        const deletedCar = carInfo.filter(delCar => delCar.id !== car.id);
        setCarInfo(deletedCar);
    }

    // console.log(carInfo);
    // console.log(delItem);
    
    // console.log(carInfo);
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
                <h2>Total items: 0{carInfo.length}</h2>
                <div className='select-scheme'>
                    {/* {carInfo.map(car => <img src={car.img_url} alt="" />)} */}
                    {/* {carInfo.map(car => <p><li>{car.name}</li></p>)} */}
                    {/* {
                        carInfo.map(car => <Sidebar
                            key={car.id}
                            car={car}
                        ></Sidebar>)
                    } */}
                    <Sidebar
                        carInfo={carInfo}
                        deleteItem={deleteItem}
                    ></Sidebar>
                </div>
            </div>
        </div>
    );
};

export default Cars;