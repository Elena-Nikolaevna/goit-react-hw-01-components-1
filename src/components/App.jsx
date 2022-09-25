import { Profile } from './Profile/Profile';
import user from './Profile/user';
import data from './Statistics/data.json';
import { Statistics } from './Statistics/statistics';

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
    </div>
  );
};
