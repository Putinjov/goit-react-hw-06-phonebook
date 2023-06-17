import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import { getContacts, getFilter } from 'redux/selectors';

const ContactList = () => {
  
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

   const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <ul className='contacts-list'>
      {
        filteredContacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))
      }
      {filteredContacts.length === 0 && (<li key={'Not found'}>Not found</li>)}
    </ul>
  );
};

export default ContactList;

