import React, { useEffect } from "react";
import "../Style/Headerfordesk.css";
import Headerfordesk from "./Headerfordesk";
import Headerformobile from "./Headerformobile";
import "../Style/headerformobile.css";
import $ from "jquery";
import { useSelector } from "react-redux";

const Header = ({ category, userinfo }) => {
  const [windowSize, SetWindowSize] = React.useState();

  const count = useSelector((state) => state.Filterreducres.cartdata);
  const handleLogout = () => {
    if (window.confirm("are your sure to logout")) {
      localStorage.clear();
    }
  };
  React.useEffect(() => {
    $(".navbar-toggler").on("click", function () {
      $("#navbarText").css({
        width: "70%",
        opacity: 1,
        visibility: "visible",
      });
    });
  }, []);
  React.useEffect(() => {
    var size = window.innerWidth;
    SetWindowSize(size);
    window.addEventListener("resize", () => {
      size = window.innerWidth;
      SetWindowSize(size);
    });
  }, [windowSize]);
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">
        NOWSHOP
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>

      {windowSize < 768 ? (
        <>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="category-list">
              <div className="UserInfo">
                <div>
                  {userinfo && userinfo.name ? (
                    <>
                      <div className="phone-login">{userinfo.name}</div>

                      <a href="/orderdetail">
                        <div className="phone-your-orders">Your orders</div>
                      </a>
                      <div
                        className="phone-logout"
                        onClick={() => {
                          handleLogout();
                        }}
                      >
                        Logout
                      </div>
                    </>
                  ) : (
                    <a href="/login">
                      <div className="phone-login">login</div>
                    </a>
                  )}
                </div>
              </div>
              <Headerformobile category={category.Category} />
            </div>
          </div>
          <div className="BagOrUserLogin">
            <a class="" href="/login">
              <i class="fa fa-user" aria-hidden="true"></i>
            </a>
            <a class="" href="/checkout/cart">
              <i class="fa fa-shopping-bag" aria-hidden="true">
                <sup className="cart-count">{8 > 9 ? `9+` : count}</sup>
              </i>
            </a>
          </div>
        </>
      ) : (
        <>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <Headerfordesk category={category.Category} />
            <div className="BagOrUserLogin">
              <div className="Userinfosection">
                <a class="userlogin" href="#">
                  <i class="fa fa-user" aria-hidden="true"></i>
                </a>
                <div className="Userinfo">
                  {userinfo && userinfo.name ? (
                    <>
                      <div className="logintitle"> Hey {userinfo.name}</div>

                      <a href="/orderdetail">
                        <div className="yourorders">Your orders</div>
                      </a>
                      <div
                        className="logout"
                        onClick={() => {
                          handleLogout();
                        }}
                      >
                        Log Out
                      </div>
                    </>
                  ) : (
                    <>
                      <a href="/login">
                        <div className="logintitle"> login</div>
                      </a>
                    </>
                  )}
                </div>
              </div>
              <div>
                <a class="cart" href="/checkout/cart">
                  <i class="fa fa-shopping-bag" aria-hidden="true">
                    <sup className="cart-count">{8 > 9 ? `9+` : count}</sup>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};
export default Header;
