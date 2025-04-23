import Header from "../components/Header";
import Svg from "../components/Svg";
import Search from "../components/Search";
import Filter from "../components/Product/filter";
import Main from "../components/Product/main";
import Footer from "../components/Footer";
import "../styles/Product.css";

function Product() {
  return (
    <div>
      <Svg />
      <Search />
      <Header />
      <Filter />
      <Main />
      <Footer />
    </div>
  );
}

export default Product;
