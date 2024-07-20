import { Col, Row } from "antd";
import Breadcrumb from "antd/lib/breadcrumb";
import { Content } from "antd/lib/layout/layout";
import AddInfo from "./addInfo";
import { ICategory, ICountry, TMutant } from "@/app/store/utilStore";

const routerList = ["Home", "List", "App"];

export interface IStoreProps {
  country: ICountry[];
  category: ICategory[];
}

const MainContent: React.FC<IStoreProps> = ({ category, country }) => {
  return (
    <Content style={{ padding: "0 48px" }}>
      <Breadcrumb
        style={{ margin: "16px 0" }}
        items={routerList.map((route) => ({ title: route }))}
      />

      <div
        style={{
          background: "white",
          minHeight: 280,
          borderRadius: 16,
        }}
      >
        <Row>
          <Col span={4} style={firstColStyle}>
            <AddInfo category={category} country={country} />
          </Col>
          <Col span={16} style={commonStyle}>
            col2
          </Col>
          <Col span={4} style={lastColStyle}>
            col3
          </Col>
        </Row>
      </div>
    </Content>
  );
};

const commonStyle = {
  border: "1px solid black",
  padding: 10,
};

const firstColStyle: React.CSSProperties = {
  backgroundColor: "#e3ebf8",
  ...commonStyle,
};

const lastColStyle: React.CSSProperties = {
  backgroundColor: "#f5f5f5",
  ...commonStyle,
};

export default MainContent;
