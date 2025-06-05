import { FC, JSX } from "react";
import { Link } from "react-router-dom";


interface ISingleCourse {
  title: string;
  img: string;
  progress: number;
  path: string;
}

interface ISingleCourseProps {
  course: ISingleCourse;
}

const SingleCourse: FC<ISingleCourseProps> = ({ course }): JSX.Element => {
  return (
    <>
      <Link to={course.path} className="group relative block bg-black rounded-2xl">
        <img
          alt={course.title}
          src={course.img}
          className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-2xl"
        />

        <div className="relative p-4 sm:p-6 lg:p-8 rounded-2xl">

          <p className="text-xl font-bold text-right text-white sm:text-2xl">{course.title}</p>

          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <Link to={course.path} className="block text-white text-center border-2 py-2.5 px-3.5 rounded-[10px]">View Course</Link>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

/*
padding: 10px 15px;
    border-radius: 10px;
*/

export default SingleCourse;
