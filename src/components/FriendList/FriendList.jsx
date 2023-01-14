import PropTypes from "prop-types";
import friendStyle from './friendList.module.css';

const FriendList = ({ friends }) => {

    const element =  friends.map(friend => { return (
        <li className={friendStyle.friendItem} key={friend.id}>
            <span className={friend.isOnline ? `${friendStyle.status} ${friendStyle.online}` : `${friendStyle.status}`} ></span>
            <img className={friendStyle.avatar} src={friend.avatar} alt="User avatar" width="48" />
            <p className="name">{friend.name}</p>
        </li>)
    })

    return <ul className={friendStyle.friendList}>
        {element}
    </ul>
}


export default FriendList;

FriendList.defaultProps = {
    friends: [],
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.objectOf = { avatar: PropTypes.string, name: PropTypes.string, isOnline: PropTypes.bool, id: PropTypes.number}),
}