import Friends from './Friends';
import s from './Friends.module.css'

export default function FriendListItem({ friends }) {
    return (
        <div className={s.section}>
            <ul className={s.friendList}>
                {friends.map(friend =>
                            <Friends
                            avatar={friend.avatar}
                            name={friend.name}
                            isOnline={friend.isOnline}
                        />     
                    )}
            </ul>
        </div>
    );
}