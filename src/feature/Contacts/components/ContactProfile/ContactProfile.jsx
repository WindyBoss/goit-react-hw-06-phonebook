import PersonIcon from '@mui/icons-material/Person';
import PropTypes from 'prop-types';
import IconBtn from 'components/IconBtn';
import {
  InfoContainer,
  Info,
  ContactProfileContainer,
} from './ContactProfile.styled';

const ContactProfile = ({ contact }) => {
  return (
    <ContactProfileContainer>
      <IconBtn
        addBtnStyle={addBtnStyle}
        icon={<PersonIcon fontSize="large" />}
        avatarAddStyle={avatarAddStyle}
      />
      <InfoContainer>
        <p>
          Name: <Info>{contact[0].name}</Info>
        </p>
        <p>
          Phone: <Info>{contact[0].number}</Info>
        </p>
      </InfoContainer>
    </ContactProfileContainer>
  );
};

export default ContactProfile;


const avatarAddStyle = {
  width: 56,
  height: 56,
};

const addBtnStyle = {
  marginRight: '20px',
};

ContactProfile.propTypes = {
  contact: PropTypes.array.isRequired,
};

