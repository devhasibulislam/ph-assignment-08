import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ carInfo, deleteItem }) => {
    return (
        <div>
            {
                carInfo.map(car => <div key={car.id} className='sidebar-desc'>
                    <img src={car.img_url} alt="" />
                    <p>{car.name}</p>
                    <p className='trash' onClick={() => deleteItem(car)}><FontAwesomeIcon icon={faTrash} /></p>
                </div>)
            }
        </div>
    );
};

export default Sidebar;
