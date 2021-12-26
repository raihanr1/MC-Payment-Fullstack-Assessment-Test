import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const styles = {
  fontSize: "10px",
  marginLeft: "10px",
  marginTop: "35px",
};
export default function StatisticGraphic() {
  const [range, setRange] = useState({});
  const { usersInformation, loading, error } = useSelector(
    (state) => state.transaction
  );
  const [slices, setSlices] = useState({});

  const Slice = (props) => {
    let slices = Object.keys(props.slices).map((sliceKey) => {
      return (
        <g key={sliceKey} transform={props.slices[sliceKey].rotate}>
          <g mask="url(#wedge-mask)">
            <circle
              className="Slice"
              cx="220"
              cy="220"
              r="200"
              fill={props.slices[sliceKey].fill}
              style={{
                transform: "scale(" + props.slices[sliceKey].transform + ")",
              }}
            ></circle>
          </g>
        </g>
      );
    });
    return <>{slices}</>;
  };

  useEffect(() => {
    if (Object.keys(usersInformation).length && !loading) {
      let topup = usersInformation.transaction.filter(
        (el) => el.status === "TopUp"
      ).length;
      let transfer = usersInformation.transaction.filter(
        (el) => el.status === "Transfer"
      ).length;
      let payment = usersInformation.transaction.filter(
        (el) => el.status === "Payment"
      ).length;
      setSlices({
        1: {
          name: "TopUp",
          rotate: "rotate(0.0000, 220, 220)",
          fill: "#88E0EF)",
          transform: topup > 0 ? topup / (transfer + topup + payment) : 0,
        },
        2: {
          name: "Transfer",
          rotate: "rotate(120.0000, 220, 220)",
          fill: "#FABB51",
          transform: transfer > 0 ? transfer / (transfer + topup + payment) : 0,
        },
        3: {
          name: "Payment",
          rotate: "rotate(240.0000, 220, 220)",
          fill: "rgb(52, 88, 196)",
          transform: payment > 0 ? payment / (transfer + topup + payment) : 0,
        },
      });
      setRange({
        topup,
        transfer,
        payment,
      });
    }
  }, [usersInformation, loading]);

  return (
    <div style={{ marginLeft: "20px" }}>
      <h1 className="sub">Statistic Graphic</h1>
      <div className="statistic-container">
        <p style={styles}>
          <span className="dot" style={{ backgroundColor: "#88E0EF" }}></span>
          Top Up &nbsp;
          {range?.topup
            ? (
                (range.topup / (range.topup + range.transfer + range.payment)) *
                100
              ).toFixed(2) + "% / month"
            : null}
        </p>
        <p style={styles}>
          <span className="dot" style={{ backgroundColor: "#FABB51" }}></span>
          Transfer
          {range?.transfer
            ? (
                (range.transfer /
                  (range.topup + range.transfer + range.payment)) *
                100
              ).toFixed(2) + "% / month"
            : null}
        </p>
        <p style={styles}>
          <span
            className="dot"
            style={{ backgroundColor: "rgb(52, 88, 196)" }}
          ></span>
          Payment
          {range?.payment
            ? (
                (range.payment /
                  (range.topup + range.transfer + range.payment)) *
                100
              ).toFixed(2) + "% / month"
            : null}
        </p>
        <div className="Content">
          <div className="ChartBlock">
            <div className="ChartPie">
              <svg
                className="ChartPieChunk"
                width="440px"
                height="440px"
                viewBox="0 0 440 440"
              >
                <mask id="wedge-mask" fill="#FFFFFF">
                  <path
                    transform="translate(20, 20)"
                    d="M93 7.241a200.006 200.006 0 01173.551-.865L200.004 200 112.33 20.241z"
                    fillRule="nonzero"
                  ></path>
                </mask>
                <circle cx="220" cy="220" r="200" fill="#FFFFFF"></circle>
                <Slice slices={slices} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
