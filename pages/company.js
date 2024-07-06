import Comparison from "./components/Company/Comparison";
import Details from "./components/Company/Details";
import ProsAndCons from "./components/Company/ProsAndCons";
import Footer from "./components/Footer/Footer";
import Header2 from "./components/Header/Header2";

export default function Home() {
  return (
    <>
      <div style={{ background: "#EBEFF5" }}>
        <Header2 />
        <Details />
        <ProsAndCons />
        <Comparison />
        <Comparison />
        <Comparison />
        <Comparison />
        <Comparison />
      </div>
      <Footer />
    </>
  );
}
