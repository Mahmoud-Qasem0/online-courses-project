import { FC, JSX, ReactNode } from "react";

interface ITaskProps {
  task: {
    img: ReactNode;
    title: string;
    date: string;
  };
}

const SingleTask: FC<ITaskProps> = ({ task }): JSX.Element => {
  return (
    <>
      <section className="flex items-center flex-col lg:flex-row gap-4 grow px-8 py-4 bg-gray-200 rounded-2xl my-4 lg:text-left text-center">
        {task.img}
        <div className="">
          <h3 className="font-bold">{task.title}</h3>
          <span className="text-[13px]">{task.date}</span>
        </div>
      </section>
    </>
  );
};

export default SingleTask;
