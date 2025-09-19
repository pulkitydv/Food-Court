import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  return (
    <div>
      <div className="bg-gray-50 shadow-sm my-7 p-4 ">
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {data.title} ({data?.itemCards?.length})
          </span>
          <span>⬇️</span>
        </div>

        <ItemList items={data?.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategory;
