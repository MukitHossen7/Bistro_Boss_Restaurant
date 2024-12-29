import featured from "../../../src/assets/home/featured.jpg";
import SectionTitle from "../SectionTitle/SectionTitle";
const Featured = () => {
  return (
    <div className="mt-28">
      <div
        className="hero"
        style={{
          backgroundImage: `url(${featured})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="flex flex-col text-white ">
          <div className="pt-10 lg:pt-28 pb-10 lg:pb-12">
            <SectionTitle
              subHeading="Check it out"
              heading="From our menu"
            ></SectionTitle>
          </div>
          <div className=" lg:flex pb-10 px-10 lg:pb-28  lg:px-32 lg:gap-10 items-center space-y-6 lg:space-y-0">
            <img src={featured} className="lg:max-w-md rounded-md"></img>
            <div>
              <h1 className="text-lg lg:text-xl">March 20,2023</h1>
              <h1 className=" uppercase text-xl lg:text-2xl">
                Where can i Get Some
              </h1>
              <p className="mb-5">
                Experience the richness of flavors with our featured dish,
                crafted using the finest ingredients and a passion for
                perfection. This meal is sure to delight your taste buds and
                leave you wanting more.
              </p>
              <button className="btn btn-primary uppercase">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
