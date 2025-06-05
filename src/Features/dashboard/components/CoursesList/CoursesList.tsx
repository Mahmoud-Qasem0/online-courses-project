import { FC, JSX } from "react";
import SingleCourse from "../SingleCourse/SingleCourse";
import AutomataTheoryImg from "../../../../assets/AutomataTheory.png" 
import WebDevImg from "../../../../assets/WebProgramming.png" 
import Probability from "../../../../assets/Probability.png" 

const courses = [
  {
    title: "Automata Theory",
    img: AutomataTheoryImg,
    progress: 30,
    path: "/dashboard/all-courses",
  },
  {
    title: "Web Programming",
    img: WebDevImg,
    progress: 30,
    path: "/dashboard/all-courses",
  },
  {
    title: "Probability",
    img: Probability,
    progress: 30,
    path: "/dashboard/all-courses",
  },
];

const CoursesList: FC = (): JSX.Element => {
  return (
    <>
      <ul>
        {courses.map((course, i) => (
          <li key={i} className="my-2">
            <SingleCourse course={course} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CoursesList;
