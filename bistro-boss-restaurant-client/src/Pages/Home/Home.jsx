import Banner from "../../Components/Banner/Banner";
import Categorys from "../../Components/Categorys/Categorys";
import Featured from "../../Components/Feature/Featured";
import OurMenu from "../../Components/OurMenu/OurMenu";

const Home = () => {
  return (
    <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto pb-32">
      <Banner></Banner>
      <Categorys></Categorys>
      <OurMenu></OurMenu>
      <Featured></Featured>
    </div>
  );
};

export default Home;
