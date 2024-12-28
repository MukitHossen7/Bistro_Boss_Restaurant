import Banner from "../../Components/Banner/Banner";
import Categorys from "../../Components/Categorys/Categorys";

const Home = () => {
  return (
    <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto">
      <Banner></Banner>
      <Categorys></Categorys>
    </div>
  );
};

export default Home;
