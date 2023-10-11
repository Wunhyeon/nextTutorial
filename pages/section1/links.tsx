import { NextPage } from "next";
import Link from "next/link";
// import { useRouter } from "next/router";

// export default function Links() {
//   const router = useRouter();

//   return (
//     <main>
//       <h1>Links</h1>
//       <div style={{ height: "200vh" }} />
//       <Link href="/section1/getStaticProps" style={{color : 'red'}}>/getStaticProps</Link>
//     </main>
//   );
// }

interface Props {
  data: number;
}

const link: NextPage<Props> = ({ data }) => {
  return (
    <main>
      <h1>Links</h1>
      <div style={{ height: "200vh" }} />
      <Link href="/section1/getStaticProps">/getStaticProps</Link>
    </main>
  );
};

export default link;
