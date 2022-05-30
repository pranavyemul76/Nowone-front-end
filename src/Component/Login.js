import axios from "axios";
import React from "react";
import "../Style/Login.css";
import $ from "jquery";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
  const [userinfo, setuserinfo] = React.useState({});
  const history = useHistory();
  const [response, setresponse] = React.useState();
  const query = new URLSearchParams(window.location.search);

  const handleLogin = (e) => {
    e.preventDefault();
    axios({
      url: "http://localhost:8080/userlogin",
      method: "POST",
      data: {
        email: userinfo.email,
        password: userinfo.password,
      },
    }).then((response) => {
      setresponse(response.data.messege);
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        if (query.get("redirect")) {
          history.push(`${query.get("redirect")}`);
        } else {
          history.push("/");
        }
      }
    });
  };
  const handleSignup = (e) => {
    e.preventDefault();
    axios({
      url: "http://localhost:8080/usersignup",
      method: "POST",
      data: {
        email: userinfo.email,
        password: userinfo.password,
        name: userinfo.username,
      },
    }).then((response) => {
      setresponse(response.data.messege);
    });
  };
  const handleuserinfo = (e) => {
    userinfo[e.target.name] = e.target.value;
  };
  React.useEffect(() => {
    $(".message a").click(function () {
      $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
    });
  }, []);
  return (
    <div class="login-page">
      <div class="form">
        <form class="register-form" onSubmit={handleSignup}>
          <h4>{response}</h4>
          <input
            type="text"
            placeholder="name"
            name="username"
            onChange={(e) => {
              handleuserinfo(e);
            }}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={(e) => {
              handleuserinfo(e);
            }}
          />
          <input
            type="text"
            placeholder="email address"
            name="email"
            onChange={(e) => {
              handleuserinfo(e);
            }}
          />
          <button type="submit">create</button>
          <p class="message">
            Already registered? <a href="#">Sign In</a>
          </p>
        </form>

        <form class="login-form" onSubmit={handleLogin}>
          <h3>{response}</h3>
          <input
            type="text"
            placeholder="username"
            name="email"
            onChange={(e) => {
              handleuserinfo(e);
            }}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={(e) => {
              handleuserinfo(e);
            }}
          />
          <button type="submit">login</button>
          <p class="message">
            Not registered? <a href="#">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Login;
