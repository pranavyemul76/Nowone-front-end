import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
function Succcess() {
  const [orders, setorderdata] = React.useState([]);
  const [dataload, setdataload] = React.useState(false);
  const history = useHistory();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  React.useEffect(() => {
    setdataload(false);
    axios({
      url: "http://localhost:8080/getorderproduct",
      method: "GET",
      headers: {
        Authorization: ` Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      console.log(res.data.products);
      setorderdata(res.data.products);
      setdataload(true);
    });
  }, []);

  return (
    <div>
      {dataload ? (
        <section class=" gradient-custom">
          <div class="container  h-100">
            <div class="row d-flex  h-100">
              <div class="col-lg-11 ">
                <div class="card" style={{ borderRadius: "10px" }}>
                  <div class="card-body p-1">
                    <h3 style={{ color: "brown", textAlign: "center" }}>
                      Your Orders
                    </h3>
                    {orders &&
                      orders.orders &&
                      orders.orders.map((i) => {
                        return (
                          <div class="card shadow-0 border mb-4">
                            <div class="card-body">
                              <div class="row">
                                <div
                                  style={{ position: "absolute", right: "3%" }}
                                ></div>
                                <div
                                  class="col-md-2"
                                  onClick={() => {
                                    history.push(`/product/${i.product._id}`);
                                  }}
                                >
                                  <img
                                    src={i.product.searchImage}
                                    style={{
                                      width: "80%",
                                      marginLeft: "17px",
                                    }}
                                    alt="Phone"
                                  />
                                </div>
                                <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                                  <p class="text-muted mb-0">
                                    {i.product.brand}
                                  </p>
                                </div>
                                <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                                  <span>{i.product.primaryColour}</span>
                                </div>

                                <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                                  <span>Qty: {i.quantity}</span>
                                </div>
                                <div class="col-md-2 text-center d-flex justify-content-center align-items-center"></div>
                                <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                                  <sapn> ₹ {i.quantity * i.product.price}</sapn>
                                </div>
                              </div>
                              <hr
                                class="mb-4"
                                style={{
                                  backgroundColor: "#e0e0e0",
                                  opacity: 1,
                                }}
                              />
                              <div class="row d-flex align-items-center">
                                <div class="col-md-2">
                                  <p class="text-muted mb-0 small">
                                    Track Order
                                  </p>
                                </div>

                                <div class="col-md-10">
                                  <div class="d-flex justify-content-around mb-1">
                                    <p class="text-muted mt-1 mb-0 small ms-xl-5">
                                      {orders.createdAt.slice(0, 10)}
                                    </p>
                                    <p class="text-muted mt-1 mb-0 small ms-xl-5">
                                      22-03-2022
                                    </p>
                                    <p class="text-muted mt-1 mb-0 small ms-xl-5">
                                      23-04-2022
                                    </p>
                                  </div>
                                  <div
                                    class="progress"
                                    style={{
                                      height: "8px",
                                      borderRadius: "16px",
                                      transitionDelay: "0s",
                                      transitionDuration: "10s",
                                    }}
                                  >
                                    <div
                                      class="progress-bar"
                                      role="progressbar"
                                      style={{
                                        width: "26%",
                                        borderRadius: "16px",
                                        backgroundColor: "#26a541",
                                        transitionDelay: "1s",
                                        transitionDuration: "3s",
                                      }}
                                      aria-valuenow="65"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                  <div class="d-flex justify-content-around mb-1">
                                    <p class="text-muted mt-1 mb-0 small ms-xl-5">
                                      ordered
                                    </p>
                                    <p class="text-muted mt-1 mb-0 small ms-xl-5">
                                      Out for delivary
                                    </p>
                                    <p class="text-muted mt-1 mb-0 small ms-xl-5">
                                      Delivered
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
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
      )}
    </div>
  );
}

export default Succcess;
