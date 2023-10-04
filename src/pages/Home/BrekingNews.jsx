import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BrekingNews = () => {
  return (
    <div className="flex items-center p-3 bg-gray-700">
      <button className="btn  btn-secondary z-10">Latest</button>
      <Marquee className="text-xl" pauseOnHover={true} direction="left">
        <Link to="/">
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link to="/">
          22 can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link to="/">
          33 can be a React component, multiple React components, or just some
          text.
        </Link>
      </Marquee>
    </div>
  );
};

export default BrekingNews;
