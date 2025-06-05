import { FC, JSX } from "react";

interface IProps {
  title: string;
}

const SectionTitle: FC<IProps> = ({ title }): JSX.Element => {
  return (
    <>
      <h3 className="font-bold text-2xl">{title}</h3>
    </>
  );
};

export default SectionTitle;
