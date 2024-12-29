import Cover from "../Shares/Cover/Cover";
import shopBanner from "../../assets/shop/banner2.jpg";
const ShopPage = () => {
  return (
    <div className="pb-20">
      {/* shop banner */}
      <Cover
        img={shopBanner}
        title="Our Shop"
        description="Great for a diverse food-related store?"
      ></Cover>
    </div>
  );
};

export default ShopPage;
