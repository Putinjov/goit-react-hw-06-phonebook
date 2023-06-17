import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { add } from 'redux/sliceContact';
import { getContacts } from 'redux/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const contacts = useSelector(getContacts);

  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter a name and phone number.');
      return;
    }
    if (
      contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      alert(`${name} is already in contacts.`);
    } else {
      const contact = {
        name,
        number
      };
      dispatch(add(contact));
      setName('');
      setNumber('');
    }
  };

  return (
    <form className='contacts-form' onSubmit={handleSubmit}>
      <input
        className='contacts-input'
        type="text"
        name="name"
        required
        value={name}
        onChange={handleChange}
      />
      <input
        className='contacts-input'
        type="tel"
        name="number"
        required
        value={number}
        onChange={handleChange}
      />
      <Button variant="contained" color="success" type="submit">
        Add Contact
      </Button>
    </form>
  );
};

export default ContactForm;
