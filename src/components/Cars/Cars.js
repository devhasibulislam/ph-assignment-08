import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import Sidebar from '../Sidebar/Sidebar';
import './Cars.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableTennis, faGauge } from '@fortawesome/free-solid-svg-icons';
import { type } from '@testing-library/user-event/dist/type';

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

    // clear stack
    const clearStack = car => {
        console.log(car);
        setCarInfo([]);
    }

    // generate random number
    const randomNumber = number => {
        const num = Math.round(Math.random() * (number - 1));
        // console.log(typeof num);
        if (num === undefined) {
            randomNumber(number);
        } else {
            return num;
        }
    }

    // choose lucky one
    const chooseLuckyOne = car => {
        const randNum = randomNumber(car.length);
        // console.log(randNum);
        const luckyCar = carInfo.find(luckyOne => luckyOne.id === car[randNum].id);
        setCarInfo([luckyCar]);
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
                <button className='sidebar-btn first-child' onClick={() => chooseLuckyOne(carInfo)}>Choose lucky one <FontAwesomeIcon icon={faTableTennis} /></button>
                <button className='sidebar-btn' onClick={()=> clearStack(carInfo)}>Clear the stack <FontAwesomeIcon icon={faGauge} /></button>
            </div>
        </div>
    );
};

export default Cars;