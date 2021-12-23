import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="*"
        element={
          <center style={{ marginTop: "100px" }}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <img src="https://i.gifer.com/XOsX.gif" alt="duckWalk" />
              Oops page not found, go to dashboard Click here.
            </Link>
          </center>
        }
      />
    </Routes>
  );
}

export default App;
