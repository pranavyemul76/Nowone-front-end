import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Cart } from "../Redux/Actions/FilterProducts.actions.";
import "../Style/Other.css";

export const Shopping = () => {
  const [userinfo, setuserinfo] = React.useState({});
  const [ordersuccess, setsuccess] = React.useState(false);
  const [loading, setloading] = React.useState(true);
  const [total, settotal] = React.useState({});
  const [cartitems, setcartitems] = React.useState(false);
  const history = useHistory();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
  const handlesubmit = (e) => {
    e.preventDefault();

    const promise = new Promise((resolve, reject) => {
      if (cartitems.length >= 1) {
        resolve(
          cartitems.map((i) => {
            return {
              product: i.product._id,
              Size: i.size,
              quantity: i.quantity,
            };
          })
        );
      } else {
        reject("errors");
      }
    });

    promise
      .then((res) => {
        axios({
          url: "http://localhost:8080/productorder",
          method: "POST",
          headers: {
            Authorization: ` Bearer ${localStorage.getItem("token")}`,
          },
          data: {
            product: res,
          },
        })
          .then((res) => {
            setsuccess(res.data.orderresponse);
            dispatch(Cart(0));
            localStorage.setItem("nos", 0);
          })
          .catch((error) => {});
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleuserinfo = (event) => {
    userinfo[event.target.name] = event.target.value;
    console.log(userinfo);
  };
  useEffect(() => {
    setloading(true);
    axios({
      url: "http://localhost:8080/getcart",
      method: "POST",
      headers: {
        Authorization: ` Bearer ${localStorage.getItem("token")}`,
      },
    }).then((result) => {
      if (
        result.data.products &&
        result.data.products.cartitem &&
        result.data.products.cartitem.length >= 1
      ) {
        setcartitems(result.data.products.cartitem);
        settotal(result.data.summery);
        setloading(false);
      } else {
        setcartitems(false);
        setloading(false);
      }
    });
  }, []);

  return (
    <div className="cart-section ">
      {loading ? (
        <div className="loading">
          <div className="laodinglayout">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <h4
              style={{
                textAlign: "justify",
                letterSpacing: "7px",
                fontSize: "20px",
              }}
            >
              Loading
            </h4>
          </div>
        </div>
      ) : (
        <>
          {cartitems === false ? (
            <div className="cartisempty">
              <div className="cartemptyimg">
                <img
                  src="https://cdn.dribbble.com/users/844846/screenshots/2981974/empty_cart_800x600_dribbble.png"
                  style={{ width: "100%", height: "80%" }}
                  alt="none"
                />
                <a href="/" style={{ padding: "0px" }}>
                  <button
                    className="btn"
                    style={{
                      padding: "10px",
                      fontSize: "30px",
                      backgroundColor: "rgb(25, 157, 169)",
                    }}
                  >
                    Shop Now
                  </button>
                </a>
              </div>
            </div>
          ) : (
            <>
              {ordersuccess && (
                <div className="OrdersNotification">
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <div className="Oredernotificationsection">
                      <div className="OrdersNotificationimg">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFTdVcBscF5TkFu0axNuwSbVBtnqo5vk-dzydRGGYZ3zfbEubMWkrTd5ZW_pYOlquX7JU&usqp=CAU"
                          style={{ width: "100%", height: "100%" }}
                          alt="none"
                        />
                      </div>
                      <div className="OrdersNotificationtitle">
                        <h3>Order successfully saved</h3>
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundColor: "InfoBackground",
                        position: "relative",
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "100%",
                      }}
                    >
                      <div style={{ textAlign: "center", fontSize: "21px" }}>
                        Your order is confirmed you will recive an order
                        confirmation email /SMS Shortly with the expected
                        delivary date for your items
                      </div>
                      <div style={{ display: "flex" }}>
                        <div
                          className="btn"
                          style={{
                            marginRight: "10px",
                            backgroundColor: "ButtonFace",
                            color: "#3c3e1b",
                            fontSize: "16px",
                          }}
                          onClick={() => {
                            history.push("/");
                          }}
                        >
                          Continue Shopping
                        </div>
                        <a
                          href="/orderdetail"
                          className="btn"
                          style={{
                            marginLeft: "7px",
                            fontSize: "16px",
                            backgroundColor: "#1e9399",
                          }}
                        >
                          View Order
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handlesubmit}>
                <div class="card">
                  <div class="row">
                    <div class="col-md-8 container bg-default">
                      <h4 class="my-4">Billing Address</h4>

                      <div class="form-row">
                        <div class="col-md-6 form-group">
                          <label for="firstname">First Name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="firstname"
                            placeholder="First Name"
                            name="firstname"
                            onChange={handleuserinfo}
                          />
                          <div class="invalid-feedback">
                            Valid first name is .
                          </div>
                        </div>

                        <div class="col-md-6 form-group">
                          <label for="lastname">Last Name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="lastname"
                            placeholder="Last Name"
                            name="lastname"
                            onChange={handleuserinfo}
                          />
                          <div class="invalid-feedback">
                            Valid last name is .
                          </div>
                        </div>
                      </div>

                      <div class="form-group">
                        <label for="username">Username</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text">@</span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            id="username"
                            placeholder="Username"
                            name="username"
                            onChange={handleuserinfo}
                          />
                          <div class="invalid-feedback">Your username is .</div>
                        </div>
                      </div>

                      <div class="form-group">
                        <label for="email">Email</label>
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          placeholder="you@example.com"
                          name="email"
                          onChange={handleuserinfo}
                        />
                      </div>

                      <div class="form-group">
                        <label for="adress">Address</label>
                        <input
                          type="text"
                          class="form-control"
                          id="adress"
                          placeholder="1234 Main Street"
                          name="address"
                          onChange={handleuserinfo}
                        />
                        <div class="invalid-feedback">
                          Please enter your shipping address.
                        </div>
                      </div>

                      <div class="form-group">
                        <label for="address2">
                          Address 2<span class="text-muted">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="adress2"
                          placeholder="Flat No"
                          name="address2"
                          onChange={handleuserinfo}
                        />
                      </div>

                      <div class="row">
                        <div class="col-md-4 form-group">
                          <label for="country">Country</label>
                          <select
                            type="text"
                            class="form-control"
                            id="country"
                            name="country"
                            onChange={handleuserinfo}
                          >
                            <option>Choose...</option>
                            <option value={"United Kingdom"}>
                              United Kingdom
                            </option>
                          </select>
                          <div class="invalid-feedback">
                            Please select a valid country.
                          </div>
                        </div>

                        <div class="col-md-4 form-group">
                          <label for="city">City</label>
                          <select type="text" class="form-control" id="city">
                            <option value>Choose...</option>
                            <option>London</option>
                          </select>
                          <div class="invalid-feedback">
                            Please provide a valid city.
                          </div>
                        </div>

                        <div class="col-md-4 form-group">
                          <label for="postcode">Postcode</label>
                          <select
                            type="text"
                            class="form-control"
                            id="postcode"
                          >
                            <option value>Choose...</option>
                            <option>NW6 2LS</option>
                          </select>
                          <div class="invalid-feedback">Postcode .</div>
                        </div>
                      </div>

                      <hr class="mb-4" />
                    </div>
                    <div class="col-md-4 summary">
                      <div>
                        <h5>
                          <b>Summary</b>
                        </h5>
                      </div>
                      <hr />

                      <div class="row">
                        <div class="col">Total MRP</div>
                        <div class="col text-right">₹ {total.total}</div>
                      </div>
                      <div class="row">
                        <div class="col">Discount </div>
                        <div class="col text-right">
                          {" "}
                          - ₹{total.total - total.cartvalue}
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">shipping</div>
                        <div class="col text-right"> Free</div>
                      </div>
                      <div class="row">
                        <div class="col">total cart</div>
                        <div class="col text-right"> ₹ {total.cartvalue}</div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col">TOTAL PRICE</div>
                        <div class="col text-right"> ₹ {total.cartvalue}</div>
                        <input
                          className="btn"
                          type="submit"
                          value="place order"
                          style={{ fontSize: "16px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </>
          )}
        </>
      )}
    </div>
  );
};
/*
 <div class="col-md-4 summary">
            <div>
              <h5>
                <b>Summary</b>
              </h5>
            </div>
            <hr />

            <div class="row">
              <div class="col">Total MRP</div>
              <div class="col text-right">₹ 100</div>
            </div>
            <div class="row">
              <div class="col">Discount </div>
              <div class="col text-right">- ₹100</div>
            </div>
            <div class="row">
              <div class="col">shipping</div>
              <div class="col text-right"> Free</div>
            </div>
            <div class="row">
              <div class="col">total cart</div>
              <div class="col text-right"> ₹ 100</div>
            </div>
            <hr />
            <div class="row">
              <div class="col">TOTAL PRICE</div>
              <div class="col text-right"> ₹ 100</div>
              <a href="/checkout/shopping" className="btn">
                CHECKOUT
              </a>
            </div>
          </div>
       
 */

/*<div class="col-md-4 container bg-default">
                  <h4 class="my-4">Billing Address</h4>

                  <form>
                    <div class="form-row">
                      <div class="col-md-6 form-group">
                        <label for="firstname">First Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="firstname"
                          placeholder="First Name"
                        />
                        <div class="invalid-feedback">
                          Valid first name is .
                        </div>
                      </div>

                      <div class="col-md-6 form-group">
                        <label for="lastname">Last Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="lastname"
                          placeholder="Last Name"
                        />
                        <div class="invalid-feedback">
                          Valid last name is .
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label for="username">Username</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">@</span>
                        </div>
                        <input
                          type="text"
                          class="form-control"
                          id="username"
                          placeholder="Username"
                          
                        />
                        <div class="invalid-feedback">
                          Your username is .
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label for="email">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="you@example.com"
                        
                      />
                    </div>

                    <div class="form-group">
                      <label for="adress">Address</label>
                      <input
                        type="text"
                        class="form-control"
                        id="adress"
                        placeholder="1234 Main Street"
                        
                      />
                      <div class="invalid-feedback">
                        Please enter your shipping address.
                      </div>
                    </div>

                    <div class="form-group">
                      <label for="address2">
                        Address 2<span class="text-muted">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="adress2"
                        placeholder="Flat No"
                      />
                    </div>

                    <div class="row">
                      <div class="col-md-4 form-group">
                        <label for="country">Country</label>
                        <select type="text" class="form-control" id="country">
                          <option value>Choose...</option>
                          <option>United Kingdom</option>
                        </select>
                        <div class="invalid-feedback">
                          Please select a valid country.
                        </div>
                      </div>

                      <div class="col-md-4 form-group">
                        <label for="city">City</label>
                        <select type="text" class="form-control" id="city">
                          <option value>Choose...</option>
                          <option>London</option>
                        </select>
                        <div class="invalid-feedback">
                          Please provide a valid city.
                        </div>
                      </div>

                      <div class="col-md-4 form-group">
                        <label for="postcode">Postcode</label>
                        <select type="text" class="form-control" id="postcode">
                          <option value>Choose...</option>
                          <option>NW6 2LS</option>
                        </select>
                        <div class="invalid-feedback">Postcode .</div>
                      </div>
                    </div>

                    <hr />

                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="shipping-adress"
                      />
                      Shipping address is the same as my billing address
                      <label
                        for="shipping-adress"
                        class="form-check-label"
                      ></label>
                    </div>

                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="same-adress"
                      />
                      Save this information for next time
                      <label for="same-adress" class="form-check-label"></label>
                    </div>

                    <hr />

                    <h4 class="mb-4">Payment</h4>

                    <div class="form-check">
                      <input
                        type="radio"
                        class="form-check-input"
                        id="credit"
                        name="payment-method"
                        checked
                        
                      />
                      <label for="credit" class="form-check-label">
                        Credit Card
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        type="radio"
                        class="form-check-input"
                        id="debit"
                        name="payment-method"
                        
                      />
                      <label for="debit" class="form-check-label">
                        Debit Card
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        type="radio"
                        class="form-check-input"
                        id="paypal"
                        name="payment-method"
                        
                      />
                      <label for="paypal" class="form-check-label">
                        PayPal
                      </label>
                    </div>

                    <div class="row mt-4">
                      <div class="col-md-6 form-group">
                        <label for="card-name">Name on card</label>
                        <input
                          type="text"
                          class="form-control"
                          id="card-name"
                          placeholder
                          
                        />
                        <div class="invalid-feedback">
                          Name on card is 
                        </div>
                      </div>

                      <div class="col-md-6 form-group">
                        <label for="card-no">Card Number</label>
                        <input
                          type="text"
                          class="form-control"
                          id="card-no"
                          placeholder
                          
                        />
                        <div class="invalid-feedback">
                          Credit card number is 
                        </div>
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="col-md-5 form-group">
                        <label for="expiration">Expire Date</label>
                        <input
                          type="text"
                          class="form-control"
                          id="card-name"
                          placeholder
                          
                        />
                        <div class="invalid-feedback">
                          Expiration date 
                        </div>
                      </div>

                      <div class="col-md-5 form-group">
                        <label for="ccv-no">Security Number</label>
                        <input
                          type="text"
                          class="form-control"
                          id="sec-no"
                          placeholder
                          
                        />
                        <div class="invalid-feedback">
                          Security code 
                        </div>
                      </div>
                    </div>

                    <hr class="mb-4" />

                    <button
                      class="btn btn-primary bt-lg btn-block"
                      type="submit"
                    >
                      Continue to Checkout
                    </button>
                  </form>
                </div> */
