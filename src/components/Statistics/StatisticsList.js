

import StatisticsItem from './StatisticsItem';

 function StatisticsList({ items }) {
    return (
    <ul>
        {items.map(item =>
            <li key={item.id}>
                <StatisticsItem
                    label={item.label}
                    percentage={item.percentage}
                />
            </li>)}
    </ul>
    );
};
 
export default StatisticsList;