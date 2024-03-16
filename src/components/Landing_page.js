import Footer from "../utils/Footer";
import Header from "../utils/Header";
import LandingComponents_part1 from "../utils/LandingComponents_part1";
import LandingComponents_part2 from "../utils/LandingComponents_part2";


const LandingPage = () => {
  return (
    <div>
      <Header />
      <LandingComponents_part1 />
      <LandingComponents_part2 />
      <Footer/>
    </div>
  );
};

export default LandingPage;
