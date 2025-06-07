import { FC, JSX } from "react";
import Assignments from "../../../../assets/Assignments.png";
import LectureNotes from "../../../../assets/LectureNotes.png";
import SingleResource from "../SingleResource/SingleResource";

const resources = [
  {
    img: LectureNotes,
    title: "Lecture Notes",
    path: "/dashboard/resources"
  },
  {
    img: Assignments,
    title: "Assignments",
    path: "/dashboard/resources"
  },
];

const ResourcesList: FC = (): JSX.Element => {
  return (
    <>
      <ul>
        {resources.map((resource, i) => (
          <li key={i} className="my-2">
            <SingleResource resource={resource} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ResourcesList;
