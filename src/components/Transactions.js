import PropTypes from 'prop-types';

export default function Transactions({
    type,
    amount,
    currency }) {
    return (

            <table className="transaction-history">
                <tbody>
                    <tr>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
                </tbody>
                
            </table>
        
    );
};

Transactions.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
}