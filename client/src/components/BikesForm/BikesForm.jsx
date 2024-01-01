import React, {useState} from 'react'
import './BikesForm.css'
import { useDispatch } from 'react-redux';
import { addBike, getStats } from '../../redux/operations';

const BikesForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    color: '',
    wheelSize: '',
    price: '',
    ID: '',
    description: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

    const handleSubmit = async (event) => {
      event.preventDefault();

      const bike = {...formData, status: 'available'}
      
      await dispatch(addBike(bike));
      await dispatch(getStats());

      handleClear();
    };

  const handleClear = () => {
    setFormData({
      name: '',
      type: '',
      color: '',
      wheelSize: '',
      price: '',
      ID: '',
      description: '',
    });
  };

  return (
    <div className='form-container'>
      <form className='form' onSubmit={handleSubmit}>
        <ul className='form-list'>
          <li className='form-list-item'>
            <input
              className='form-input'
              name='name'
              type='text'
              placeholder='Name'
              minLength={5}
              required
              value={formData.name}
              onChange={handleChange}
            />
          </li>
          <li className='form-list-item'>
            <input
              className='form-input'
              name='type'
              type='text'
              placeholder='Type'
              minLength={5}
              required
              value={formData.type}
              onChange={handleChange}
            />
          </li>
          <li className='form-list-item'>
            <input
              className='form-input'
              name='color'
              type='text'
              placeholder='Color'
              minLength={5}
              required
              value={formData.color}
              onChange={handleChange}
            />
          </li>
          <li className='form-list-item'>
            <input
              className='form-input'
              name='wheelSize'
              type='number'
              placeholder='Wheel size'
              required
              value={formData.wheelSize}
              onChange={handleChange}
            />
          </li>
          <li className='form-list-item'>
            <input
              className='form-input'
              name='price'
              type='number'
              placeholder='Price'
              required
              value={formData.price}
              onChange={handleChange}
            />
          </li>
          <li className='form-list-item'>
            <input
              className='form-input'
              name='ID'
              type='text'
              placeholder='ID (slug): ХХХХХХХХХХХХХ'
              minLength={5}
              required
              value={formData.ID}
              onChange={handleChange}
            />
          </li>
        </ul>

        <textarea
          className='form-textarea'
          name='description'
          rows={4}
          placeholder='Description'
          minLength={5}
          required
          value={formData.description}
          onChange={handleChange}
        />
        
        <ul className='buttons-list'>
          <li className='buttons-list-item'>
            <button className='button' type='submit'>SAVE</button>
          </li>
          <li className='buttons-list-item'>
            <button className='button' type='button' onClick={handleClear}>CLEAR</button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default BikesForm