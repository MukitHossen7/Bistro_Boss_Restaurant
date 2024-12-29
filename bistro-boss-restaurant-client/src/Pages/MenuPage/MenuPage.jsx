import { Helmet } from "react-helmet-async";
import Cover from "../Shares/Cover/Cover";
import coverImg1 from "../../assets/menu/banner3.jpg";
const MenuPage = () => {
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
    </div>
  );
};

export default MenuPage;
