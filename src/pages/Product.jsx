import Header from "../components/Homepage/Header";
import Svg from "../components/Homepage/Svg";
import Search from "../components/Homepage/Search";
import Filter from "../components/Product/filter";
import Main from "../components/Product/main";
import Footer from "../components/Homepage/Footer";
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
