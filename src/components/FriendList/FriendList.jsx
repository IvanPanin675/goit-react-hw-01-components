import PropTypes from "prop-types";
import friendStyle from './friendList.module.css';
import FriendItem from './FriendItem/FriendItem'

const FriendList = ({ friends }) => {

    const element =  friends.map(friend => { return (
        <FriendItem item={ friend } key={friend.id} />)
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
    
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired
    }))
}