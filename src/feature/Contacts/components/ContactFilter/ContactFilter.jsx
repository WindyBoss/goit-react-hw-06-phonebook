import { TextField } from '@mui/material';
import { FilterContainer } from './ContactFilter.styled';

import { setFilter } from 'redux/contacts/contactsSlice';
import { useDispatch } from 'react-redux';

export default function ContactFilter() {
  const dispatch = useDispatch();

  function handleChange(e) {
    dispatch(setFilter(e.target.value));
  }

  return (
    <FilterContainer>
      <h2>Find contacts by name</h2>
      <TextField type="text" onChange={handleChange} label="text name" />
    </FilterContainer>
  );
}
