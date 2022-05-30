import axios from "axios";
import React from "react";
import "../Style/Login.css";

const Login = () => {
  const [userinfo, setuserinfo] = React.useState({});
  const [response, setresponse] = React.useState();
  const handlesubmit = (e) => {
    e.preventDefault();

    axios({
      url: "https://nowshop.herokuapp.com/usersignup",
      method: "POST",
      data: {
        email: userinfo.email,
        password: userinfo.password,
      },
    }).then((response) => {
      setresponse(response.data.messege);
    });
  };
  const handleuserinfo = (e) => {
    userinfo[e.target.name] = e.target.value;
  };
  return (
    <div class="login-page">
      <div class="form">
        <h4>{response}</h4>
        <form class="login-form" onSubmit={handlesubmit}>
          <input
            type="text"
            placeholder="username"
            name="email"
            onChange={handleuserinfo}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={(e) => {
              handleuserinfo(e);
            }}
          />
          <button type="submit">sign up</button>
          <p class="message">
            registered? <a href="/login">login</a>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Login;
