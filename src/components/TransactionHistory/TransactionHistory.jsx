import PropTypes from "prop-types";
import styleHistory from './transactionHistory.module.css';

const TransactionHistory = ({ items }) => {

    const elements = items.map(item => {
        return (
                <tr key={item.id}>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
                </tr>
            )
    });

return(<table className={styleHistory.transactionHistory}>
    <thead>
        <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
        </tr>
    </thead>
    <tbody>
        {elements}
    </tbody>
</table>)
}


export default TransactionHistory;

TransactionHistory.defaultProps = {
    item: [],
}

TransactionHistory.propTypes = {
    
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
}