import "../styles/Homepage.css";
import Header from "../components/Header";
import Svg from "../components/Svg";
import Search from "../components/Search";
import Billboard from "../components/Billboard";
import Services from "../components/Company-services";
import MobileProduct from "../components/Mobile-product";
import SmartWhatches from "../components/Smart_whatches";
import Ysale from "../components/Yearly-sale";
import Lblog from "../components/Latest-blog";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

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
