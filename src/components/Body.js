import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Restro_Api } from "../utils/constants";

const Body = function () {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [btnName, setBtnName] = useState("Top Rated Restaurants");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Restro_Api);

    const json = await data.json();

    setlistOfRestaurants(
      // Optional Chaining
      json?.data?.cards.find(
        (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurant(
      json?.data?.cards.find(
        (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Conditional Rendering
  if (listOfRestaurants.length == 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter flex ">
        <div className="p-4 m-3">
          <input
            type="text"
            className="border to-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-3  py-2 bg-green-100 m-4 cursor-pointer rounded-xl"
            onClick={() => {
              setFilteredRestaurant(
                listOfRestaurants.filter((restro) =>
                  restro?.info?.name
                    ?.toLowerCase()
                    .includes(searchText.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>

        <div className="p-4 m-3 flex items-center">
          <button
            className="filter-btn px-3  py-2 bg-red-100 m-4 cursor-pointer rounded-xl"
            onClick={() => {
              btnName === "Top Rated Restaurants"
                ? setFilteredRestaurant(
                    listOfRestaurants.filter((res) => res.info.avgRating > 4.3)
                  )
                : setFilteredRestaurant(listOfRestaurants);

              btnName === "Top Rated Restaurants"
                ? setBtnName("Show All Restaurants")
                : setBtnName("Top Rated Restaurants");
            }}
          >
            {btnName}
          </button>
        </div>
      </div>

      <div className="res-container flex flex-wrap justify-center gap-x-5">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
