import Footer from "./components/Footer/Footer";
import SearchBar from "./components/Screen/SearchBar";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <>
      <div style={{ background: "#EBEFF5" }}>
        <Header />
        <SearchBar />
      </div>
      <Footer />
    </>
  );
}
