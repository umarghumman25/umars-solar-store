import React, { useState, useEffect } from "react"
import axios from 'axios';

const ShopCart = ({ shopItems, addToCart }) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllStudents = async() => {
      try {
        const products1 = await axios.get("http://127.0.0.1:8000/api/products");
        console.log(products1.data);
        setProducts(products1.data);
      }
      catch (error) {
        console.log(error);
      }
    }

    getAllStudents();
  }, []);

  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  return (
    <>
      {products && products.map((item) => {
        return (
          <div className='box'>
            <div className='product mtop'>
              <div className='img'>
                <span className='discount'>{10}% Off</span>
                <img src={`http://127.0.0.1:8000/uploads/${item.image}`} alt='logo' style={{ width: "200px", height: "300px" }} />
                <div className='product-like'>
                  <label>{count}</label> <br />
                  <i className='fa-regular fa-heart' onClick={increment}></i>
                </div>
              </div>
              <div className='product-details'>
                <h3>{item.pname}</h3>
                <div className='rate'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
                <div className='price'>
                  <h4>{item.Price}.00 </h4>

                  <button onClick={() => addToCart(item)}>
                    <i className='fa fa-plus'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ShopCart
