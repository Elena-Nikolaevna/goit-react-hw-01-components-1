import css from './friends.module.css';
import { Friend } from './Friend'

export const FriendsList = ({ friends }) => {
  return <ul className={css.friendList}>
    {friends.map((friend, idx) => <Friend key={idx} friend={friend} />)}
  </ul>
}