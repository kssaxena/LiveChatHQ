import AboutUtility_part1 from "../utils/AboutUtility_part1";
import AboutUtility_part2 from "../utils/AboutUtility_part2";
import Header from "../utils/Header";
import Footer from "../utils/Footer";
import HeaderAfterLogin from "../utils/HeaderAfterLogin";


const About = () => {
  return (
    <>
    {/* <Header/> */}
    <HeaderAfterLogin/>
    <AboutUtility_part1/>
    <AboutUtility_part2/>
    <Footer/>
    </>
  );
};

export default About;