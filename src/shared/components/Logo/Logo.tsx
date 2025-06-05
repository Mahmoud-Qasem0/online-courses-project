import { FC, JSX } from "react";
import { useAppSelector } from "../../../store/hooks";

interface IProps {
  collapsedStatus: boolean;
}

const Logo: FC<IProps> = ({ collapsedStatus }): JSX.Element => {
  const { user } = useAppSelector((s) => s.auth);
  return (
    <>
      <span
        className={`font-bold ${collapsedStatus ? "text-3xl" : "text-6xl"}`}>
        {user?.email?.charAt(0).toUpperCase().concat(".")}
      </span>
    </>
  );
};

export default Logo;
