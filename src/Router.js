import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./Component/About";
import Filterpage from "./Component/FilterPage";
import Home from "./Component/Home";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { Shopping } from "./Component/Shopping";
import Protectedroute from "./Protect";
import Details from "./Component/Deatils";
import Login from "./Component/Login";
import axios from "axios";
import { Poductcart } from "./Component/Cart";
import Succcess from "./Component/Succcess";
// layout css present in header.css
const Allrouter = () => {
  const [category, setcategory] = React.useState([]);
  const [userinfo, setuserinfo] = React.useState(0);
  React.useEffect(() => {
    axios({
      url: "http://localhost:8080/getcategory",
      method: "GET",
    }).then((response) => {
      setcategory(response.data);
    });
  }, []);
  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      axios({
        url: "http://localhost:8080/getuserinfo",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((result) => {
        setuserinfo(result.data.user);
      });
    } else {
      setuserinfo(null);
      console.log(null);
    }
  }, [localStorage.getItem("token")]);

  return (
    <BrowserRouter>
      <Header category={category} userinfo={userinfo} />
      <div className="layout">
        <Switch>
          <Protectedroute path="/checkout/cart" component={Poductcart} />
          <Protectedroute path="/checkout/shopping" component={Shopping} />
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
          <Protectedroute path="/orderdetail" component={Succcess} />
          <Route path="/product/:slug" component={Details} />
          <Route path="/:slug" component={Filterpage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
export default Allrouter;
