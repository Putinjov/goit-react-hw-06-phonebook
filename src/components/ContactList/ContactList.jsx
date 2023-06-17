import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import { getContacts, getFilter } from 'redux/selectors';

const ContactList = () => {
  
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = filter
    ? contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    : contacts;

  return (
    <ul className='contacts-list'>
      {filter && (
        filteredContacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))
      )}
      {!filter && (
        contacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))
      )}
      {filteredContacts.length === 0 && (<li>Not found</li>)}
    </ul>
  );
};

export default ContactList;

