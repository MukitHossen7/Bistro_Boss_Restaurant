/* eslint-disable react/prop-types */
const Cover = ({ img, title, description }) => {
  return (
    <div>
      <div
        className="hero py-28 px-72"
        style={{
          backgroundImage: `url("${img}")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
        <div className="hero-content text-white text-center">
          <div className="py-10">
            <h1 className="mb-5 text-3xl lg:text-6xl font-semibold uppercase">
              {title}
            </h1>
            <p className="mb-5 text-lg lg:text-xl">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
