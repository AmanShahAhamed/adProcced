import Link from "antd/es/typography/Link";

interface IProps {
  title: string;
  url?: string;
  isStrong?: boolean;
}
const Anchor: React.FC<IProps> = ({ title, url, isStrong }) => {
  const style: React.CSSProperties = {
    color: "#039",
    fontWeight: isStrong ? "bold" : "",
    fontSize: isStrong ? "1.1rem" : "1rem",
  };
  return (
    <Link className="hoverStyle" style={style} href={url ?? "#"}>
      {title}{" "}
    </Link>
  );
};

export default Anchor;
