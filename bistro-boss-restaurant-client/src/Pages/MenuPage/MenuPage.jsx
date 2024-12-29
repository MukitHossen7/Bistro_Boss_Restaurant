import { Helmet } from "react-helmet-async";
import Cover from "../Shares/Cover/Cover";
import coverImg1 from "../../assets/menu/banner3.jpg";
import coverImg2 from "../../assets/menu/dessert-bg.jpeg";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import MenuDesign from "../../Components/MenuDesign/MenuDesign";
const MenuPage = () => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((response) => response.json())
      .then((data) => {
        const offer = data.filter((item) => item.category === "offered");
        setOffers(offer);
      });
  }, []);
  console.log(offers);
  return (
    <div className="pb-32">
      <Helmet>
        <title>Menu | BISTRO BOSS</title>
      </Helmet>
      <Cover
        img={coverImg1}
        title="Our Menu"
        description="Would you like to try a dish?"
      ></Cover>
      <div className="mt-28 w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto ">
        <SectionTitle
          subHeading="Don't miss"
          heading="Today's Offer"
        ></SectionTitle>
        <div className="grid lg:grid-cols-2 gap-6 mt-12">
          {offers.map((offer) => (
            <div key={offer._id}>
              <MenuDesign menuItem={offer}></MenuDesign>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="text-base lg:text-lg font-medium  uppercase border-black  border-b-2 px-3 py-1 rounded-md mt-12">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </div>
      </div>
      <div className="mt-12">
        <Cover
          img={coverImg2}
          title="Desserts"
          description="
Desserts are a sweet course typically served at the end of a meal, enhancing the overall dining experience."
        ></Cover>
      </div>
    </div>
  );
};

export default MenuPage;
