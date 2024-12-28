/* eslint-disable react/prop-types */
const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-96 mx-auto text-center">
      <p className="text-[#D99904] text-base lg:text-xl mb-2">
        {" "}
        ---{subHeading}---{" "}
      </p>
      <h3 className="text-2xl lg:text-4xl uppercase border-y-2 py-3">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
