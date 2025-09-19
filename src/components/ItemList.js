import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-3 border-gray-300 border-b-3 flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>

          <div className="w-3/12 p-4 flex justify-center">
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="w-32 h-32 object-cover rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
