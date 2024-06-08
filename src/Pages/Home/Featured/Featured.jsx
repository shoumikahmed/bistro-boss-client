import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

export default function Featured() {
  return (
    <div className="featured-item bg-fixed text-white pt-6 my-20">
      <SectionTitle
        subHeading="check it out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36 ">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10 bg-black bg-opacity-40 p-6 rounded">
          <p className="font-semibold">June 06,2024</p>
          <p className="uppercase font-semibold my-1">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quidem
            praesentium facere mollitia. Quod perspiciatis quos sequi quisquam,
          </p>
          <button className="btn btn-outline text-white mt-3 border-0 border-b-4 ">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
