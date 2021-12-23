import { useSelector } from "react-redux";

export default function CardInfo() {
  const { usersInformation, loading, error } = useSelector(
    (state) => state.transaction
  );
  return (
    <div style={{ marginLeft: "20px" }}>
      <h1 className="sub">Card Info</h1>
      <div className="card-info-container">
        <div
          style={{
            width: "250px",
            height: "120px",
            backgroundColor: "rgb(52, 88, 196)",
            borderRadius: "20px",
          }}
        >
          <div style={{ display: "flex" }}>
            <p style={{ color: "white", padding: "20px", marginTop: "2px" }}>
              Balance
            </p>
            <img
              style={{
                width: "80px",
                height: "50px",
                marginLeft: "auto",
                marginTop: "30px",
                marginRight: "10px",
              }}
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.mcpayment.id/wp-content/uploads/2017/07/mcpayment-logo.png"
            ></img>
          </div>
          <p style={{ color: "white", marginTop: "-30px", marginLeft: "20px" }}>
            {!loading && Object.keys(usersInformation).length
              ? `Rp. ${usersInformation.balance[0].amount.toLocaleString()}, 00`
              : null}
          </p>
          <p style={{ color: "white", marginTop: "-5px", marginLeft: "20px" }}>
            Rekening: &nbsp;
            {!loading && Object.keys(usersInformation).length
              ? usersInformation.id
              : null}
          </p>
        </div>
        <div
          style={{
            width: "230px",
            height: "55px",
            backgroundColor: "white",
            borderRadius: "20px",
            margin: "auto",
            marginTop: "10px",
            display: "flex",
          }}
        >
          <p style={{ marginLeft: "20px" }}>Type of card</p>
          <img
            style={{
              width: "70px",
              height: "50px",
              marginLeft: "auto",
              marginRight: "5px",
              borderRadius: "20px",
            }}
            src="data:image/png;base64,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"
          ></img>
        </div>
      </div>
    </div>
  );
}
