import { FC, JSX } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import TasksList from "../TasksList/TasksList";
import TasksSectionImage from "../../../../assets/tasks-section-image.png";
const YourTasks: FC = (): JSX.Element => {
  return (
    <>
      <section>
        <SectionTitle title="Your Tasks" />
        <TasksList />
        <section className="flex items-center justify-between flex-col lg:flex-row gap-2.5 grow p-8 bg-gray-200 rounded-2xl my-8 mx-2 lg:text-left text-center">
          <div>
            <h3 className="font-bold text-2xl mb-2">Learn even more!</h3>
            <p className="mb-6 max-w-[15rem]">
              Unlock premium features for more resources.
            </p>
            <button className="bg-black text-white rounded-xl px-8 py-4">
              Go Premium
            </button>
          </div>
          <img className="lg:block hidden" src={TasksSectionImage} alt="Tasks Section Image" />
        </section>
      </section>
    </>
  );
};

export default YourTasks;
