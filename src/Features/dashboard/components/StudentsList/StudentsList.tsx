import { FC, JSX } from "react";
import SingleStudent from "../SingleStudent/SingleStudent";
import Saad from "../../../../assets/Saad.png"
import Mahmoud from "../../../../assets/Mahmoud.png"
import Seyam from "../../../../assets/Seyam.png"

const studentsList = [
  {
    img: Saad,
    studentName: "Saad Ahmed",
    activeStatus: true,
  },
  {
    img: Mahmoud,
    studentName: "Mahmoud Qasem",
    activeStatus: true,
  },
  {
    img: Seyam,
    studentName: "Mohammed Seyam",
    activeStatus: true,
  },
];

const StudentsList: FC = (): JSX.Element => {
  return (
    <>
      <ul className="grid grid-cols-2 gap-8">
        {studentsList.map((student, i) => (
          <li key={i} className="lg:col-span-1 col-span-full">
            <SingleStudent student={student} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default StudentsList;
