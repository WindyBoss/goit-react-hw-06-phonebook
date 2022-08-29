import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import { Divider, List, ListItem } from '@mui/material';
import PropTypes, { object } from 'prop-types';

import { deleteContact } from 'redux/contacts/contactsSlice';
import { useDispatch } from 'react-redux';

import {
  InfoContainer,
  Info,
  stylingList,
  stylingListItem,
  stylingDivider,
} from './ContactList.styled';
import IconBtn from 'components/IconBtn';

export default function ContactList({ contacts, onChoose }) {
  const dispatch = useDispatch();
  return (
    <List sx={stylingList}>
      <h2>Contacts</h2>
      {contacts.map(({ name, number, id }) => (
        <div key={id}>
          <ListItem sx={stylingListItem}>
            <IconBtn onClick={onChoose} icon={<PersonIcon />} id={id} />
            <InfoContainer>
              <p>
                Name: <Info>{name}</Info>
              </p>
              <p>
                Phone: <Info>{number}</Info>
              </p>
            </InfoContainer>
            <IconBtn
              onClick={() => dispatch(deleteContact(id))}
              icon={<DeleteIcon />}
              id={id}
            />
          </ListItem>
          <Divider sx={stylingDivider} variant="inset" component="li" />
        </div>
      ))}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(object).isRequired,
  onChoose: PropTypes.func.isRequired,
};
