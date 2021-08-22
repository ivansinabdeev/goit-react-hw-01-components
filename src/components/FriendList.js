import Friends from './Friends';

export default function FriendList({ friends }) {
    return (
        <ul>
            {friends.map(friend =>
                <li key={friend.id}>
                    <Friends
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />     
                </li>)}
        </ul>
    );
}