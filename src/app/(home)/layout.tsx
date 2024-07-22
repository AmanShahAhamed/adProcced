import React from "react";
import { Layout } from "antd";
import CustomHeader from "./components/customHeader";
import { Content } from "antd/lib/layout/layout";
import CustomBreadcrumb from "./client/breadcrumb";

type IProps = { children: React.ReactNode };
const routerList = ["Home", "List", "App"];

const AppLayout: React.FC<IProps> = ({ children }) => {
  return (
    <Layout>
      <CustomHeader />
      <Content style={{ padding: "0 10rem" }}>
        <CustomBreadcrumb />

        <div
          style={{
            background: "white",
            minHeight: 280,
            borderRadius: 16,
          }}
        >
          {children}
        </div>
      </Content>
    </Layout>
  );
};

export default AppLayout;
