import { Profile } from './Profile/Profile';
import user from './Profile/user';
import data from './Statistics/data.json';
import { Statistics } from './Statistics/statistics';
//import { Friend } from './FriendList/Friend';
import friends from './FriendList/friends.json';
import { FriendsList } from './FriendList/FriendsList';
//import { FriendsList } from './FriendList/FriendBox';
//import friends from './FriendList/friends.json';

export const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        likes={user.stats.likes}
        views={user.stats.views}
        followers={user.stats.followers}
      />
      <Statistics stat={data} />
      <FriendsList friends={friends} />
      {/* < Friend friend={friends[1]} /> */}
      {/* <FriendsLis t friends={friends} /> */}
    </div>
  );
};
