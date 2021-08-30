import FriendListItem from './FriendListItem';
import s from './Friends.module.css'

export default function Friends({ friends }) {
    return (
        <div className={s.section}>
            <ul className={s.friendList}>
                {friends.map(friend =>
                            <FriendListItem
                            avatar={friend.avatar}
                            name={friend.name}
                            isOnline={friend.isOnline}
                        />     
                    )}
            </ul>
        </div>
    );
}