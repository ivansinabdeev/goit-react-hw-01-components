
import s from './StatisticsItem.module.css'

function StatisticsItem({label, percentage }) {
    return (
        <div className={s.discripsions}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
        </div>
    );
};

export default StatisticsItem;

// реакт-фрагмент <>   </>  вместо дива