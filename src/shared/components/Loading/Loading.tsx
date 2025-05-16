import React, { JSX } from "react";
import styles from "./loading.module.css";

const { loader } = styles;

const Loading: React.FC = (): JSX.Element => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className={loader}></div>
    </div>
  );
};

export default Loading;
