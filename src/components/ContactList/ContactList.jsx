import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className='contacts-list'>
      {filteredContacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact} 
        />
      ))}
    </ul>
  );
};

export default ContactList;
