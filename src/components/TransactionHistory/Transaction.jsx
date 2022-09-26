
import css from './Transaction.module.css'
import PropTypes from 'prop-types';

export const Transaction = ({ item: { type, amount, currency } }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tbody}>
        <tr>
          <td>{type} </td>
          <td>{amount} </td>
          <td>{currency} </td>
        </tr>
        <tr>
          <td>{type} </td>
          <td>{amount} </td>
          <td>{currency} </td>
        </tr>
      </tbody>
    </table>
  );
};
Transaction.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};