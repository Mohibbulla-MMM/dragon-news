import { useEffect, useState } from "react";
import DynamicApi from "../../utility/DynamicApi";
import { useParams } from "react-router-dom";
import UserLogin from "../UserLogin";
import FindUsOn from "../FindUsOn";
import Qzone from "../Qzone/Qzone";
import Header from "../../shared/Header/Header";
import StickyBottom from "../StickyBottom";

const NewsCatagory = () => {
  const [catagorie, setCatagorie] = useState({});

  const data = DynamicApi("../news.json");
  const { id } = useParams();

  useEffect(() => {
    const dataFilter =
      data &&
      data?.find((item) => parseFloat(item.category_id) === parseFloat(id));
    // console.log(dataFilter);
    setCatagorie(dataFilter);
  }, [data, id]);
  console.log(catagorie);
  const {
    author,
    details,
    image_url,
    rating,
    thumbnail_url,
    title,
    total_view,
  } = catagorie || {};
  return (
    <div className="max-w-6xl mx-auto px-3">
      <Header></Header>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-6 ">
        {/* news details container  */}
        <div className="col-span-1 md:col-span-3 space-y-4">
          <h2 className="text-3xl font-semibold">Dragon News </h2>
          <div className="p-4 border-2  border-gray-500 rounded-lg ">
            <figure>
              <img className="w-full" src={image_url} alt="" />
            </figure>
            <h1 className="text-2xl font-semibold text-gray-300">{title}</h1>
            <p>{details}</p>
            {/* button */}
            <div>
              <button className="btn"></button>
            </div>
          </div>
        </div>

        {/* right side bar container */}
        <div className="col-span-1  ">
          <div className="scroll-bar-none md:sticky  md:top-0 ">
            <StickyBottom>
              <UserLogin></UserLogin>
              <FindUsOn></FindUsOn>
              <Qzone></Qzone>
            </StickyBottom>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCatagory;
