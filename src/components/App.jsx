import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { ContactForm } from '../components/ContactForm/ContactForm';
import css from './App.module.css';
import { useSelector } from 'react-redux';

export const App = () => {
  const filtered = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);

  const filterContact = e => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered.toLowerCase())
    );
    return filteredContacts;
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList listContact={filterContact()} />
    </div>
  );
};


// const CONTATCTS = 'contatcts';
// const initialContacts = [
//   { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
//   { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
//   { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
//   { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
// ];