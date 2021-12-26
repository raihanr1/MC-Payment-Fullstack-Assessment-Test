import { useState } from "react";
import ModalTransaction from "./ModalTransaction";
export default function ActionTransaction() {
  const openModal = (payload) => {
    setModal(payload);
  };
  const [modal, setModal] = useState(false);
  return (
    <div style={{ marginLeft: "20px" }}>
      <h1 className="sub">Take Transaction</h1>
      <div className="container transaction-action" style={{ height: "160px" }}>
        <div>
          <p>Top Up</p>
          <label
            htmlFor="modal-1"
            className="button button-1"
            onClick={() => openModal("Top Up")}
          >
            Click
          </label>
        </div>
        <div>
          <p>Goals Budget</p>
          <label
            onClick={() => openModal("Goals Budget")}
            htmlFor="modal-1"
            className="button button-2"
          >
            Click
          </label>
        </div>
        <div>
          <p>Transfer</p>
          <label
            onClick={() => openModal("Transfer")}
            htmlFor="modal-1"
            className="button button-3"
          >
            Click
          </label>
        </div>
        <ModalTransaction modal={modal} />
      </div>
    </div>
  );
}
