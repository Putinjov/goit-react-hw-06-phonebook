import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { query } from 'redux/sliceFilter';
import { getFilter } from 'redux/selectors';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className='filter'>
      <label htmlFor="filter">Filter contacts: </label>
      <input
        className='filter-input'
        type="text"
        id="filter"
        value={filter}
        onChange={(evt) => {
          dispatch(query(evt.currentTarget.value));
        }}
        placeholder="Find contacts by name"
      />
    </div>
  );
};

export default Filter;
