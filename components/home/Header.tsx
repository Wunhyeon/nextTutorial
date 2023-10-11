import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/header.module.scss";
import useMap from "@/hooks/useMap";
import { useRouter } from "next/router";

interface Props {
  onClickLogo?: () => void;
  rightElements?: React.ReactElement[];
}

const HomeHeader = ({ onClickLogo, rightElements }: Props) => {
  const { resetMapOptions, getMapOptions } = useMap();

  const router = useRouter();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.flexItem}>
          <Link
            href="/"
            className={styles.box}
            onClick={onClickLogo}
            aria-label="홈으로 이동"
          >
            {/* 인프런 로고 */}
            {/* <img src="/inflearn.png" alt="인프런 로고" /> */}
            <Image
              src="https://lecture-1.vercel.app/inflearn.png"
              alt="인프런 로고"
              width={110}
              height={20}
            />
          </Link>
        </div>
        {rightElements && (
          <div className={styles.flexItem}>{rightElements}</div>
        )}
      </header>
    </>
  );
};

export default HomeHeader;
