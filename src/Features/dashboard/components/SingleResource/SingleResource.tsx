import { FC, JSX } from "react";
import { Link } from "react-router-dom";

interface ISingleResource {
  title: string;
  img: string;
  path: string;
}

interface ISingleResourceProps {
  resource: ISingleResource;
}

const SingleResource: FC<ISingleResourceProps> = ({
  resource,
}): JSX.Element => {
  return (
    <>
      <Link
        to={resource.path}
        className="group relative block bg-black rounded-2xl">
        <img
          alt={resource.title}
          src={resource.img}
          className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-2xl"
        />

        <div className="relative p-4 sm:p-6 lg:p-8 rounded-2xl">
          <p className="absolute top-1/2 -translate-y-1/2 w-fit px-3.5 py-4 text-[14px] md:text-xl font-bold text-white bg-black sm:text-2xl rounded-2xl">
            {resource.title}
          </p>

          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <Link
                to={resource.path}
                className="block text-white text-center border-2 py-2.5 px-3.5 rounded-[10px]">
                View Resource
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SingleResource;
