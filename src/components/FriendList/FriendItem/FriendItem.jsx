import PropTypes from 'prop-types';
import friendItem from './friendItem.module.css';

export const FriendItem = ({ status, avatar, name }) => {
  return (
    <li className={friendItem.friendItem}>
      <span
        className={
          status
            ? `${friendItem.status} ${friendItem.online}`
            : `${friendItem.status}`
        }
      ></span>
      <img
        className={friendItem.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};
