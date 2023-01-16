import PropTypes from 'prop-types';
import friendStyle from './friendList.module.css';
import { FriendItem } from './FriendItem/FriendItem';

export const FriendList = ({ friends }) => {
  const element = friends.map(({ id, avatar, name, isOnline }) => {
    return (
      <FriendItem key={id} status={isOnline} avatar={avatar} name={name} />
    );
  });

  return <ul className={friendStyle.friendList}>{element}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
