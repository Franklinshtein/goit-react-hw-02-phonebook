import React, { useState } from 'react';

const ContactForm = ({ addContact, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the contact name already exists
    const existingContact = contacts.find((contact) => contact.name === name);
    if (existingContact) {
      alert(`${name} is already in the phonebook.`);
      return;
    }

    const newContact = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      number,
    };

    addContact(newContact);
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="tel"
        name="number"
        placeholder="Enter phone number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
