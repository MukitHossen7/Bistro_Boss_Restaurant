import { Helmet } from "react-helmet-async";
import Cover from "../Shares/Cover/Cover";
import coverImg1 from "../../assets/menu/banner3.jpg";
import coverImg2 from "../../assets/menu/dessert-bg.jpeg";
import coverImg3 from "../../assets/menu/pizza-bg.jpg";
import coverImg4 from "../../assets/menu/salad-bg.jpg";
import coverImg5 from "../../assets/menu/soup-bg.jpg";

import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuDesign from "../../Components/MenuDesign/MenuDesign";
import useMenu from "../../CustomHooks/useMenu";
const MenuPage = () => {
  const [menu] = useMenu();
  const offers = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");

  return (
    <div className="pb-10">
      <Helmet>
        <title>Menu | BISTRO BOSS</title>
      </Helmet>
      {/* Menu cover images */}
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
        {/* Offers data */}
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
      {/* Desserts cover images */}
      <div className="mt-12">
        <Cover
          img={coverImg2}
          title="Desserts"
          description="
Desserts are a sweet course typically served at the end of a meal, enhancing the overall dining experience."
        ></Cover>
      </div>
      {/* Desserts data */}
      <div className="  w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto grid lg:grid-cols-2 gap-6 mt-24">
        {desserts.slice(0, 6).map((offer) => (
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
      {/* Pizza cover images */}
      <div className="mt-12">
        <Cover
          img={coverImg3}
          title="Pizza"
          description="Pizza is a popular dish that originated in Italy.It is typically round and flat, topped with a variety of ingredients "
        ></Cover>
      </div>
      {/* Pizza data */}
      <div className=" w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto grid lg:grid-cols-2 gap-6 mt-24">
        {pizzas.slice(0, 6).map((offer) => (
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
      {/* salads cover images */}
      <div className="mt-12">
        <Cover
          img={coverImg4}
          title="Salads"
          description="Salads are a versatile and healthy food option made by combining a variety of fresh ingredients. "
        ></Cover>
      </div>
      {/* Salads data */}
      <div className=" w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto grid lg:grid-cols-2 gap-6 mt-24">
        {salads.slice(0, 6).map((offer) => (
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
      {/* soups cover images */}
      <div className="mt-12">
        <Cover
          img={coverImg5}
          title="Soups"
          description="
Soups are a comforting and versatile dish made by simmering ingredients in water or broth to create a flavorful and nutritious meal. "
        ></Cover>
      </div>
      {/* Soups data */}
      <div className=" w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto grid lg:grid-cols-2 gap-6 mt-24">
        {soups.slice(0, 6).map((offer) => (
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
  );
};

export default MenuPage;
