import PropTypes from 'prop-types';
import style from './profile.module.css';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} alt={username} className={style.avatar} />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        {location && <p className="location">{location}</p>}
      </div>

      <ul className={style.stats}>
        {followers && (
          <li>
            <span className="label">Followers</span>
            <span className="quantity">{followers}</span>
          </li>
        )}
        {views && (
          <li>
            <span className="label">Views</span>
            <span className="quantity">{views}</span>
          </li>
        )}
        {likes && (
          <li>
            <span className="label">Likes</span>
            <span className="quantity">{likes}</span>
          </li>
        )}
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  username: 'User Name',
  tag: 'goooogle@gmail.com',
  location: '',
  avatar:
    'https://cdn.pixabay.com/photo/2023/01/09/22/05/gorilla-7708352_960_720.jpg',
  stats: {},
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
