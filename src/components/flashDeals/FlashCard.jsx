import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  );
};
const FlashCard = ({ productItems, addToCart }) => {

  // axios code  - laravel route  return json

  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function getAllStudents() {
      try {
        const students1 = await axios.get("http://127.0.0.1:8000/api/products");
        console.log(students1.data);
        setStudents(students1.data);
      }
      catch (error) {
        console.log(error);
      }
    }

    getAllStudents();
  }, []);



  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>

      <Slider {...settings}>
        {students && students.map((item) => {
          return (
            <div className="box">
              <div className="product mtop">
                <div className="img">
                  <img src={`http://127.0.0.1:8000/uploads/${item.image}`} alt="logo" style={{ width: "200px", height: "300px" }} />
                  <span className="discount">{0}% Off</span>
                  <div className="product-like">
                    <label>{count}</label> <br />
                    <i className="fa-regular fa-heart" onClick={increment}></i>
                  </div>
                </div>
                <div className="product-details">
                  <h3>{item.Pname}</h3>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>

                  <div className="price">
                    <h4>{item.Price}.00 </h4>
                    {/* <p>{item.desc}</p> */}
                    <button onClick={() => addToCart(item)}>
                      <i className="fa fa-plus"></i>
                    </button>

                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>

    </>
  );
};

export default FlashCard;
