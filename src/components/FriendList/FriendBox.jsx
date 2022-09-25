//import css from './friends.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      <span className="status">{isOnline}</span>
      <img className={name} src={avatar} alt="User avatar" width="48" />
      <p className="name">{name} </p>
    </li>
  );
};

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
