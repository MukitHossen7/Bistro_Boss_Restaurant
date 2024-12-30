import Cover from "../Shares/Cover/Cover";
import shopBanner from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../CustomHooks/useMenu";
import FoodsCard from "../../Components/FoodsCard/Foodscard";
const ShopPage = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div className="pb-24">
      {/* shop banner */}
      <Cover
        img={shopBanner}
        title="Our Shop"
        description="Great for a diverse food-related store?"
      ></Cover>
      <div className="text-center w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto mt-24">
        <Tabs className="text-sm font-semibold">
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {salads.map((food) => (
                <FoodsCard key={food._id} food={food}></FoodsCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {pizzas.map((food) => (
                <FoodsCard key={food._id} food={food}></FoodsCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {soups.map((food) => (
                <FoodsCard key={food._id} food={food}></FoodsCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {desserts.map((food) => (
                <FoodsCard key={food._id} food={food}></FoodsCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {drinks.map((food) => (
                <FoodsCard key={food._id} food={food}></FoodsCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopPage;
