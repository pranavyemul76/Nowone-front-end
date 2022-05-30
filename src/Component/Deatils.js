import React, { useState } from "react";
import "../Style/Detail.css";
import { useDispatch } from "react-redux";
import { Cart } from "../Redux/Actions/FilterProducts.actions.";
import axios from "axios";
import { useHistory } from "react-router-dom";
const Notification = ({ notify }) => {
  return (
    <>
      <div className="notification">{notify}</div>
    </>
  );
};

const Details = (props) => {
  const [data, SetData] = useState([]);
  const [cart, SetCart] = useState();
  const [notify, setnotify] = useState(false);
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const sizehandle = (e) => {
    SetCart(e.target.value);
  };
  const fetches = (id) => {
    if (localStorage.getItem("token")) {
      axios({
        url: "http://localhost:8080/addtocart",
        method: "POST",
        headers: {
          Authorization: ` Bearer ${localStorage.getItem("token")}`,
        },
        data: {
          product: id,
          size: cart,
        },
      }).then((res) => {
        if (res.data.noofproduct) {
          dispatch(Cart(res.data.noofproduct));
          localStorage.setItem("nos", res.data.noofproduct);
        }
        setnotify(res.data.messeage);
        setTimeout(() => {
          setnotify(false);
        }, 5000);
      });
    } else {
      history.push(`/login?redirect=/product/${props.match.params.slug}`);
    }
  };
  const clickhandler = (id) => {
    fetches(id);
  };
  React.useEffect(() => {
    const productid = props.match.params.slug;
    const id = productid;
    setloading(true);
    axios({
      url: `http://localhost:8080/product/${id}`,
      method: "POST",
    })
      .then((res) => {
        SetData(res.data.product);
        setloading(false);
      })
      .catch((err) => {
        console.log("error");
      });
  }, [props.match.params.slug]);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {notify && <Notification notify={notify} />}
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
        <div className="container-fluid detailpage">
          <div className="row" style={{ maring: "0px", padding: "0px" }}>
            {data &&
              data.length >= 1 &&
              data.map((item) => {
                return (
                  <>
                    <div
                      className="col-sm-7"
                      style={{ maring: "0px", padding: "0px" }}
                    >
                      <div className="row">
                        {item.images.map((i) => {
                          return (
                            i.src && (
                              <div style={{ width: "50%", padding: "3px" }}>
                                <img src={i.src} width="100%" alt={i.view} />
                              </div>
                            )
                          );
                        })}
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <div className="product-content">
                        <h3 className="product-title">{item.brand} </h3>

                        <h5 className="product-subtitle"> {item.product} </h5>
                        <h6 className="product-price-title">Special price </h6>
                        <div className="price-section">
                          <div className="Poffer-price"> ₹{item.price} </div>
                          <div className="Pprice"> ₹{item.mrp}</div>
                          <div className="Pdiscount">
                            {item.discountDisplayLabel}
                          </div>
                        </div>
                        <div className="product-rating">
                          <span>
                            {item.rating.toFixed(1)}
                            <i
                              className="fas fa-star"
                              style={{
                                fontSize: "13px",
                                position: "relative",
                                top: "-2.4px",
                                marginLeft: "3px",
                              }}
                            ></i>
                          </span>
                          <label> {item.ratingCount} </label>
                        </div>
                        <div>
                          <div className="size-title"> Select size</div>
                          <ul className="ul-size">
                            {item.sizes.split(",").map((i) => {
                              return (
                                <>
                                  <label>
                                    <input
                                      value={i}
                                      type="radio"
                                      name="hello"
                                      onChange={sizehandle}
                                    />
                                    <span className="sel-size">{i}</span>
                                  </label>
                                </>
                              );
                            })}
                          </ul>
                        </div>
                        <div className="product-detail">
                          <ul>
                            <li>
                              Category: <span>{item.category}</span>
                            </li>
                            <li>
                              Shipping Area: <span>in solapur within 6km</span>
                            </li>
                            <li>
                              Shipping Fee: <span>Free</span>
                            </li>
                          </ul>
                        </div>

                        <button type="button" className="btn Buynow">
                          Buy Now
                        </button>
                        <button
                          type="button"
                          className="btn Addtocart"
                          onClick={() => {
                            clickhandler(item._id);
                          }}
                        >
                          Add to Cart <i className="fas fa-shopping-cart"></i>
                        </button>
                      </div>

                      <div className="social-links">
                        <p>Share At: </p>
                        <a href="/detail">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="/detail">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="/detail">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a href="/detail">
                          <i className="fab fa-whatsapp"></i>
                        </a>
                        <a href="/detail">
                          <i className="fab fa-pinterest">khg</i>
                        </a>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};
export default Details;
/*
  if (cart === undefined) {
      setnotify("select Size");
      setTimeout(() => {
        setnotify(false);
      }, 5000);
    } else {
      setnotify("add to bag successfuly");
      setTimeout(() => {
        setnotify(false);
      }, 5000);
      const localcart =
        (localStorage.getItem("cart") != null &&
          JSON.parse(localStorage.getItem("cart"))) ||
        [];
      localcart.push({
        cart: props.match.params.slug,
        size: cart,
      });

      localStorage.setItem("cart", JSON.stringify(localcart));
      dispatch(Cart(localcart));
    }
   */
