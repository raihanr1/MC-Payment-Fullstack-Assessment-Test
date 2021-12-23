import CardTransaction from "./CardTransaction";
import { useSelector } from "react-redux";

export default function TransactionHistory() {
  const { usersInformation, loading, error } = useSelector(
    (state) => state.transaction
  );
  return (
    <div>
      <h1>Transaction History</h1>
      <div className="transaction-container">
        <div className="scroolbar-content">
          {usersInformation?.transaction
            ? usersInformation.transaction.map((el, i) => {
                return <CardTransaction transaction={el} key={i} />;
              })
            : null}
        </div>
      </div>
    </div>
  );
}
