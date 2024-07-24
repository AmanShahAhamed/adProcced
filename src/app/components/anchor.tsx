"use client";
import React, { useState } from "react";
import css from "./anchor.module.css";
import Link from "next/link";

interface IProps {
  title: string;
  url?: string;
  style?: React.CSSProperties;
}

const Anchor: React.FC<IProps> = ({ title, url, style }) => {
  const [hover, setHover] = useState(false);
  console.log(hover);
  return (
    <Link href={url || ""} className={css.hover_effect} style={style}>
      {title}
    </Link>
  );
};

export default Anchor;
