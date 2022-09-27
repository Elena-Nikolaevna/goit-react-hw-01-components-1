import PropTypes from 'prop-types';
import css from './statistics.module.css';

export const Statistics = ({ stat, title }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stat.map(stat => (
          <li className={css.item} key={stat.id}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
