import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import Categorys from "../../Components/Categorys/Categorys";
import ChefRecommends from "../../Components/ChefRecommends/ChefRecommends";
import Featured from "../../Components/Feature/Featured";
import OurMenu from "../../Components/OurMenu/OurMenu";
import Testimonials from "../../Components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto pb-32">
      <Helmet>
        <title>Home | BISTRO BOSS</title>
      </Helmet>
      <Banner></Banner>
      <Categorys></Categorys>
      <OurMenu></OurMenu>
      <ChefRecommends></ChefRecommends>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
