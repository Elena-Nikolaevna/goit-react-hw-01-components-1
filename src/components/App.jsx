import { Profile } from './Profile/Profile';
import user from './Profile/user';


export const App = () => {
  return (
    <div
    /*   style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }} */
    >
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        likes={user.stats.likes}
        views={user.stats.views}
        followers={user.stats.followers}
        
      />
    </div>
  );
};
