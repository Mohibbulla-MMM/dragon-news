import Adds from "../../components/Adds";
import FindUsOn from "../../components/FindUsOn";
import NewsCatagories from "../../components/NewsCatagories/NewsCatagories";
import Qzone from "../../components/Qzone/Qzone";
import StickyBottom from "../../components/StickyBottom";
import UserLogin from "../../components/UserLogin";
import Header from "../../shared/Header/Header";
// import LeftSideNav from "../../shared/LeftSideNav/LeftSideNav";
import NavBar from "../../shared/NavBar/NavBar";

import BrekingNews from "./BrekingNews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BrekingNews></BrekingNews>
      <NavBar></NavBar>
      <div className="grid  grid-cols-2 md:grid-cols-4 gap-6 ">
        <div className="md:col-span-1 col-span-2 p-4 bg-gray-950 ">
          <div className="scroll-bar-none md:sticky md:top-1 overflow-x-hidden">
            <StickyBottom>
              <NewsCatagories></NewsCatagories>
              {/* <LeftSideNav></LeftSideNav> */}
            </StickyBottom>
          </div>
        </div>
        <div className="col-span-2 bg-gray-950 p-4">
          <h2> Navbar comming soon......</h2>
        </div>

        <div className=" md:col-span-1 col-span-2 p-4 bg-gray-950 space-y-6 ">
          <div className="scroll-bar-none md:sticky md:top-1 ">
            <StickyBottom>
              <UserLogin></UserLogin>
              <FindUsOn></FindUsOn>
              <Qzone></Qzone>
              <Adds></Adds>
            </StickyBottom>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
