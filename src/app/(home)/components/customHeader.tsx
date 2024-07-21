import { Image } from "antd";

const CustomHeader: React.FC = () => {
  return (
    <div style={headerStyle}>
      <Image
        alt="Website Logo"
        src={"/images/logo.png"}
        height={150}
        preview={false}
      />
    </div>
  );
};

const headerStyle: React.CSSProperties = {
  height: "9.5rem",
  lineHeight: "64px",
};

export default CustomHeader;
