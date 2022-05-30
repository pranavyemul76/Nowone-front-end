import React from "react";
import "../Style/About.css";

const About = () => {
  return <></>;
};
export default About;
/*import React, { useEffect, useState } from "react";
import "../Style/Cart.css";
import axios from "axios";
import { useDispatch } from "react-redux";
const Dataloading = () => {
  return (
    <>
      <div className="loading">
        <div class="loader"></div>
      </div>
    </>
  );
};

export const Cart = () => {
  const [product, setproduct] = useState([]);
  const [loading, setloading] = useState(0);
  const [total, settotal] = useState(0);
  const [select, setselect] = useState(0);
  const [ordersuccess, setsuccess] = useState(false);
  const dispatch = useDispatch();
  const handledelete = (id, size) => {
    setloading(true);
    axios({
      url: "/deletecartproduct",
      method: "POST",
      headers: {
        Authorization: ` Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        productid: id,
        size: size,
      },
    })
      .then((response) => {
        settotal(response.data.summery);
        dispatch(Cart(response.data.noofproduct));
        setproduct(response.data.products);
        setloading(false);
      })
      .catch((response) => {
        console.log(response);
        console.log("error");
        setloading(false);
      });
  };

  useEffect(() => {
    if (select === 0) {
      fetches();
    } else {
      fetches(select.id, select.size, select.qty);
    }
  }, [select]);
  const fetches = (id, size, qyt) => {
    setloading(true);
    axios({
      url: "/getcart",
      method: "POST",
      headers: {
        Authorization: ` Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        productid: id,
        quantity: qyt,
        size: size,
      },
    })
      .then((response) => {
        console.log(response.data.products);
        settotal(response.data.summery);
        setproduct(response.data.products);

        setloading(false);
      })
      .catch((response) => {
        console.log(response);
      });
  };
  const handlechekout = (id, qyt, size) => {
    const promise = new Promise((resolve, reject) => {
      resolve(
        id.map((i) => {
          return {
            product: i.product._id,
            Size: i.size,
            quantity: i.quantity,
          };
        })
      );
    });
    promise
      .then((res) => {
        axios({
          url: "/productorder",
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
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="cart-section">
      {product === null ||
      (product && product.cartitem && product.cartitem.length === 0) ? (
        <div
          style={{
            position: "relative",
            width: "100vh",
            marginLeft: "auto",
            marginRight: "auto",
            height: "70vh",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "1%",
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src="https://cdn.dribbble.com/users/844846/screenshots/2981974/empty_cart_800x600_dribbble.png"
              style={{ width: "100%", height: "80%" }}
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
        <div>
          {ordersuccess && (
            <div
              style={{
                position: "Fixed",
                top: "3%",
                height: "100%",
                width: "80%",
                backgroundColor: "white",
                left: "10%",
                zIndex: 1000,
                borderRadius: "30px",
                boxShadow: "0px 6px 18px -5px rgba(237, 103, 85, 1)",
              }}
            >
              <div
                style={{ position: "relative", width: "100%", height: "100%" }}
              >
                <div
                  style={{
                    width: "40%",
                    height: "40%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "10%",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      height: "70%",
                      width: "50%",
                    }}
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFTdVcBscF5TkFu0axNuwSbVBtnqo5vk-dzydRGGYZ3zfbEubMWkrTd5ZW_pYOlquX7JU&usqp=CAU"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: "70%",
                      marginLeft: "17%",
                      textAlign: "center",
                    }}
                  >
                    <h3>Order successfully saved</h3>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "InfoBackground",
                    position: "relative",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "70%",
                  }}
                >
                  <div style={{ textAlign: "center", fontSize: "21px" }}>
                    Your order is confirmed you will recive an order
                    confirmation email /SMS Shortly with the expected delivary
                    date for your items
                  </div>
                  <div style={{ display: "flex" }}>
                    <a
                      className="btn"
                      style={{
                        marginRight: "10px",
                        backgroundColor: "ButtonFace",
                        color: "#3c3e1b",
                        fontSize: "16px",
                      }}
                      href="/"
                    >
                      Continue Shopping
                    </a>
                    <button
                      className="btn"
                      style={{
                        marginLeft: "7px",
                        fontSize: "16px",
                        backgroundColor: "#1e9399",
                      }}
                    >
                      View Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {loading ? (
            <Dataloading>*</Dataloading>
          ) : (
            <div class="card" id="card">
              <div class="row">
                <div class="col-md-8 cart">
                  <div class="title">
                    <div class="row">
                      <div class="col">
                        <h4>
                          <b>Shopping Cart</b>
                        </h4>
                      </div>
                      <div class="col align-self-center text-right text-muted">
                        {product && product.cartitem && product.cartitem.length}
                        &nbsp;items
                      </div>
                    </div>
                  </div>
                  {product &&
                    product.cartitem &&
                    product.cartitem.map((i) => {
                      return (
                        <div class="row border-top border-bottom">
                          <div class="row main align-items-center">
                            <div class="col-2">
                              <a href={`/product/${i.product._id}`}>
                                <img
                                  class="img-fluid"
                                  src={i.product.searchImage}
                                  alt={i.product.searchImage}
                                />
                              </a>
                            </div>

                            <div class="col">
                              <div class="row text-muted">
                                {i.product.brand}
                              </div>
                              <div class="row"> size : {i.size}</div>
                            </div>
                            <div class="col">
                              <label>qty</label>
                              <select
                                class="form-select"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setselect({
                                    id: i.product._id,
                                    size: i.size,
                                    qty: e.target.value,
                                  });
                                }}
                              >
                                <option value={1} selected={1 === i.quantity}>
                                  1
                                </option>
                                <option value={2} selected={2 === i.quantity}>
                                  2
                                </option>
                                <option value={3} selected={3 === i.quantity}>
                                  3
                                </option>
                                <option value={4} selected={4 === i.quantity}>
                                  4
                                </option>
                                <option value={5} selected={5 === i.quantity}>
                                  5
                                </option>
                                <option value={6} selected={6 === i.quantity}>
                                  6
                                </option>
                                <option value={7} selected={7 === i.quantity}>
                                  7
                                </option>
                                <option value={8} selected={8 === i.quantity}>
                                  8
                                </option>
                                <option value={9} selected={9 === i.quantity}>
                                  9
                                </option>
                                <option value={10} selected={10 === i.quantity}>
                                  10
                                </option>
                              </select>
                            </div>
                            <div class="col">
                              ₹ {i.quantity * i.product.price}
                              <span
                                class="close"
                                onClick={() => {
                                  handledelete(i.product._id, i.size);
                                }}
                              >
                                &#10005;
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  <div class="back-to-shop">
                    <a href="/">
                      <span class="text-muted">Back to shop</span>
                    </a>
                  </div>
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
                    <button
                      className="btn"
                      onClick={() => handlechekout(product.cartitem)}
                    >
                      CHECKOUT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
 */
