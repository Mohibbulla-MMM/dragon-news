import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
const FindUsOn = () => {
  return (
    <div>
      <div>
        <h2 className="text-3xl my-4 font-semibold">Find Us On</h2>
        <div className="border border-gray-500 rounded-md">
          <div className="border-b border-gray-500   flex items-center gap-3 p-3 px-4 ">
            <i className="text-3xl text-blue-400 ">
              <FaFacebook></FaFacebook>
            </i>
            <p>Facebook</p>
          </div>
          <div className="border-b border-gray-500   flex items-center gap-3 p-3 px-4 ">
            <i className="text-3xl text-gray-300">
              <FaGithub></FaGithub>
            </i>
            <p>GitHub</p>
          </div>
          <div className="border-b border-gray-500   flex items-center gap-3 p-3 px-4 ">
            <i className="text-3xl text-red-500">
              <FaInstagram></FaInstagram>
            </i>
            <p>Instragram</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindUsOn;
