import Anchor from "@/app/components/anchor";
import { Flex, Image, Space } from "antd";

const CustomHeader: React.FC = () => {
  return (
    <Flex
      justify="space-between"
      content="center"
      style={{ marginLeft: "10rem", marginRight: "10rem" }}
    >
      <div style={headerStyle}>
        <Image
          alt="Website Logo"
          src={"/images/logo.png"}
          height={150}
          preview={false}
        />
      </div>
      <Space>
        <li>
          <Anchor title="Home" url="/" style={listStyle} />
        </li>
        <li>
          <Anchor title="Post Free Ad" url="/" style={listStyle} />
        </li>
      </Space>
    </Flex>
  );
};

const headerStyle: React.CSSProperties = {
  height: "9.5rem",
  lineHeight: "64px",
};
const listStyle: React.CSSProperties = {
  fontSize: "1.2rem",
  fontWeight: "bold",
};

export default CustomHeader;
