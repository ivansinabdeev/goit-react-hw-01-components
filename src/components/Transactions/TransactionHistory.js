import Transactions from './Transactions';
import s from './Transactions.module.css'


export default function TransactionHistory({ items }) {
    return (
        <div className={s.section}>
            <table className={s.table}>
                <thead className={s.thead}>
                        <tr>
                            <th className={s.title}>Type</th>
                            <th className={s.title}>Amount</th>
                            <th className={s.title}>Currency</th>
                        </tr>
                </thead>
                <tbody className={s.tbody}>
                    {items.map(item =>
                        <tr key={item.id}>
                
                            <td className={s.data}><Transactions
                                type={item.type}/></td>
                            
                            <td className={s.data}><Transactions
                                amount={item.amount}/></td>
                                
                            <td className={s.data}><Transactions
                                currency={item.currency}/></td>
                    
                    </tr>)}
                </tbody>    
            </table>
        </div>    
    );
};