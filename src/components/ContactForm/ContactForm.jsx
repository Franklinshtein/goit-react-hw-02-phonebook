import React, { useState } from 'react';
import styles from '../ContactForm/ContactForm.module.css';

const ContactForm = ({ addContact, contacts, className }) => {
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
    <form className={styles.input_group} onSubmit={handleSubmit}>
      <input
        className={styles.input_form}
        type="text"
        name="name"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className={styles.input_form}
        type="tel"
        name="number"
        placeholder="Enter phone number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        required
      />
      <button className={styles.add_contact} type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
