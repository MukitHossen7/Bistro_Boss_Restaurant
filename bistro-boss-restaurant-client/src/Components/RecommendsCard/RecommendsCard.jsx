import img1 from "../../../src/assets/home/slide1.jpg";
const RecommendsCard = () => {
  return (
    <div>
      <div className="mt-12">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img src={img1} className="object-cover w-full h-64" alt="" />
            <div className="p-5 border border-t-0 text-center bg-gray-100">
              <h3 className="inline-block mb-2 text-xl lg:text-2xl font-semibold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">
                Caeser Salad
              </h3>
              <p className="mb-6 text-gray-700">
                Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
              </p>
              <button className="inline-flex uppercase items-center font-medium text-base lg:text-lg text-[#BB8506] transition-colors duration-200 border-b-2 border-[#BB8506] px-5 rounded-lg py-2 bg-gray-200 hover:bg-[#1F2937] hover:border-b-0 hover:py-3">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img src={img1} className="object-cover w-full h-64" alt="" />
            <div className="p-5 border border-t-0 text-center bg-gray-100">
              <h3 className="inline-block mb-2 text-xl lg:text-2xl font-semibold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">
                Caeser Salad
              </h3>
              <p className="mb-6 text-gray-700">
                Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
              </p>
              <button className="inline-flex uppercase items-center font-medium text-base lg:text-lg text-[#BB8506] transition-colors duration-200 border-b-2 border-[#BB8506] px-5 rounded-lg py-2 bg-gray-200 hover:bg-[#1F2937] hover:border-b-0 hover:py-3">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img src={img1} className="object-cover w-full h-64" alt="" />
            <div className="p-5 border border-t-0 text-center bg-gray-100">
              <h3 className="inline-block mb-2 text-xl lg:text-2xl font-semibold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">
                Caeser Salad
              </h3>
              <p className="mb-6 text-gray-700">
                Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
              </p>
              <button className="inline-flex uppercase items-center font-medium text-base lg:text-lg text-[#BB8506] transition-colors duration-200 border-b-2 border-[#BB8506] px-5 rounded-lg py-2 bg-gray-200 hover:bg-[#1F2937] hover:border-b-0 hover:py-3">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendsCard;
