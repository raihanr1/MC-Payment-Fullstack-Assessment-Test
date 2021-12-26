import { useEffect, useState } from "react";
import axios from "../config/serverConfig";
import Loading from "../components/Loading";
import { useNavigate } from "react-router";
export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [validRegister, setValidRegister] = useState(false);
  const [validLogin, setValidLogin] = useState(false);
  const [alert, setAlert] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleRegisterUser = async () => {
    setAlert(false);
    if (!username) {
      setMessage("User name is required");
      setValidRegister(true);
    } else if (!email) {
      setMessage("Email is required");
      setValidRegister(true);
    } else if (!password) {
      setMessage("Password is required");
      setValidRegister(true);
    } else {
      setLoading(true);
      try {
        setMessage("");
        setValidRegister(false);
        let response = await axios({
          method: "POST",
          url: "/users/register",
          data: {
            username,
            email,
            password,
          },
        });
        setMessage("Success register new account, please login");
        setAlert(true);
        setValidRegister(true);
        setLoading(false);
      } catch (error) {
        setAlert(false);
        setValidRegister(true);
        setLoading(false);
        setMessage(error.response?.data?.message);
      }
    }
  };
  const handleUserLogin = async () => {
    if (!email) {
      setMessage("Email is required");
      setValidLogin(true);
    } else if (!password) {
      setMessage("Password is required");
      setValidLogin(true);
    } else {
      setLoading(true);
      setAlert(false);
      try {
        setValidRegister(false);
        setMessage("");
        setValidLogin(false);
        let response = await axios({
          method: "POST",
          url: "/users/login",
          data: {
            email,
            password,
          },
        });
        setLoading(false);
        localStorage.setItem("access_token", response.data?.access_token);
        setEmail("");
        setPassword("");
        setUsername("");
        navigate("/");
      } catch (error) {
        setLoading(false);
        setValidLogin(true);
        setMessage(error.response?.data?.message);
      }
    }
  };
  return (
    <main>
      <div>
        <div className="main">
          <input type="checkbox" id="check" aria-hidden="true"></input>
          <div className="signup">
            <label
              htmlFor="check"
              aria-hidden="true"
              style={{ color: "#573b8a" }}
            >
              Sign up
            </label>
            {validRegister ? (
              <div
                className="error-container"
                style={{
                  width: "230px",
                  marginLeft: "60px",
                  overflow: "scroll",
                  cursor: "all-scroll",
                }}
              >
                {alert ? (
                  <p style={{ color: "white" }}>{message}</p>
                ) : (
                  <p>{message}</p>
                )}
              </div>
            ) : null}

            <input
              type="text"
              value={username}
              name="username"
              placeholder="User name"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button onClick={() => handleRegisterUser()}>Sign up</button>
          </div>

          <div className="login">
            <label htmlFor="check" aria-hidden="true">
              Login
            </label>
            {validLogin ? (
              <div
                className="error-container"
                style={{ width: "230px", marginLeft: "60px" }}
              >
                <p>{message}</p>
              </div>
            ) : null}
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button onClick={() => handleUserLogin()}>Login</button>
          </div>
        </div>
      </div>
    </main>
  );
}
