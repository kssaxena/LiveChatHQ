import Footer from "../utils/Footer";
import Header from "../utils/Header";
import LandingUtility_part1 from "../utils/LandingUtility_part1";
import LandingUtility_part2 from "../utils/LandingUtility_part2";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <LandingUtility_part1 />
      <LandingUtility_part2 />
      <Footer />
    </div>
  );
};

export default LandingPage;
