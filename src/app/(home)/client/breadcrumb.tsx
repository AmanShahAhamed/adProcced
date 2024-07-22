"use client";
import { useMount } from "@/app/hooks/useMount";
import { Breadcrumb, Typography } from "antd";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

const CustomBreadcrumb: React.FC = () => {
  const [routerList, setRouterList] = React.useState<string[]>([]);
  const router = useRouter();
  const pathname = usePathname();

  useMount(() => {
    const paths = pathname.split("/").filter((x) => x);
    paths.unshift("Home");
    setRouterList(() => (paths?.length === 1 ? [] : paths));
  }, [pathname]);

  return routerList.length === 1 ? (
    <Breadcrumb
      style={{ margin: "16px 0", background: "#f5f5f5", padding: 10 }}
      items={routerList.map((route) => ({
        title: (
          <Typography.Text
            style={{
              cursor: `${route === "Home" ? "pointer" : undefined}`,
              fontSize: "1rem",
            }}
          >
            {route}
          </Typography.Text>
        ),
        onClick: route === "Home" ? () => router.replace("/") : undefined,
      }))}
    />
  ) : undefined;
};

export default CustomBreadcrumb;
