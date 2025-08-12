import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, locality } =
    resData?.info;

  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-img"
        src={CDN_URL + cloudinaryImageId.replace(/image Preview/i, "").trim()}
      />
      <div className="restro-details">
        <h4>{name}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{deliveryTime} mins</h4>
        <h4>{locality}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
