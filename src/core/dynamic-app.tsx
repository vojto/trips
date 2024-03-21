import dynamic from "next/dynamic";

export const DynamicApp = dynamic(
  () => import(/* webpackMode: 'eager' */ "./App").then((lib) => lib.App),
  { ssr: false }
);
