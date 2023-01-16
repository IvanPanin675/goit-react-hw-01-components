import PropTypes from 'prop-types';
import styleStat from './statistics.module.css';

export const Statistics = ({ title, stats }) => {
  const elements = stats.map(({ id, label, percentage }) => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return (
      <li
        key={id}
        style={{ backgroundColor: `#${randomColor}` }}
        className={label}
      >
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
      </li>
    );
  });

  return (
    <section className={styleStat.statistics}>
      {title && <h2 className="title">{title}</h2>}

      <ul className={styleStat.statlist}>{elements}</ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};