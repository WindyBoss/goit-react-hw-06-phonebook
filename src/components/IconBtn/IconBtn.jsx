
import { IconButton, Avatar } from '@mui/material';
import PropTypes from 'prop-types';

const IconBtn = ({onClick, icon, id, avatarAddStyle, addBtnStyle}) => {
    return (
        <IconButton sx={addBtnStyle} onClick={onClick ? () => onClick(id) : null} edge="end" aria-label="delete">
            <Avatar sx={avatarAddStyle}>
                {icon}
            </Avatar>
      </IconButton>
    )
};


IconBtn.propTypes = {
    onClick: PropTypes.func,
    icon: PropTypes.any,
    avatarAddStyle: PropTypes.object,
    addBtnStyle: PropTypes.object,
    id: PropTypes.string,
  };
  export default IconBtn;
