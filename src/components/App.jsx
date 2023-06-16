import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import ContactForm from '../components/ContactForm/ContactForm';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import '../index.css';

export const App = () => {
  const filtered = useSelector(state => state.filter);
  const contacts = useSelector(state => loadContactsFromLocalStorage());

  const filterContact = e => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered.toLowerCase())
    );
    return filteredContacts;
  };

  useEffect(() => {
    saveContactsToLocalStorage(contacts);
  }, [contacts]);

  return (
    <div className='contacts'>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList listContact={filterContact()} />
    </div>
  );
};

const saveContactsToLocalStorage = (contacts) => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
};

const loadContactsFromLocalStorage = () => {
  const savedContacts = localStorage.getItem('contacts');
  return savedContacts ? JSON.parse(savedContacts) : [];
};



// const CONTATCTS = 'contatcts';
// const initialContacts = [
//   { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
//   { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
//   { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
//   { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
// ];