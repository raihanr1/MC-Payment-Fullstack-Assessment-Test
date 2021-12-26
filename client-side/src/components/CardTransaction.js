import { useEffect, useState } from "react";
import iconUser from "../assets/icons8-user-64.png";
let stylesFontPayment = {
  color: "rgb(52, 88, 196)",
};
let stylesFontTopUp = {
  color: "#88E0EF",
};
let stylesFontTransfer = {
  color: "#FABB51",
};
function formatDateAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}
export default function CardTransaction({ transaction }) {
  const [amountTransacation, setAmount] = useState("");
  const [transactionDate, setDate] = useState("");
  useEffect(() => {
    if (transaction.status === "TopUp") {
      setAmount(`+ Rp. ${transaction.income.toLocaleString()}, 00`);
    } else if (transaction.status === "Transfer") {
      setAmount(`- Rp. ${transaction.amount.toLocaleString()}, 00`);
    } else if (transaction.status === "Payment") {
      setAmount(`+ Rp. ${transaction.amount.toLocaleString()}, 00`);
    } else if (transaction.status === "GoalsBudget") {
    }
    const date = new Date(transaction.createdAt);
    const option = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const event = `${date.toLocaleDateString("id-ID", option)} ${formatDateAMPM(
      date
    )}`;
    setDate(event);
  }, [transaction]);
  return (
    <div style={{ display: "flex" }}>
      <div>
        <img
          src={
            transaction?.status === "TopUp"
              ? "https://sg-res.9appsinstall.com/sg/res/jpg/1f/a6/764fd84fce7b46e74289aaf8636b-9b6.jpg?x-oss-process=style/mq200"
              : iconUser
          }
          style={{ width: "50px", height: "50px" }}
        ></img>
      </div>
      <div>
        <h1 style={{ fontSize: "15px", marginTop: "6px", marginLeft: "5px" }}>
          {transaction.history}
        </h1>
        <p style={{ fontSize: "10px", marginTop: "-5px", marginLeft: "5px" }}>
          {transactionDate ? transactionDate : null}
        </p>
      </div>
      <div style={{ marginLeft: "auto" }}>
        <p
          className="amount"
          style={
            transaction?.status === "TopUp"
              ? stylesFontTopUp
              : transaction?.status === "Transfer"
              ? stylesFontTransfer
              : transaction?.status === "Payment"
              ? stylesFontPayment
              : null
          }
        >
          {amountTransacation.length ? amountTransacation : null}
        </p>
        <p
          style={{
            fontSize: "10px",
            marginTop: "-13px",
            marginLeft: "auto",
          }}
        >
          {transaction?.status ? transaction.status : null}
        </p>
      </div>
    </div>
  );
}
