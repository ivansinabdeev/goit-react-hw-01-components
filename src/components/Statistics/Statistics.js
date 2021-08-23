import PropTypes from 'prop-types';
import s from './Statistics.module.css'

export default function Statistics({
  label,
  percentage }) {
    return (
      <section className={s.statistics}>
        <ul className={s.statList}>
          <li className={s.item}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}</span>
          </li>
        </ul>
      </section>
    );
};

Statistics.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number
}