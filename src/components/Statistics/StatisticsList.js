
import Statistics from './Statistics';

export default function StatisticsList({ items }) {
    return (
    <ul>
        {items.map(item =>
            <li key={item.id}>
                <Statistics
                    label={item.label}
                    percentage={item.percentage}
                />
            </li>)}
    </ul>
    );
};
 
