
import Transactions from './Transactions';

export default function TransactionHistory({ items }) {
    return (
        <table>
            <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
            </thead>
            <tbody>
                {items.map(item =>
                    <tr key={item.id}>
            
                        <td><Transactions
                            type={item.type}/></td>
                        
                        <td><Transactions
                            amount={item.amount}/></td>
                            
                        <td><Transactions
                            currency={item.currency}/></td>
                
                </tr>)}
            </tbody>    
        </table>    
    );
};