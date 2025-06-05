import { FC, JSX } from "react";
import { TbClockHour4Filled } from "react-icons/tb";
import { AiFillFire } from "react-icons/ai";
import { ICourses } from "../CoursesWidget/CoursesWidget";

interface CourseWidgetProps {
  course: ICourses;
}
const CourseWidget: FC<CourseWidgetProps> = ({ course }): JSX.Element => {
  return (
    <>
      <section className="flex items-center justify-between flex-col lg:flex-row gap-2.5 grow px-8 py-4 bg-gray-200 rounded-2xl my-4 lg:text-left text-center">
        <img src={course.img} alt="courseImg" />
        <div className="">
          <h3 className="font-bold">{course.title}</h3>
          <span className="text-[13px]">{course.instructor}</span>
        </div>
        <div className="time flex gap-1 items-center ">
          <TbClockHour4Filled />
          <span className="text-[13px]">{course.hours}h {course.min}min</span>
        </div>
        <div className="time flex gap-1 items-center ">
          <AiFillFire />
          <span className="text-[13px]">{course.rate}</span>
        </div>
        <button className="bg-black text-white rounded-xl px-8 py-2">
          View
        </button>
      </section>
    </>
  );
};

export default CourseWidget;
