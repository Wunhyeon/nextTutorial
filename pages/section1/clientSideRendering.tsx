import { NextPage } from "next";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
// import NoSSR from "@/components/section1/NoSSR";
const NoSSR = dynamic(() => import("@/components/section1/NoSSR"), {
  ssr: false,
});

const Example: NextPage = () => {
  const [data, setData] = useState(0);

  useEffect(() => {
    const delayInSeconds = 10;
    new Promise<number>((resolve) =>
      setTimeout(() => resolve(Math.random()), delayInSeconds * 1000)
    ).then((result) => setData(result));

    console.log("NoSSR : ", NoSSR);
  });

  return (
    <main>
      <h1>Client - Side data fetching</h1>
      <p>값 : {data}</p>
      <NoSSR />
    </main>
  );
};

export default Example;
