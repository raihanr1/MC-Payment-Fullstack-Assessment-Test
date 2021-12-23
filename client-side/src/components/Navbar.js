import userIcon from "../assets/icons8-user-64.png";
import iconLogout from "../assets/icons8-logout-58.png";

export default function Navbar() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginLeft: "40px", marginTop: "35px" }}>
        <h1>Overview</h1>
        <p style={{ marginTop: "-10px" }}>
          Hi -Raihan-, get your summary of your monthly transaction here
        </p>
      </div>
      <div
        className="icon-navbar"
        style={{ marginTop: "85px", marginLeft: "auto", marginRight: "20px" }}
      >
        <img src={iconLogout}></img>
        <img src={userIcon}></img>
      </div>
    </div>
  );
}
