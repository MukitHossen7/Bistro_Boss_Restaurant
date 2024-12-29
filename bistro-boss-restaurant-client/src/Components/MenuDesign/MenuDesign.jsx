/* eslint-disable react/prop-types */
const MenuDesign = ({ menuItem }) => {
  const { name, recipe, image, price } = menuItem;
  return (
    <div className="flex gap-4 items-start">
      <img
        src={image}
        className="w-28 object-cover"
        style={{ borderRadius: "0px 200px 200px 200px" }}
      ></img>
      <div>
        <h3 className="text-xl">{name} -------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-[#BB8506] text-xl">${price}</p>
    </div>
  );
};

export default MenuDesign;
