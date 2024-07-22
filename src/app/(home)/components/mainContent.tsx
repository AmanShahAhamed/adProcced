import { Col, Row } from "antd";
import AddInfo from "./addInfo";
import { ICategory, ICountry } from "@/app/store/utilStore";
import SubCategoryDescription from "./subCategoryDesc";

export interface IStoreProps {
  country: ICountry[];
  category: ICategory[];
}

const MainContent: React.FC<IStoreProps> = ({ category, country }) => {
  return (
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
  );
};

const CountryList: React.FC<{ country: ICountry[] }> = ({ country }) => {
  const listStyle: React.CSSProperties = {
    fontSize: "1rem",
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
