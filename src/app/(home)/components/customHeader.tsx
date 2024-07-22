import { Flex, Image } from "antd";
import Link from "next/link";

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
      <Link
        href={"/"}
        style={{ fontSize: "2rem", color: "black", marginTop: "1.5rem" }}
      >
        Post Free Add
      </Link>
    </Flex>
  );
};

const headerStyle: React.CSSProperties = {
  height: "9.5rem",
  lineHeight: "64px",
};

export default CustomHeader;
