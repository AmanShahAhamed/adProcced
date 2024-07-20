"use client";

import { Select } from "antd";

interface IProps {
  items: {
    value: string;
    label: string;
  }[];
  placeHolder?: string;
}

const CustomDropdown: React.FC<IProps> = ({ items, placeHolder }) => {
  return (
    <Select
      size="large"
      style={{ marginTop: "0.2rem", marginBottom: "0.2rem", width: "100%" }}
      showSearch
      placeholder={placeHolder}
      filterOption={(input, option) =>
        ((option?.label ?? "") as string)
          .toLowerCase()
          .includes(input.toLowerCase())
      }
      options={items}
    />
  );
};

export default CustomDropdown;
