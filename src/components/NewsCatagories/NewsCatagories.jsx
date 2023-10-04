import { useEffect, useState } from "react";
import DynamicApi from "../../utility/DynamicApi";
import { NavLink } from "react-router-dom";

const NewsCatagories = () => {
  const [catagories, setCatagories] = useState([]);
  const data = DynamicApi("categories.json");
  useEffect(() => {
    setCatagories(data);
  }, [data]);
  //   console.log(catagories);

  return (
    <div>
      <h2 className="text-xl font-bold">All Caterogy</h2>
      <div>
        {catagories.map((data) => (
          <div key={data.id}>
            <NavLink
              to={`/catagories/${data.id}`}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-gray-900 text-white font-bold p-2"
                  : " p-2"
              }
            >
              <button
                className="p-2 px-3 hover:bg-gray-900 
              hover:text-white
              w-full text-left rounded-md "
              >
                {data.name}
              </button>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCatagories;
