import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  topUpTransaction,
  transferTransaction,
} from "../store/action/transactionAction";
import Loading from "../components/Loading";
const styles = {
  height: "40%",
};
export default function ModalTransaction({ modal }) {
  const { loading, error, usersInformation } = useSelector(
    (state) => state.transaction
  );
  const [form, setForm] = useState("");
  const [amount, setAmount] = useState("");
  const [accNumber, setAccNumber] = useState("");
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [goals, setGoals] = useState();
  const dispatch = useDispatch();
  const handleSubmitForm = () => {
    if (modal === "Transfer" && !accNumber.length) {
      setAlert(true);
      setMessage("Account number is required");
    } else if (!amount.length) {
      setAlert(true);
      setMessage("Amount is required");
    } else {
      setAlert(false);
      let data = {
        income: amount,
      };
      if (form === "Transfer") {
        let input = {
          user_id: accNumber,
          amount,
        };
        dispatch(transferTransaction(input));
      } else {
        dispatch(topUpTransaction(data));
      }
    }
  };
  useEffect(() => {
    setAlert(false);
    setAmount("");
    if (modal === "Transfer") {
      setAccNumber("");
    }
    setForm(modal);
  }, [modal]);

  useEffect(() => {
    if (error) {
      setMessage(error.response?.data?.message);
      setAlert(true);
    }
  }, [error, usersInformation, loading]);

  return (
    <main>
      <input className="modal-state" id="modal-1" type="checkbox" />
      <div className="modal">
        <label className="modal-bg" htmlFor="modal-1"></label>
        <div
          className="modal-inner"
          style={form === "Transfer" || form === "Goals Budget" ? styles : null}
        >
          <label className="modal-close" htmlFor="modal-1"></label>
          {form === "Top Up" ? (
            <div style={{ display: "block", marginTop: "25px" }}>
              <h1 style={{ marginLeft: "85px" }}>Top Up Balance</h1>
              {alert ? (
                <div className="error-container">
                  <p>{message}</p>
                </div>
              ) : null}

              <div style={{ display: "flex", marginLeft: "20px" }}>
                <input
                  style={{
                    width: "300px",
                    height: "30px",
                    border: "2px solid rgb(20, 70, 145)",
                  }}
                  type="number"
                  placeholder="Amount"
                  value={amount}
                  name="amount"
                  onChange={(e) => setAmount(e.target.value)}
                ></input>
                {loading ? (
                  <div
                    style={{
                      marginTop: "-25px",
                    }}
                  >
                    <Loading />
                  </div>
                ) : (
                  <button
                    style={{
                      cursor: "pointer",
                      backgroundColor: "rgb(52, 88, 196)",
                      border: "none",
                    }}
                    onClick={() => handleSubmitForm()}
                  >
                    Top Up
                  </button>
                )}
              </div>
            </div>
          ) : form === "Transfer" ? (
            <div style={{ display: "block", marginTop: "5px" }}>
              <h1 style={{ marginLeft: "125px" }}>Transfer</h1>
              {alert ? (
                <div className="error-container-2">
                  <p>{message}</p>
                </div>
              ) : null}

              <div style={{ display: "block" }}>
                <div style={{ display: "block", marginLeft: "40px" }}>
                  <input
                    style={{
                      width: "300px",
                      height: "30px",
                      border: "2px solid rgb(20, 70, 145)",
                    }}
                    type="number"
                    placeholder="Account Number"
                    name="accNumber"
                    value={accNumber}
                    onChange={(e) => setAccNumber(e.target.value)}
                  ></input>
                  <input
                    style={{
                      marginTop: "10px",
                      width: "300px",
                      height: "30px",
                      border: "2px solid rgb(20, 70, 145)",
                    }}
                    type="text"
                    placeholder="Amount"
                    name="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  ></input>
                </div>
                <div style={{ marginTop: "10px", marginLeft: "150px" }}>
                  {loading ? (
                    <Loading />
                  ) : (
                    <button
                      style={{
                        cursor: "pointer",
                        backgroundColor: "rgb(52, 88, 196)",
                        border: "none",
                        width: "80px",
                        height: "30px",
                      }}
                      onClick={() => handleSubmitForm()}
                    >
                      Transfer
                    </button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div style={{ display: "block", marginTop: "5px" }}>
              <h1 style={{ marginLeft: "125px" }}>Transfer</h1>
              {alert ? (
                <div className="error-container-2">
                  <p>{message}</p>
                </div>
              ) : null}

              <div style={{ display: "block" }}>
                <div style={{ display: "block", marginLeft: "40px" }}>
                  <input
                    style={{
                      width: "300px",
                      height: "30px",
                      border: "2px solid rgb(20, 70, 145)",
                    }}
                    type="text"
                    placeholder="Your goals here..."
                    name="goals"
                    value={goals}
                    onChange={(e) => setGoals(e.target.value)}
                  ></input>
                  <input
                    style={{
                      marginTop: "10px",
                      width: "300px",
                      height: "30px",
                      border: "2px solid rgb(20, 70, 145)",
                    }}
                    type="text"
                    placeholder="Amount"
                    name="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  ></input>
                </div>
                <div style={{ marginTop: "10px", marginLeft: "150px" }}>
                  {loading ? (
                    <Loading />
                  ) : (
                    <button
                      style={{
                        cursor: "pointer",
                        backgroundColor: "rgb(52, 88, 196)",
                        border: "none",
                        width: "80px",
                        height: "30px",
                      }}
                      onClick={() => handleSubmitForm()}
                    >
                      Transfer
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
