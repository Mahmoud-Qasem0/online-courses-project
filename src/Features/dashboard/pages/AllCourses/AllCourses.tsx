import { FC, JSX } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import CoursesFilter from "../../components/CoursesFilter/CoursesFilter";
import CoursesList from "../../components/CoursesList/CoursesList";

const coursesPageFilters = ["Past", "In Progress", "Future"];

const AllCourses: FC = (): JSX.Element => {
  return (
    <>
      <section className="bg-gray-200 px-4 py-1 rounded-2xl min-h-screen mx-2 mb-6">
        <div className="flex items-center justify-between">
          <SectionTitle title="Courses" />
          <div className="text-white">
            <CoursesFilter filters={coursesPageFilters} />
          </div>
        </div>
        <CoursesList />
      </section>
    </>
  );
};

export default AllCourses;
