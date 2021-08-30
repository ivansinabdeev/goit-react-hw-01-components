import Statistic from './Statistic'
import s from './Statistics.module.css'

function Statistics({ stats, title }) {
    const isTitle = title;
     return (
         <div className={s.statistics}>
           {isTitle && <h2 className={s.title}>{title}</h2> }  
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