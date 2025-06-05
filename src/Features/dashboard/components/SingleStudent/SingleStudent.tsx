import { FC, JSX } from "react";
interface IStudent {
  img: string;
  studentName: string;
  activeStatus?: boolean;
}
interface ISingleStudentProps {
  student: IStudent;
}
const SingleStudent: FC<ISingleStudentProps> = ({ student }): JSX.Element => {
  return (
    <>
      <section className="flex items-center justify-center flex-col gap-2.5 grow p-8 bg-white rounded-2xl text-center">
        <img className="" src={student.img} alt="Tasks Section Image" />
        <div>
          <h3 className="font-bold lg:text-2xl text-[1rem] mb-2">{student.studentName}</h3>
          <button className="bg-black text-white lg:text-[1rem] text-[0.75rem] rounded-xl lg:px-8 px-6 py-4">
            Message
          </button>
        </div>
      </section>
    </>
  );
};

export default SingleStudent;
