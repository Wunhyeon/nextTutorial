interface Props {}
import styles from "@/styles/header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Fragment, useCallback } from "react";
import HomeHeader from "../home/Header";
import { AiOutlineShareAlt } from "react-icons/ai";
import { VscFeedback } from "react-icons/vsc";
import { useRouter } from "next/router";
import useMap from "@/hooks/useMap";
import copy from "copy-to-clipboard";

interface Props {
  rightElements?: React.ReactElement[];
}

const HeaderComponent = () => {
  const { resetMapOptions, getMapOptions } = useMap();

  const router = useRouter();
  const replaceAndCopyUrl = useCallback(() => {
    const mapOptions = getMapOptions();
    const query = `/?zoom=${mapOptions.zoom}&lat=${mapOptions.center[0]}&lng=${mapOptions.center[1]}`;

    router.replace(query);
    // copy
    copy(location.origin + query);
  }, [router, getMapOptions]);

  return (
    <Fragment>
      <header>
        <HomeHeader
          onClickLogo={resetMapOptions}
          rightElements={[
            <button
              className={styles.box}
              onClick={replaceAndCopyUrl}
              key="button"
              style={{ marginRight: 8 }}
              aria-label="현재 위치 클립보드 복사"
            >
              <AiOutlineShareAlt size={20} />
            </button>,
            <Link
              href="/feedback"
              key="link"
              className={styles.box}
              aria-label="피드백 페이지로 이동"
            >
              <VscFeedback size={20} />
            </Link>,
          ]}
        />
      </header>
      {/* <main style={{ width: "100%", height: "100%" }}></main> */}
    </Fragment>
  );
};

export default HeaderComponent;
