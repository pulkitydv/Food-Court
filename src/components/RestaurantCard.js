import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, locality } =
    resData?.info;

  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="m-4 p-4 w-[250px] bg-pink-50 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
      <img
        className="w-full rounded-lg object-cover h-[180px]"
        alt="res-img"
        src={CDN_URL + cloudinaryImageId.replace(/image Preview/i, "").trim()}
      />
      <div className="restro-details p-2">
        <h4 className="font-bold text-xl py-2 text-gray-800 truncate">
          {name}
        </h4>
        <h4 className="text-gray-600 truncate">{cuisines.join(", ")}</h4>
        <h4 className="text-gray-500 text-sm py-1">{locality}</h4>

        <div className="flex items-center text-sm font-semibold mt-2">
          <span className="text-green-600">{avgRating} stars</span>
          <span className="mx-2">•</span>
          <span className="text-gray-600">{deliveryTime} mins</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
