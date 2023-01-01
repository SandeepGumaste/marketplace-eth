import {
  BaseLayout,
  Breadcrumbs,
  CourseList,
  EthRates,
  Hero,
  OrderCard,
  WalletBar,
} from "components";

export default function Home() {
  return (
    <>
      <Hero />
      <Breadcrumbs />
      <WalletBar />
      <EthRates />
      <OrderCard />
      <CourseList />
    </>
  );
}
