import { Button } from "antd";
import React from "react";

const btnStyle: React.CSSProperties = {
  width: "90%",
  backgroundColor: "#4983b3",
  color: "white",
};

interface IProps {
  title: string;
}

const TitleBtn: React.FC<IProps> = ({ title }) => {
  return (
    <Button size="large" style={btnStyle}>
      {title}
    </Button>
  );
};

export default TitleBtn;
