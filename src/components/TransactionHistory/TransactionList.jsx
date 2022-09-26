//import { Transaction } from '../TransactionHistory/Transaction';

import css from './Transaction.module.css';
import PropTypes from 'prop-types';

export const TransactionList = ({ items }) => {
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
        {items.map(item => (
          <tr className={css.tr} key={item.id}>
            <td className={css.td}>{item.type}</td>
            <td className={css.td}>{item.amount}</td>
            <td className={css.td}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
TransactionList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string,
        }).isRequired,
    ),
};

/* export const TransactionList = ({ items }) => {
  return (
    <div>
      {items.map((item, idx) => (
        <Transaction key={idx} item={item} />
      ))}
    </div>
  );
};
 */
