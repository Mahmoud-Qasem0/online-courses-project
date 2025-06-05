import { FC, JSX } from "react";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { useAppSelector } from "../../../store/hooks";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Navbar: FC = (): JSX.Element => {
  const { user } = useAppSelector((s) => s.auth);
  return (
    <nav className="flex px-2 py-3 justify-end items-center container flex-wrap">
      <div className="flex justify-end md:justify-between items-center grow gap-4">
        <label
          htmlFor="search"
          className="bg-gray-200 hidden md:block basis-full px-4 py-2 rounded-[10px] relative">
          <FaMagnifyingGlass size={25} className="absolute right-2" />
          <input
            className="outline-0 w-[90%]"
            type="text"
            id="search"
            placeholder="search course"
          />
        </label>
        <div className="">
          <MdOutlineNotificationsActive size={30} />
        </div>
        <div className="user-account">
          <button className="text-2xl font-bold text-white bg-black rounded-[10px] w-10 h-10">
            {user?.email?.charAt(0).toUpperCase()}
          </button>
        </div>
      </div>
      <label
        htmlFor="search"
        className="bg-gray-200 md:hidden  basis-full my-5 px-4 py-2 rounded-[10px] relative">
        <FaMagnifyingGlass size={25} className="absolute right-2" />
        <input
          className="outline-0 w-[90%]"
          type="text"
          id="search"
          placeholder="search course"
        />
      </label>
    </nav>
  );
};

export default Navbar;
