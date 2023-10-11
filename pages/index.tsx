import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/header.module.scss";
import { Fragment, useEffect } from "react";
import HeaderComponent from "@/components/common/Header";
import { VscFeedback } from "react-icons/vsc";
import Link from "next/link";
import MapSection from "@/components/home/MapSection";
import { NextPage } from "next";
import { Store } from "@/types/Store";
import useStores from "@/hooks/useStores";
import DetailSection from "@/components/home/DetailSection";
import { NextSeo } from "next-seo";

interface Props {
  stores: Store[];
}

const Home: NextPage<Props> = ({ stores }) => {
  const { initializeStores } = useStores();

  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);

  return (
    <Fragment>
      <NextSeo
        title="매장 지도"
        description="Next.JS 시작하기 강의를 위한 매장 지도 서비스입니다."
        canonical="https://next-tutorial-pi-one.vercel.app"
      />
      <HeaderComponent />
      <main
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <MapSection />
        <DetailSection />
      </main>
    </Fragment>
  );
};

export default Home;

export async function getStaticProps() {
  // next api routes로 불러오기
  const stores = (await import("@/public/stores.json")).default;

  return {
    props: { stores },
    revalidate: 60 * 60,
  };
}
