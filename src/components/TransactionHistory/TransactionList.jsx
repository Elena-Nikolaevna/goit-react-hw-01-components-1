import { Transaction } from '../TransactionHistory/Transaction';

export const TransactionList = ({ items }) => {
  return (
    <div>
      {items.map((item, idx) => (
        <Transaction key={idx} item={item} />
      ))}
    </div>
  );
};
