import RecommendsCard from "../RecommendsCard/RecommendsCard";
import SectionTitle from "../SectionTitle/SectionTitle";

const ChefRecommends = () => {
  return (
    <div className="mt-24">
      <SectionTitle
        subHeading="Should Try"
        heading="Chef Recommends"
      ></SectionTitle>
      <RecommendsCard></RecommendsCard>
    </div>
  );
};

export default ChefRecommends;
