import iconUser from "../assets/icons8-user-64.png";
export default function CardTransaction({ transaction }) {
  console.log(transaction);
  return (
    <div style={{ display: "flex" }}>
      <div>
        <img src={iconUser} style={{ width: "50px", height: "50px" }}></img>
      </div>
      <div>
        <h1 style={{ fontSize: "15px", marginTop: "6px", marginLeft: "5px" }}>
          {transaction.history}
        </h1>
        <p style={{ fontSize: "10px", marginTop: "-5px", marginLeft: "5px" }}>
          {transaction.createdAt}
        </p>
      </div>
      <div style={{ marginLeft: "auto" }}>
        <p style={{ color: "red", marginTop: "6px", fontSize: "15px" }}>
          {/* {transaction} */}
        </p>
        <p style={{ fontSize: "10px", marginTop: "-13px", marginLeft: "5px" }}>
          Payment
        </p>
      </div>
    </div>
  );
}
