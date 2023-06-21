import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "LONGI Solar",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Canadian Solar",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "JinKo Solar",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "AGS",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "GROWATT",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "DAEWOO BATTERY",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex' style={{justifyContent:"space-around"}}>
          <h1>Brands </h1>
          <h1>Shops </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        {/* <div className='box box2'>
          <button>View All Brands</button>
        </div> */}
      </div>
    </>
  )
}

export default Catg
