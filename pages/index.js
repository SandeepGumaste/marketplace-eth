import {
  Breadcrumbs,
  Card,
  CourseList,
  EthRates,
  Footer,
  Hero,
  Navbar,
  OrderCard,
  WalletBar,
} from "components";

export default function Home() {
  return (
    <div>
      <div className="relative bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4">
          <Navbar />
          <div className="fit">
            <Hero />
            <Breadcrumbs />
            <WalletBar />
            <EthRates />
            <OrderCard />
            <CourseList />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
