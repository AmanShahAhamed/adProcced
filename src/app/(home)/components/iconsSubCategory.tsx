import Anchor from "@/app/components/anchor";
import { PRIMARY_COLOR } from "@/app/helper/helperConstant";
import { ICategory } from "@/app/store/utilStore";
import { FolderOutlined } from "@ant-design/icons";
import { Flex, Space, Image } from "antd";
import Link from "antd/lib/typography/Link";

const free = ["Websites", "eBooks", " Website Scripts", "  Software", " Other"];

type IProps = { category: ICategory };

const IConsSubCategory: React.FC<IProps> = ({ category }) => {
  return (
    <Flex vertical>
      <Space>
        <Image
          src={"/images/categoryIcon.jpg"}
          alt={"category_logo"}
          preview={false}
          height={50}
        />

        <Anchor
          title={category.name}
          style={{
            marginTop: 10,
            marginBottom: 20,
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        />
      </Space>
      <ul
        style={{
          listStyle: "none",
          fontSize: "1rem",
          marginLeft: "3.5rem",
        }}
      >
        {category?.subCategory?.map((sub) => (
          <li key={sub._id} style={{ marginTop: 5 }}>
            <Anchor title={sub.name} />
          </li>
        ))}
      </ul>
    </Flex>
  );
};

export default IConsSubCategory;
