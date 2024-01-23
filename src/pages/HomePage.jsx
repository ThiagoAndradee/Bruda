import Features from "./Features";
import Footer from "./Footer";
import HeaderSection from "./HeaderSection";
import Team from "./components/Team";
import CTA from "./components/CTA"
import PBNav from "./PBNav"
import LogoCloud from "./components/LogoCloud";
import Newsletter from "./components/Newsletter";
import ListFeatures from "./components/ListFeatures";
import Gallery from "./components/Gallery";


const HomePage = () => {
    return (
        <>
        <PBNav></PBNav>
        <CTA></CTA>
        <LogoCloud></LogoCloud>
        <ListFeatures></ListFeatures>
        <Features></Features>
        <HeaderSection></HeaderSection>
        <Team></Team>
        <Newsletter></Newsletter>
        <Footer></Footer>
        </>
    );
  };
  
  export default HomePage;
  