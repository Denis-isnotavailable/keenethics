import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBikes, getStats } from '../../redux/operations';
import BikesItem from './BikesItem';
import './BikesList.css';

const BikesList = () => {
  const dispatch = useDispatch();
  const bikes = useSelector(state => state.bikesReducer.bikes);

  useEffect(() => {
    dispatch(getBikes());
    dispatch(getStats());
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div>
      <ul className='bikes-list'>
        {bikes?.map(bike => <BikesItem key={bike._id} bike={bike} />)}
      </ul>
    </div>
  )
}

export default BikesList