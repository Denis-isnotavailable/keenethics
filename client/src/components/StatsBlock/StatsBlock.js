import React from 'react'
import { useSelector } from 'react-redux';
import './StatsBlock.css';


const StatsBlock = () => {    
    const stats = useSelector(state => state.bikesReducer.stats);    

    return (
        <div className='stats-box'>
            <h2 className='stats-title'>STATISTICS</h2>
            <ul className='stats-list'>
                <li className='stats-list-item'>
                    Total Bikes: <span className='stats-mean'>{stats.totalBikes}</span>
                </li>
                <li className='stats-list-item'>
                    Available Bikes: <span className='stats-mean'>{stats.available}</span>
                </li>
                <li className='stats-list-item'>
                    Booked Bikes: <span className='stats-mean'>{stats.busy}</span>
                </li>
                <li className='stats-list-item'>
                    Average bike cost: <span className='stats-mean'>{stats.averagePrice}</span> UAH/hr.
                </li>
            </ul>
        </div>
    );
}

export default StatsBlock