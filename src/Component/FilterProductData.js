import React from "react";
import "../Style/FilterProductData.css";
import { useHistory } from "react-router";

const FilterProductData = ({ products }) => {
  let history = useHistory();
  const pushtodetail = (id) => {
    history.push(`/product/${id}`);
  };

  return (
    <>
      <div className="col-sm-9" style={{ margin: "0px", padding: "0px" }}>
        <div className="row">
          {products.map((item) => {
            return (
              <div
                className={`filter-product`}
                onClick={() => {
                  pushtodetail(item._id);
                }}
              >
                <div className="filter-product-layout">
                  <div className="product-img-section">
                    <img
                      src={item.searchImage}
                      id="filter-img-one"
                      alt="none"
                    />
                    <img
                      src={item.searchImage}
                      id="filter-img-second"
                      alt="none"
                    />
                  </div>
                  <div className="product-description">
                    <div className="filter-product-name">
                      <span>{item.brand}</span>
                    </div>
                    <div className="filter-name-description">
                      {item.additionalInfo}
                    </div>
                    <div className="filter-price-section">
                      <span className="filter-product-best-price">
                        ₹ {item.price}
                      </span>
                      <span className="filter-product-price">
                        ₹ {item.mrp}{" "}
                      </span>
                      <span className="filter-product-discount">
                        {item.discountDisplayLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default FilterProductData;
