
import LandingComponents_part1 from "../utils/LandingComponents_part1";
import Footer from "../utils/Footer";
import HeaderAfterLogin from "../utils/HeaderAfterLogin";

const Home = () => {
    return (
      <div>
        <HeaderAfterLogin/>
        <LandingComponents_part1 />
        <Footer/>
      </div>
    );
};

export default Home;