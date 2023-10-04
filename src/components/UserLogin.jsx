import { FaGithub, FaGoogle } from "react-icons/fa";
const UserLogin = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold my-3">Login With</h1>
      <div className="flex flex-col gap-3">
        <button className="btn btn-outline hover:text-blue-800 ">
          <i className="text-3xl ">
            <FaGoogle></FaGoogle>
          </i>
          <p>Login With Google</p>
        </button>
        <button className="btn btn-outline hover:text-gray-800 ">
          <i className="text-3xl  ">
            <FaGithub></FaGithub>
          </i>
          <p>Login With Github</p>
        </button>
      </div>
    </div>
  );
};



export default UserLogin;
