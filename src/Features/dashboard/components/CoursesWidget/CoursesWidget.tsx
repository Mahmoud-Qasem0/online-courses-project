import { FC, JSX } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import CourseWidget from "../CourseWidget/CourseWidget";
import CourseImage from "../../../../assets/course-img1.png";
import CoursesFilter from "../CoursesFilter/CoursesFilter";

export interface ICourses {
  img: string,
    title: string,
    instructor: string,
    hours: number,
    min: number,
    rate: number,
}

const courses: ICourses[] = [
  {
    img: CourseImage,
    title: "HCI",
    instructor: "Dr. Ruhiu",
    hours: 6,
    min: 45,
    rate: 4.9,
  },
  {
    img: CourseImage,
    title: "HCI",
    instructor: "Dr. Ruhiu",
    hours: 6,
    min: 45,
    rate: 4.9,
  },
  {
    img: CourseImage,
    title: "HCI",
    instructor: "Dr. Ruhiu",
    hours: 6,
    min: 45,
    rate: 4.9,
  },
  {
    img: CourseImage,
    title: "HCI",
    instructor: "Dr. Ruhiu",
    hours: 6,
    min: 45,
    rate: 4.9,
  },
  {
    img: CourseImage,
    title: "HCI",
    instructor: "Dr. Ruhiu",
    hours: 6,
    min: 45,
    rate: 4.9,
  },
];

const coursesGlobalFilters = ["My Courses", "New Courses", "Favorites", "Most Popular"]

const CoursesWidget: FC = (): JSX.Element => {
  return (
    <>
      <SectionTitle title="Courses" />
      <CoursesFilter  filters={coursesGlobalFilters} />
      <ul>
        {courses.map((course, i) => (
          <li key={i}>
            <CourseWidget course={course} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CoursesWidget;
