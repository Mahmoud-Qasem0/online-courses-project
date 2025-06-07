import { FC, JSX } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ResourcesList from "../../components/ResourcesList/ResourcesList";

const Resources: FC = (): JSX.Element => {
  return (
    <>
      <section className="bg-gray-200 px-4 py-6 rounded-2xl min-h-screen mx-2 mb-6">
        <div className="flex items-center justify-between mb-4">
          <SectionTitle title="Resources" />
          <p className="font-bold text-2xl hidden md:block">Shared Resources</p>
        </div>
        <ResourcesList />
      </section>
    </>
  );
};

export default Resources;
