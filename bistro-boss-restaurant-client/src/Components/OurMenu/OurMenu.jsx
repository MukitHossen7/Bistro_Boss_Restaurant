import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import MenuDesign from "../MenuDesign/MenuDesign";

const OurMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((response) => response.json())
      .then((data) => {
        const category = data.filter((item) => item.category === "popular");
        setMenu(category);
      });
  }, []);
  return (
    <div className="mt-20 ">
      <SectionTitle
        subHeading="Check it out"
        heading="FROM OUR MENU"
      ></SectionTitle>
      <div className="grid lg:grid-cols-2 gap-6 mt-12">
        {menu.map((menuItem) => (
          <div key={menuItem._id}>
            <MenuDesign menuItem={menuItem}></MenuDesign>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="text-base lg:text-lg font-medium  uppercase border-black  border-b-2 px-3 py-1 rounded-md mt-12">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default OurMenu;
