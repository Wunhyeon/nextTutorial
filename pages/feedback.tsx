import HeaderComponent from "@/components/common/Header";
import { NextSeo } from "next-seo";
import { Fragment } from "react";

export default function Feedback() {
  return (
    <Fragment>
      <NextSeo
        title="피드백"
        description="매장 지도 서비스에 대한 피드백을 받습니다."
      />
      <HeaderComponent />
      <main></main>
    </Fragment>
  );
}
