import "../styles/Homepage.css";
import Header from "../components/Homepage/Header";
import Svg from "../components/Homepage/Svg";
import Search from "../components/Homepage/Search";
import Billboard from "../components/Homepage/Billboard";
import Services from "../components/Homepage/Company-services";
import MobileProduct from "../components/Homepage/Mobile-product";
import SmartWhatches from "../components/Homepage/Smart_whatches";
import Ysale from "../components/Homepage/Yearly-sale";
import Lblog from "../components/Homepage/Latest-blog";
import Testimonial from "../components/Homepage/Testimonial";
import Footer from "../components/Homepage/Footer";

function Homepage() {
  return (
    <div>
      <Svg />
      <Search />
      <Header />
      <Billboard />
      <Services />
      <MobileProduct />
      <SmartWhatches />
      <Ysale />
      <Lblog />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default Homepage;
