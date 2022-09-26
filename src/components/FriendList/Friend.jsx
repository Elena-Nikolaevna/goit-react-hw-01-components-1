import css from './friends.module.css';
import PropTypes from 'prop-types';
export const Friend = ({ friend: { isOnline, avatar, name } }) => {
  return (
    <li className={css.item}>
      <span
        className={css.status}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name} </p>
    </li>
  );
};

/* export const Friend = ({ friend: { isOnline, avatar, name} }) => {
  return (
    <li className="item">
      <span className="status"> {isOnline} </span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name} </p>
    </li>
  );
}; */

Friend.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
