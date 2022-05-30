import React, { useEffect, useState } from "react";
import "../Style/Cart.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Cart } from "../Redux/Actions/FilterProducts.actions.";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Dataloading = () => {
  return (
    <>
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
    </>
  );
};

export const Poductcart = () => {
  const [product, setproduct] = useState([]);
  const [loading, setloading] = useState(0);
  const [total, settotal] = useState(0);
  const [select, setselect] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handledelete = (id, size) => {
    if (id && size) {
      setloading(true);
      axios({
        url: "http://localhost:8080/deletecartproduct",
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
          console.log(response.data.noofproduct);
          dispatch(Cart(response.data.noofproduct));
          localStorage.setItem("nos", response.data.noofproduct);
          setproduct(response.data.products);
          settotal(response.data.summery);
          setloading(false);
        })
        .catch((response) => {
          console.log(response);
          console.log("error");
        });
    }
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

    if (localStorage.getItem("token")) {
      axios({
        url: "http://localhost:8080/getcart",
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
    } else {
      window.confirm("hey");
    }
  };
  const handlechekout = () => {
    history.push("/checkout/shopping");
  };
  return (
    <div className="cart-section">
      {product === null ||
      (product && product.cartitem && product.cartitem.length === 0) ? (
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
        <div>
          {loading ? (
            <Dataloading>*</Dataloading>
          ) : (
            <>
              {product && product.cartitem && product.cartitem.length >= 1 && (
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
                            {product.cartitem.length}
                            &nbsp;items
                          </div>
                        </div>
                      </div>
                      {product.cartitem.map((i) => {
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
                                  <option
                                    value={10}
                                    selected={10 === i.quantity}
                                  >
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
                        <button className="btn" onClick={() => handlechekout()}>
                          CHECKOUT
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};
