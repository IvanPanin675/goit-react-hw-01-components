import PropTypes from "prop-types";
import style from './profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {

    return <div className={style.profile}>
                <div className={style.description}>
                    <img
                src={avatar}
                alt={username}
                className={style.avatar}
                    />
                    <p className="name">{ username }</p>
                    <p className="tag">{tag}</p>
                    {location && <p className="location">{location}</p>}
                </div>

                {stats && <ul className={style.stats}>
                    {stats.followers && <li>
                        <span className="label">Followers</span>
                        <span className="quantity">{stats.followers}</span>
                    </li>}
                    {stats.views && <li>
                        <span className="label">Views</span>
                        <span className="quantity">{stats.views}</span>
                    </li>}
                    {stats.likes && <li>
                        <span className="label">Likes</span>
                        <span className="quantity">{stats.likes}</span>
                    </li>}
                </ul>}
            </div>
}

// ={ followers, views, likes }

export default Profile;

Profile.defaultProps = {
    username: "User Name",
    tag: "goooogle@gmail.com",
    location: "",
    avatar: "https://cdn.pixabay.com/photo/2023/01/09/22/05/gorilla-7708352_960_720.jpg", 
    stats: {},
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number),
}