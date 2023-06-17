import React from 'react';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { remove } from 'redux/sliceContact';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(remove(contact.id));
  };

  return (
    <li key={contact.id} className='contacts-item'>
      {contact.name}: {contact.number}
      <Button
        size='small'
        variant="outlined"
        startIcon={<DeleteIcon />}
        color="error"
        onClick={handleDelete}
      >
        Delete
      </Button>
    </li>
  );
};

export default ContactItem;
