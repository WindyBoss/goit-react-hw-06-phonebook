import { createSlice } from '@reduxjs/toolkit';
import { contactList } from 'data/contactList';
import { nanoid } from 'nanoid';
import toast from 'react-hot-toast';

import { remadeNumber } from 'services/remadeNumber';

const initialState = {
    items: [...contactList],
    filter: '',
};

function prepareAddContact(contact) {
    toast.success('Contact is added');
    contact.id = nanoid();
    contact.number = remadeNumber(contact.number);
    return contact;
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact(state, { payload }) {
            if (state.items.find(contact => contact.name === payload.name)) {
                toast.error(`${payload.name} is already in the contact list`);
                return state;
            }

            if (state.items.find(contact => contact.number === payload.number)) {
                toast.error(`${payload.number} is already in the contact list`);
                return state;
            }

            state.items.push(prepareAddContact(payload));
        },
        deleteContact(state, { payload }) {
            state.items = state.items.filter(item => item.id !== payload);
        },
        setFilter(state, { payload }) {
            state.filter = payload;
        },
    },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;