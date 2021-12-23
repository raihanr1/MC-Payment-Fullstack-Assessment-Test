import iconPayment from "../assets/icons8-payment-64.png";
import iconMenu from "../assets/icons8-squared-menu-50.png";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <div style={{ padding: "30px" }}>
        <div
          style={{
            backgroundColor: "rgb(241, 243, 253)",
            width: "60px",
            height: "60px",
            marginTop: "40px",
            borderRadius: "8px",
          }}
        >
          <img
            style={{
              width: "50px",
              height: "50px",
              marginTop: "5px",
              marginLeft: "5px",
            }}
            src={iconPayment}
          ></img>
        </div>
        <div
          style={{
            backgroundColor: "rgb(241, 243, 253)",
            width: "60px",
            height: "60px",
            marginTop: "40px",
            borderRadius: "8px",
          }}
        >
          <img
            src={iconMenu}
            style={{
              marginTop: "10px",
              marginLeft: "10px",
              width: "40px",
              height: "40px",
            }}
          ></img>
        </div>
      </div>
    </div>
  );
}
