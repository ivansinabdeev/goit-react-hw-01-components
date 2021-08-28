import PropTypes from 'prop-types';
import s from './Statistics.module.css'


export default function Statistic({
  label,
  percentage }) {
    return (
      <>
        <span className={s.label}>{label}</span>
        <span className={s.percentage}>{percentage}%</span>
      </>
    );
};

Statistic.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number
}