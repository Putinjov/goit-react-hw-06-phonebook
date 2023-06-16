import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { add } from 'redux/sliceContact';

export const ContactForm = ({ addContact }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    e.preventDefault();
    if (name === '' || number === '') {
      alert('Please enter a name and phone number.');
      return;
    }
    const contact = {
      id: nanoid(),
      name,
      number
    };
    addContact(contact);
    setName('');
    setNumber('');
  };

  const contacts = useSelector(state => state.contacts);
  return (
    <form className='contacts-form'
      onSubmit={e => {
        e.preventDefault();
        if (
          contacts.some(
            value => value.name.toLocaleLowerCase() === name.toLocaleLowerCase()
          )
        ) {
          alert(`${name} is alredy in contacts`);
        } else {
          dispatch(add({ name, number }));
        };
      }}>
      <input className='contacts-input'
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChange}
      />
      <input className='contacts-input'
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleChange}
      />
      <Button variant="contained" color="success" type="submit">Add Contact</Button>
    </form>
  );
};