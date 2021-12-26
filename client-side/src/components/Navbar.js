import userIcon from "../assets/icons8-user-64.png";
import iconLogout from "../assets/icons8-logout-58.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { USER_LOGOUT } from "../store/action-type/transactionType";
import { useNavigate } from "react-router";
export default function Navbar() {
  const [username, setUsername] = useState("");
  const { usersInformation, loading, error } = useSelector(
    (state) => state.transaction
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogout = async () => {
    dispatch({
      type: USER_LOGOUT,
    });
    navigate("/login");
  };
  useEffect(() => {
    setUsername(usersInformation.username);
  }, [usersInformation]);
  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginLeft: "40px", marginTop: "35px" }}>
        <h1>Overview</h1>
        <p style={{ marginTop: "-10px" }}>
          Hi {username?.length ? username : null}, get your summary of your
          monthly transaction here
        </p>
      </div>
      <div
        className="icon-navbar"
        style={{ marginTop: "85px", marginLeft: "auto", marginRight: "20px" }}
      >
        <img
          onClick={userLogout}
          src={iconLogout}
          style={{ cursor: "pointer" }}
        ></img>
        <img src={userIcon}></img>
      </div>
    </div>
  );
}
