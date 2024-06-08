import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

export default function PopulerMenu() {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data.filter((item) => item.category === "popular");
        setMenu(popularItem);
      });
  }, []);

  return (
    <section className="mb-12">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"from our menu"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-6">
        {menu?.map((item) => (
          <MenuItem key={item?._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center items-center mt-8">
        <button className="btn  btn-outline mt-3 border-0 border-b-4">
          View Full Menu
        </button>
      </div>
    </section>
  );
}
