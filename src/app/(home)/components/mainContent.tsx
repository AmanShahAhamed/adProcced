import { Col, Row } from "antd";
import AddInfo from "./addInfo";
import { ICategory, ICountry } from "@/app/store/utilStore";
import SubCategoryDescription from "./subCategoryDesc";
import Anchor from "@/app/components/anchor";

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
        <li key={country._id} style={countryStyle}>
          <Anchor title={country.name} />
        </li>
      ))}
      <li>
        <Anchor title={"Other Countries"} />
      </li>
    </ul>
  );
};

const countryStyle: React.CSSProperties = {
  color: "black",
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
