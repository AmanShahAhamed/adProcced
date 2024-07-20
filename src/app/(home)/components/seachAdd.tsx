"use client";
import { Button, Input } from "antd";
import { IStoreProps } from "./mainContent";
import CustomDropdown from "@/app/components/customDropdown";
import { ICategory } from "@/app/store/utilStore";
import { SearchOutlined } from "@ant-design/icons";

const SearchAdd: React.FC<IStoreProps> = ({ category, country }) => {
  const dropdownItems: { label: string; value: string }[] = [
    { label: "_ALL_", value: "" },
    ...category.map((cat: ICategory) => ({
      value: cat?._id,
      label: cat?.name,
    })),
  ];
  return (
    <>
      <h4
        style={{
          color: "#039",
          marginTop: "1rem",
          marginBottom: "0.3rem",
          fontWeight: "bolder",
          fontSize: "15px",
        }}
      >
        SEARCH
      </h4>
      <div>
        <Input size="large" />
        <CustomDropdown items={dropdownItems} placeHolder="Select Category" />
        <Button
          type="primary"
          size="middle"
          icon={<SearchOutlined />}
          style={{ float: "right" }}
        >
          Search
        </Button>
      </div>
    </>
  );
};

export default SearchAdd;
