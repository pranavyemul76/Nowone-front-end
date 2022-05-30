import React from "react";
import { useHistory } from "react-router-dom";
import "../Style/Home.css";

const Home = (props) => {
  let history = useHistory();

  const pushtofilter = (id) => {
    history.push(`/${id}`);
  };
  return (
    <div className="container-fluid">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100  carousel_img"
              src="https://i.pinimg.com/736x/e6/e6/4f/e6e64f9ab1e500dc262d789e8579217f.jpg"
              alt="First slide"
              height="300px"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100  carousel_img"
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/online-shopping-banner-template-design-4becd222cad3ce1511f32e5cd53a7dd5_screen.jpg?ts=1624509601"
              alt="Second slide"
              height="300px"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 carousel_img"
              src="https://assetscdn1.paytm.com/images/catalog/view_item/787364/1617369686163.jpg?imwidth=480&impolicy=hq"
              alt="Third slide"
              height="500px"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="www.google.comcarouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="www.google.comcarouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <h3
        style={{ textAlign: "center" }}
        data-aos="zoom-in-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1100"
      >
        TOP CATEGORIES TO BAG
      </h3>
      <hr
        style={{
          textAlign: "center",
          width: "40%",
          backgroundColor: "red",
        }}
      />
      <div className="container top-category">
        <div className="row">
          <div className="col-sm-2 top_cat_item">
            <div
              className="t-shirt"
              onClick={() => {
                pushtofilter("men-casual-shirts");
              }}
            >
              <img
                className="img_shirt"
                src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737616-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-5.jpg"
                alt="T-shirt"
              />
            </div>
            <p className="font-t_shirt">Shirt</p>
          </div>
          <div className="col-sm-2 top_cat_item">
            <div
              className="t-shirt"
              onClick={() => {
                pushtofilter("men-tshirts");
              }}
            >
              <img
                className="img_shirt"
                src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10424682/2019/10/30/a034179e-9db3-4a3a-bce0-abae4d1413531572419249956-Roadster-Men-Tshirts-2571572419248675-1.jpg"
                alt="T-shirt"
              />
            </div>
            <p className="font-t_shirt"> T-shirt</p>
          </div>
          <div className="col-sm-2 top_cat_item">
            <div
              className="t-shirt"
              onClick={() => {
                pushtofilter("men-jeans");
              }}
            >
              <img
                className="img_shirt"
                src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14852034/2021/7/30/bd222676-68cf-48ed-a68a-bfe5cd6afe481627619266352-Levis-Men-Jeans-9271627619265384-1.jpg"
                alt="T-shirt"
              />
            </div>
            <p className="font-t_shirt"> Jense</p>
          </div>
          <div className="col-sm-2 top_cat_item">
            <div
              className="t-shirt"
              onClick={() => {
                pushtofilter("men-casual-trousers");
              }}
            >
              <img
                className="img_shirt"
                src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/5415202/2018/5/23/7a32e5c1-6ac6-4219-984e-63cb68497fa21527075068613-Roadster-Men-Trousers-6171527075067295-1.jpg"
                alt="T-shirt"
              />
            </div>
            <p className="font-t_shirt"> Trousers</p>
          </div>
          <div className="col-sm-2 top_cat_item">
            <div
              className="t-shirt"
              onClick={() => {
                pushtofilter("women-kurta-sets");
              }}
            >
              <img
                className="img_shirt"
                src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14046594/2021/7/9/b097caa8-6f83-4ffc-aeca-9e154e39a9731625806322462-Libas-Women-Navy-Blue--Yellow-Floral-Printed-Pure-Cotton-Kur-1.jpg"
                alt="T-shirt"
              />
            </div>
            <p className="font-t_shirt"> Kurtas</p>
          </div>
          <div className="col-sm-2 top_cat_item">
            <div
              className="t-shirt"
              onClick={() => {
                pushtofilter("women-dresses");
              }}
            >
              <img
                className="img_shirt"
                src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/9/16/25f5b6a7-ce25-4e66-8a61-3aa2037b6c741600207614629-1.jpg"
                alt="T-shirt"
              />
            </div>
            <p className="font-t_shirt"> Dresses</p>
          </div>
          <div className="col-sm-2 top_cat_item">
            <div
              className="t-shirt"
              onClick={() => {
                pushtofilter("women-trousers");
              }}
            >
              <img
                className="img_shirt"
                src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/6993400/2018/7/30/b3d5f951-1149-4217-81a9-f50cb646fa3f1532928738800-PANIT-Women-Trousers-6611532928738642-1.jpg"
                alt="T-shirt"
              />
            </div>
            <p className="font-t_shirt"> Trousers </p>
          </div>
          <div className="col-sm-2 top_cat_item">
            <div
              className="t-shirt"
              onClick={() => {
                pushtofilter("women-jeans");
              }}
            >
              <img
                className="img_shirt"
                src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/6993400/2018/7/30/b3d5f951-1149-4217-81a9-f50cb646fa3f1532928738800-PANIT-Women-Trousers-6611532928738642-1.jpg"
                alt="T-shirt"
              />
            </div>
            <p className="font-t_shirt"> Jense</p>
          </div>
        </div>
      </div>
      {/* */}

      <h3
        style={{ textAlign: "center", marginTop: "40px" }}
        data-aos="zoom-in-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1100"
      >
        {" "}
        FEATURED{" "}
      </h3>
      <hr
        style={{
          textAlign: "center",
          width: "40%",
          backgroundColor: "red",
        }}
      />

      <div className="tranding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3 feature">
              <img
                className="feature_img"
                src="https://i.pinimg.com/originals/1f/27/0d/1f270d76232bf14213c3be13e39fa1b9.jpg"
                width="100%"
                alt="mens_collection"
              />
              <p> MEN COLLECTION</p>
            </div>

            <div className="col-sm-3 feature">
              <img
                className="feature_img"
                src="https://i.pinimg.com/originals/52/f7/00/52f700928746e3897dd7f2f707fe9abc.jpg"
                width="100%"
                alt="women_collection"
              />
              <p> WOMEN COLLECTION</p>
            </div>
            <div className="col-sm-3 feature">
              <img
                className="feature_img"
                src="https://i.pinimg.com/564x/fc/7e/dc/fc7edc4ebadde5fd36f03611a79d181c.jpg"
                width="100%"
                alt="kids collection"
              />
              <p data-aos="fade-left" data-aos-delay="40">
                {" "}
                KIDS COLLECTION
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3
        style={{ textAlign: "center" }}
        data-aos="zoom-in-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        data-aos-once="true"
      >
        {" "}
        CONTACT US{" "}
      </h3>
      <hr
        style={{
          textAlign: "center",
          width: "40%",
          backgroundColor: "red",
          marginTop: "30px",
        }}
      />
    </div>
  );
};

export default Home;
/*
{
  this.state.category.map((item)=>{
    console.log(item.name)
    return (
           item.subcategory.map((item)=>{
             console.log(item.name)
             return (
            <div className="col-sm-2 top_cat_item">
            <div className="t-shirt" onClick={this.pushtofilter}><img className="img_shirt" src={item.img}  alt='T-shirt' /></div>
            <p className='font-t_shirt' >{item.name}</p>
            </div>
           )})
    )
  })
}*/
