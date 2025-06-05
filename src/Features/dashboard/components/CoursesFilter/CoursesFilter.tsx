import { FC, JSX } from "react";

interface IFilterProps {
  filters: string[];
}

const CoursesFilter: FC<IFilterProps> = ({ filters }): JSX.Element => {
  return (
    <>
      <ul className="md:flex hidden items-center gap-4 font-bold text-[1rem] my-5">
        {filters.map((filter, i) => (
          <li key={i}>
            <span className="text-gray-300 active:text-black hover:text-black cursor-pointer">{filter}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CoursesFilter;
