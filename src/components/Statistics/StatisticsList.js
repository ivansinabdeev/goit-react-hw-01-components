import Statistics from './Statistics';
import s from './Statistics.module.css'

 function StatisticsList({ items }) {
     return (
        <div className={s.statistics}>
            <ul className={s.list}>
                {items.map(item =>
                    <li className={s.item} key={item.id}>
                        <Statistics
                            label={item.label}
                            percentage={item.percentage}
                        />
                    </li>)}
            </ul>
        </div>
    );
};
 
export default StatisticsList;