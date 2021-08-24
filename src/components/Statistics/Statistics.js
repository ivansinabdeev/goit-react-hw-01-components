import PropTypes from 'prop-types';
import s from './Statistics.module.css'
// import s from './StatisticsItem.module.css'
import StatisticsItem from './StatisticsItem'

export default function Statistics({
  label,
  percentage }) {
    return (
      <section className={s.statistics}>
        <ul className={s.statList}>
          <li className={s.item}>
            <StatisticsItem
              label={label}
              percentage={percentage} />
          </li>
        </ul>
      </section>
    );
};

Statistics.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number
}