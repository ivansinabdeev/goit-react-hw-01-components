import Statistic from './Statistic'
import s from './Statistics.module.css'

 function Statistics({ stats, title }) {
     return (
        <div className={s.statistics}>
            <ul className={s.list}>
                {stats.map(stat =>
                    <li className={s.item} key={stat.id}>
                        <Statistic
                            label={stat.label}
                            percentage={stat.percentage}
                        />
                    </li>)}
            </ul>
        </div>
    );
};
 
export default Statistics;