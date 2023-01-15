import PropTypes from 'prop-types';
import friendItem from './friendItem.module.css';

const FriendItem = ({ item }) => {
  return (
    <li className={friendItem.friendItem}>
      <span
        className={
          item.isOnline
            ? `${friendItem.status} ${friendItem.online}`
            : `${friendItem.status}`
        }
      ></span>
      <img
        className={friendItem.avatar}
        src={item.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{item.name}</p>
    </li>
  );
};

export default FriendItem;

FriendItem.defaultProps = {
  item: {},
};

FriendItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
};
