import React from "react";
import Breadcrumb from "antd/lib/breadcrumb/Breadcrumb";
import { Layout } from "antd";

type IProps = { children: React.ReactNode };

const AppLayout: React.FC<IProps> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default AppLayout;
