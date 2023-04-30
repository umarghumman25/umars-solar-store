import React from "react";

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat111.jpg",
      cateName: "Solar panels",
    },
    {
      cateImg: "./images/category/cat112.jpg",
      cateName: "Battery",
    },
    {
      cateImg: "./images/category/cat113.jpg",
      cateName: "Inverter",
    },
    {
      cateImg: "./images/category/cat114.jpg",
      cateName: "Japanes panels",
    },
    {
      cateImg: "./images/category/cat115.jpg",
      cateName: "Solar Frames",
    },
    {
      cateImg: "./images/category/cat116.jpg",
      cateName: "Solar Cables",
    },
    {
      cateImg: "./images/category/cat117.png",
      cateName: "Schneider Electric",
    },
    {
      cateImg: "./images/category/cat118.jpg",
      cateName: "AGS Battery",
    },
    {
      cateImg: "./images/category/cat119.jpg",
      cateName: "T Solars",
    },
  ];

  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
