import React, { useEffect, useState } from 'react';
import ContactForm from './ContactForm';
import ContactTable from './ContactTable';
import axios from 'axios';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const response = await axios.get('http://localhost:5000/contacts');
    setContacts(response.data);
  };

  const addContact = async (newContact) => {
    await axios.post('http://localhost:5000/contacts', newContact);
    fetchContacts();
  };

  const deleteContact = async (id) => {
    await axios.delete(`http://localhost:5000/contacts/${id}`);
    fetchContacts();
  };

  useEffect(() => { fetchContacts(); }, []);

  return (
    <div>
      <ContactForm onSave={addContact} />
      <ContactTable contacts={contacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;
