import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  console.log(resInfo);
  

  const { name, costForTwoMessage, cuisines, avgRating, totalRatingsString } =
    resInfo?.cards.find((c) => c?.card?.card?.info)?.card?.card?.info || {};

  const itemCards = resInfo?.cards
    .find((c) => c?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(
      (c) => c?.card?.card?.itemCards
    )?.card?.card?.itemCards;

  const categories = resInfo?.cards
    .find((c) => c?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  return (
    <div className="w-6/12 mx-auto">
      <h1 className="font-bold text-3xl my-4">{name}</h1>
        <div className="my-1 font-bold">⭐ {avgRating} ({totalRatingsString})</div> 
        <div className="font-bold text-lg">
          <span className="text-red-600 underline cursor-pointer">{cuisines.join(", ")}</span> -{" "}
          {costForTwoMessage}
        </div>

      {/* Categories */}
      <div className="space-y-7">
        {categories.map((category, index) => (
          <RestaurantCategory data={category?.card?.card} key={index} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
