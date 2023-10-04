import qzone1 from "../../assets/qZone1.png";
import qzone2 from "../../assets/qZone2.png";
import qzone3 from "../../assets/qZone3.png";

const Qzone = () => {
  return (
    <div className="bg-gray-900 p-3 ">
      <h1 className="text-3xl my-3 font-semibold">Q-Zonw</h1>
      <div className="space-y-3">
        <figure>
          <img src={qzone1} alt="" />
        </figure>
        <figure>
          <img src={qzone2} alt="" />
        </figure>
        <figure>
          <img src={qzone3} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default Qzone;
