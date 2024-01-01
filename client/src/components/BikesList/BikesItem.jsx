import React, {useState} from 'react'
import './BikesList.css';
import ArrowIcon from './ArrowIcon';
import CloseIcon from './CloseIcon';
import { useDispatch } from 'react-redux';
import { deleteBike, getStats, updateBike } from '../../redux/operations';

const BikesItem = ({ bike }) => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(bike.status);
  const { name, type, color, wheelSize, price, ID, description, status } = bike;

  const handleChangeSelect = async (e) => {
    setSelectedOption(e.target.value);
    await dispatch(
      updateBike({
        id: bike?._id,
        bike: {
          name, type, color, wheelSize, price, ID, description,
          status: e.target.value
        }
      })
    );
    await dispatch(getStats());
  };

  const handleDeleteBike = async () => {
    await dispatch(deleteBike(bike._id));
    await dispatch(getStats());
  };
  
  return (
    <li className={`bikes-list-item ${status === 'available' ? 'border-green' : status === 'unavailable' ? 'border-red' : 'border-orange'}`} >
      <button type='button' className='delete-button' onClick={handleDeleteBike}>
        <CloseIcon />
      </button>

      <div className='block-item'>
        <span className='bike-name'>{name.toUpperCase()}</span> - {type.toUpperCase()} ({color.toUpperCase()})
      </div>

      <div className='block-item'>
        <span className='bike-id'>ID: {ID.toUpperCase()}</span>
      </div>

      <div className='status-price-box'>
        <div className='status-box'>
          <label>STATUS:</label>
          <select className='status-select' value={selectedOption} onChange={handleChangeSelect}>
            <option value="available">Available</option>
            <option value="busy">Busy</option>
            <option value="unavailable">Unavailable</option>
          </select>
          <ArrowIcon />
        </div>
        <div>
          <span className={`bike-price ${status === 'unavailable' && 'bike-price-unavailable'}`}>{price} UAH/hr.</span>
        </div>
      </div>
    </li>
  )
}

export default BikesItem