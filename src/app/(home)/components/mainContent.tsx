import { Col, Row } from "antd";
import Breadcrumb from "antd/lib/breadcrumb";
import { Content } from "antd/lib/layout/layout";
import AddInfo from "./addInfo";
import { ICategory, ICountry } from "@/app/store/utilStore";
import SubCategoryDescription from "./subCategoryDesc";
import { PRIMARY_COLOR } from "@/app/helper/helperConstant";

const routerList = ["Home", "List", "App"];

export interface IStoreProps {
  country: ICountry[];
  category: ICategory[];
}

const MainContent: React.FC<IStoreProps> = ({ category, country }) => {
  return (
    <Content style={{ padding: "0 10rem" }}>
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
            <SubCategoryDescription category={category} country={country} />
          </Col>
          <Col span={4} style={lastColStyle}>
            <CountryList
              country={country.filter((country) => country?.states.length)}
            />
          </Col>
        </Row>
      </div>
    </Content>
  );
};

const CountryList: React.FC<{ country: ICountry[] }> = ({ country }) => {
  const listStyle: React.CSSProperties = {
    fontSize: "1rem",
    // color: PRIMARY_COLOR,
    fontWeight: "bold",
    padding: 10,
  };
  return (
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {country?.map((country) => (
        <li style={listStyle} key={country._id}>
          {country.name}
        </li>
      ))}
      <li style={listStyle}>Other Countries</li>
    </ul>
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
