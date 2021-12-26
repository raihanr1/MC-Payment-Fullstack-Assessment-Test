import CardTransaction from "./CardTransaction";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const styles = {
  fontSize: "10px",
  marginLeft: "10px",
  marginTop: "35px",
};
export default function TransactionHistory() {
  const { usersInformation, loading, error } = useSelector(
    (state) => state.transaction
  );
  const [transaction, setTransaction] = useState([]);
  useEffect(() => {
    if (Object.keys(usersInformation).length && !loading) {
      let transaction = usersInformation.transaction;
      let filtered = transaction.filter((el) => el.status !== "Goals Budget");
      setTransaction(filtered);
    }
  }, [usersInformation, loading]);
  return (
    <div>
      <div style={{ display: "flex" }}>
        <h1>Transaction History</h1>
        <p style={styles}>
          <span className="dot" style={{ backgroundColor: "#88E0EF" }}></span>
          Top Up
        </p>
        <p style={styles}>
          <span className="dot" style={{ backgroundColor: "#FABB51" }}></span>
          Transfer
        </p>
        <p style={styles}>
          <span
            className="dot"
            style={{ backgroundColor: "rgb(52, 88, 196)" }}
          ></span>
          Payment
        </p>
      </div>
      <div className="transaction-container">
        <div className="scroolbar-content" style={{ cursor: "all-scroll" }}>
          {transaction.length && !loading
            ? transaction.map((el, i) => {
                return <CardTransaction transaction={el} key={i} />;
              })
            : null}
        </div>
      </div>
    </div>
  );
}
