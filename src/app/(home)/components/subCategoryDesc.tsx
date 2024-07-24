"use server";
import Title from "antd/lib/typography/Title";
import Link from "antd/lib/typography/Link";
import { IStoreProps } from "./mainContent";
import { PRIMARY_COLOR } from "@/app/helper/helperConstant";
import { Flex } from "antd/lib";
import { FolderOpenOutlined } from "@ant-design/icons";
import IConsSubCategory from "./iconsSubCategory";
import { Col, Row } from "antd";
import { ICategory } from "@/app/store/utilStore";
import Anchor from "@/app/components/anchor";

const ADD_FEATURES = [
  "No sign up required. Post ad without Registration.",
  "Instant Ad approval - No activation/confirmation email is required. Your ads go online immediately!",
  "Post your ads with three images per ad at this high traffic website for FREE!",
  "Search or browse classified ads by category, location, keyword, ad ID, or ad owner name.",
  "An Email will send to your provided email address for modify, extend and delete your posted ads.",
  "No limit for ad posting. You can post unlimited Ads!",
  "Feature ads and Extended Period also available.",
];

const SubCategoryDescription: React.FC<IStoreProps> = ({
  country,
  category,
}) => {
  return (
    <>
      <Title level={4}>
        100% Free Classified Ads Posting - No Registration Required - Instant
        Approval!
      </Title>

      {ADD_FEATURES.map((feature, index) => (
        <li
          key={index}
          style={{ fontSize: "1rem", marginTop: 10, listStyleType: "square" }}
        >
          {feature}
        </li>
      ))}

      {/* <Link
        style={{
          marginTop: 10,
          marginBottom: 20,
          fontSize: "2rem",
          fontWeight: "bold",
          color: PRIMARY_COLOR,
        }}
      >
        Click Here to Post Free Add now.
      </Link> */}
      <Anchor
        title="Click Here to Post Free Ad now"
        style={{
          marginTop: 10,
          marginBottom: 20,
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      />

      <Row gutter={[16, 16]} style={{ margin: 20 }}>
        {category
          .sort((a, b) =>
            a?.subCategory?.length < b?.subCategory?.length ? -1 : 1
          )
          .map((cat) => (
            <Col key={cat._id} span={8}>
              <IConsSubCategory category={cat} />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default SubCategoryDescription;
