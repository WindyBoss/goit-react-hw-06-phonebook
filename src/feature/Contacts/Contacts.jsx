import { useState } from 'react';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';

import { useModal } from 'hooks/useModal';
import Modal from 'components/Modal/Modal';

import ContactFilter from './components/ContactFilter';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import ContactProfile from './components/ContactProfile';
import { MainHeaderContainer } from './Contacts.styled';

function Contacts() {
  const [chosenContact, setChosenContact] = useState(null);
  const [showModal, toggleModal] = useModal(false);

  const contacts = useSelector(state => state.items);
  const filter = useSelector(state => state.filter);

  function getContacts() {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  function chooseContact(contactId) {
    setChosenContact(contacts.filter(contact => contact.id === contactId));
  }

  return (
    <>
      <MainHeaderContainer>
        <h2>Phonebook</h2>
        <Button variant="contained" onClick={toggleModal}>
          Add Contact
        </Button>
      </MainHeaderContainer>
      <div>
        {showModal && (
          <Modal onClose={toggleModal}>
            <ContactForm onClick={toggleModal} />
          </Modal>
        )}

        <div style={{ maxWidth: '300px' }}>
          <ContactFilter />
          <ContactList onChoose={chooseContact} contacts={getContacts()} />
        </div>
        {chosenContact && <ContactProfile contact={chosenContact} />}
      </div>
    </>
  );
}

export default Contacts;
