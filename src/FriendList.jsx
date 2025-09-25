import '../src/css/friends-list.css';

import Friends from './json/friends.json';

function FriendList() {
	const friends = Friends;

	return (
		<ul className="friend-list">
			{friends.map((friend) => (
				<li className="item">
					<span className="status">{friend.isOnline}</span>
					<img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
					<p className="name">{friend.name}</p>
				</li>
			))}
		</ul>
	);
}

export default FriendList;
