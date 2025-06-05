import { FC, JSX } from "react";

const CoursesCounter: FC = (): JSX.Element => {
  return (
    <section className="mx-2 mt-2 flex gap-4  flex-wrap min-h-24">
      <div className="count-box flex items-center bg-gray-200 rounded-3xl p-4 gap-2 grow">
        <span className="num font-black text-4xl">11</span>
        <p className="core">Courses Completed</p>
      </div>
      <div className="count-box flex items-center bg-gray-200 rounded-3xl p-4 gap-2 grow">
        <span className="num font-black text-4xl">5</span>
        <p className="core">Courses In Progress</p>
      </div>
    </section>
  );
};

export default CoursesCounter;
