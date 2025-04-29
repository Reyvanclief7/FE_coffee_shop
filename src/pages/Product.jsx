import Header from "../components/Product/Header";
import Svg from "../components/Homepage/Svg";
import Search from "../components/Homepage/Search";
import Main from "../components/Product/main";
import Footer from "../components/Homepage/Footer";
import "../styles/Product.css";

function Product() {
  return (
    <div>
      <Header />
      <Svg />
      <Search />
      <Main />
      <Footer />
    </div>
  );
}

export default Product;
