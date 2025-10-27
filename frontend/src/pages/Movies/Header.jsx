import { Link } from "react-router-dom";
import { useGetNewMovieQuery } from "../../redux/api/movies";
import SliderUtil from "../../components/SliderUtil";

export const Header = () => {
  const { data } = useGetNewMovieQuery();

  return (
    <div className="flex flex-col mt-[2rem] ml-[2rem] md:flex-row justify-between items-center md:items-start border-2 border-red-300 p-4">
      <nav className="w-full md:w-[10rem] ml-0 md:ml-2 mb-4 md:mb-0 border-2 border-yellow-300 ">
        <Link
          to="/"
          className="transition duration-300 ease-in-out hover:text-black text-center hover:bg-teal-100 block p-2 rounded mb-1 md:mb-2 text-lg "
        >
          Home{" "}
        </Link>

        <Link
          to="/movies"
          className="transition duration-300 ease-in-out hover:text-black text-center hover:bg-teal-100 block p-2 rounded mb-1 md:mb-2 text-lg "
        >
          Browse Movies
        </Link>
      </nav>
      <div className="w-full md:w-[80%] mr-0 md:mr-2 border-yellow-300 border-2">
        <SliderUtil data={data} />
      </div>
    </div>
  );
};
