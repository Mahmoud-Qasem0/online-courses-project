import { FC, JSX } from "react";
import userImg from "../../../../assets/user-img.png";
const WelcomeCard: FC = (): JSX.Element => {
  return (
    <>
      <section className="container flex justify-around items-center bg-gray-200 rounded-3xl min-h-40">
        <div className="welcome-text">
          <h3 className="lg:text-5xl text-3xl mb-2.5">Hello again !</h3>
          <p className="lg:text-[1rem] text-[14px]">It is good to see you again.</p>
        </div>
        <div className="image mt-[-4%] sm:block hidden">
          <img src={userImg} alt="user image" />
        </div>
      </section>
    </>
  );
};

export default WelcomeCard;
