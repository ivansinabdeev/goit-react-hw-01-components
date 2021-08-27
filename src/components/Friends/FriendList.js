import Friends from './Friends';
import s from './Friends.module.css'

export default function FriendList({ friends }) {
    return (
        <div className={s.section}>
            <ul className={s.friendList}>
                {friends.map(friend =>
                    <li className={s.item} key={friend.id}>
                        <Friends
                            avatar={friend.avatar}
                            name={friend.name}
                            isOnline={friend.isOnline}
                        />     
                    </li>)}
            </ul>
        </div>
    );
}