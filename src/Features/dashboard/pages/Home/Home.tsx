import { FC, JSX } from "react";
import WelcomeCard from "../../components/WelcomeCard/WelcomeCard";
import CourseCard from "../../components/CourseCard/CourseCard";
import CoursesWidget from "../../components/CoursesWidget/CoursesWidget";

const Home: FC = (): JSX.Element => {
  return (
    <section className="home container p-2.5">
      <WelcomeCard />
      <CourseCard />
      <CoursesWidget />
    </section>
  );
};

export default Home;
