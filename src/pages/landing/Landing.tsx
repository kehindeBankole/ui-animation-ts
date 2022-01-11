import React from "react";
import "./Landing.scss";
import product from "../../assets/Product.png";
import { ReactComponent as Star } from "../../assets/star.svg";
function Landing() {
  return (
    <div className="container">
      <img src={product} className="product" />
      <div className="light-side">
        <div className="content">
          <h1>MAXTER 7.1 SURROUND</h1>
          <div className="box"></div>
          <div className="stars">
            {Array.from({ length: 5 }, (v, i) => i).map((item, index) => (
              <Star style={{alignSelf:"center"}}/>
            ))}

            <p>(11.893 Bewertungen)</p>
          </div>
          <p>
            Bester 7.1-Surround-Sound und tiefe Bässe ganz ohne große Anlage -
            das MAXTER 7.1 Surround USB Gaming Headset für den PC macht es
            möglich.
          </p>
          <p className="price">
          79,99€
          </p>
          <p className="slash">
          129,99€
          </p>
        </div>
      </div>
      <div className="dark-side">d</div>
    </div>
  );
}

export default Landing;
