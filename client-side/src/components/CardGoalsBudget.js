import { useEffect, useState } from "react";
import iconTarget from "../assets/target.png";
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
export default function CardGoals({ goal }) {
  useEffect(() => {}, []);
  return (
    <div
      style={{
        display: "flex",
        marginTop: "10px",
        marginLeft: "10px",
      }}
    >
      <div>
        <img src={iconTarget} style={{ width: "30px", height: "30px" }}></img>
      </div>
      <div>
        <h1 style={{ fontSize: "15px", marginTop: "6px", marginLeft: "5px" }}>
          {goal?.history}
        </h1>
        <p style={{ fontSize: "10px", marginTop: "-5px", marginLeft: "5px" }}>
          {goal?.amount}
        </p>
      </div>
      <div style={{ marginLeft: "auto" }}>
        <p className="amount">{goal?.income ? goal.income : null}</p>
        <p
          style={{
            fontSize: "10px",
            marginTop: "-13px",
            marginLeft: "auto",
          }}
        ></p>
      </div>
    </div>
  );
}
