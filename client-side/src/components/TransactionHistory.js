import CardTransaction from "./CardTransaction";
import { useSelector } from "react-redux";
const styles = {
  fontSize: "10px",
  marginLeft: "10px",
  marginTop: "35px",
};
export default function TransactionHistory() {
  const { usersInformation, loading, error } = useSelector(
    (state) => state.transaction
  );
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
          {usersInformation.transaction && !loading
            ? usersInformation.transaction.map((el, i) => {
                return <CardTransaction transaction={el} key={i} />;
              })
            : null}
        </div>
      </div>
    </div>
  );
}
