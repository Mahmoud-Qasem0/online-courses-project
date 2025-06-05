import { FC, JSX, useState } from "react";
import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";
import courseImg1 from "../../../../assets/course-img1.png";

const CourseCard: FC = (): JSX.Element => {
  const [percentage, setPercentage] = useState<number>(0);

  const angle = Math.trunc((percentage / 100) * 360);
  return (
    <>
      <section className="flex items-center justify-between gap-6">
        <section className="flex items-center justify-between flex-col md:flex-row gap-2.5 grow px-8 py-4 bg-gray-200 rounded-2xl my-4">
          <img src={courseImg1} alt="courseImg1" />
          <div className="">
            <h3 className="font-bold">Automata Theory</h3>
            <span>by Dr Nganga</span>
          </div>
          <div
            className={`percent relative w-10 h-10 rounded-full flex items-center justify-center after:absolute after:content-[''] after:w-8 after:h-8 after:bg-gray-200 after:rounded-full`}
            style={{
              background: `conic-gradient(#000 ${angle}deg, #ebe6e7 0deg)`,
            }}>
            <span className="value z-10 text-[14px]">{percentage}%</span>
          </div>
          <button className="bg-black text-white rounded-xl px-8 py-2" disabled={percentage === 100} onClick={() => setPercentage(percentage + 10)}>
            Continue
          </button>
        </section>
        <div className="arrows lg:flex hidden justify-between gap-2">
          <SlArrowLeftCircle size={40} />
          <SlArrowRightCircle size={40} />
        </div>
      </section>
    </>
  );
};

export default CourseCard;
