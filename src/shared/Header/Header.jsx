import logo from "../../assets/logo.png";
import moment from "moment/moment";
const Header = () => {
  return (
    <div className="text-center p-4">
      <figure>
        <img className="mx-auto" src={logo} alt="" />
      </figure>
      <p className="">Journalism Without Fear or Favour</p>
      <div>{moment().format("dddd, MMMM D, YYYY")}</div>
    </div>
  );
};

export default Header;
