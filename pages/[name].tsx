import DetailContent from "@/components/home/DetailContent";
import DetailHeader from "@/components/home/DetailHeader";
import { Store } from "@/types/Store";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import styles from "@/styles/detail.module.scss";
import useCurrentStore from "@/hooks/useCurrentStore";
import { NextSeo } from "next-seo";

interface Props {
  store: Store;
}

const StoreDetail: NextPage<Props> = ({ store }) => {
  const expanded = true;

  const router = useRouter();
  const { setCurrentStore } = useCurrentStore();
  const goToMap = () => {
    setCurrentStore(store);
    router.push(
      `/?zoom=15&lat=${store.coordinates[0]}&lng=${store.coordinates[1]}`
    );
  };

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NextSeo
        title="상세페이지"
        description="매장 상세페이지"
        canonical={`https://next-tutorial-pi-one.vercel.app/${store.name}`}
      />
      <div
        className={`${styles.detailSection} ${styles.selected} ${styles.expanded}`}
      >
        <DetailHeader
          currentStore={store}
          expanded={expanded}
          // onClickArrow={() => goToMap()}
          onClickArrow={goToMap}
        />
        <DetailContent currentStore={store} expanded={expanded} />
      </div>
    </>
  );
};

export default StoreDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const stores = (await import("@/public/stores.json")).default;
  const paths = stores.map((store) => ({ params: { name: store.name } }));
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log("params : ", params);
  const stores = (await import("@/public/stores.json")).default;
  const store = stores.find((store) => store.name === params?.name);

  if (!store) {
    return {
      notFound: true,
    };
  }

  return { props: { store } };
};
