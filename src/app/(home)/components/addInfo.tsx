import Anchor from "@/app/components/anchor";
import TitleBtn from "@/app/components/titleBtn";
import SearchAdd from "./seachAdd";
import { IStoreProps } from "./mainContent";

const freeAddContainerStyle: React.CSSProperties = {
  marginTop: "6rem",
};

const listStyle: React.CSSProperties = {
  listStyle: "none",
};

const AnchorUrl = [
  "Your Classified",
  "Free Classified",
  "Post Free Classified",
  "Post Easy Ads",
  "Post Instant Adz!",
  "Post Quick Ads",
  "Post Commercial Adz!",
  "Professional Ads for Free!",
  "Post Ez and Now!",
];
const FreeAddSites: React.FC<IStoreProps> = ({ country, category }) => {
  return (
    <>
      <TitleBtn title="Home" />
      <TitleBtn title="Post Free Ad" />

      <SearchAdd country={country} category={category} />
      <div style={freeAddContainerStyle}>
        <h2 style={{ textDecorationLine: "underline" }}>
          Free Ads Posting Sites
        </h2>
        <div>
          {AnchorUrl.map((url, index) => (
            <li style={listStyle} key={index}>
              <Anchor title={url} isStrong={true} />
            </li>
          ))}
        </div>
        <div style={{ marginTop: "2rem" }}>
          {AnchorUrl.map((url, index) => (
            <li style={listStyle} key={index}>
              <Anchor key={index} title={url} />
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default FreeAddSites;
