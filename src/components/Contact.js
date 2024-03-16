import ContactForm from "../utils/ContactForm";
import Footer from "../utils/Footer";
import Header from "../utils/Header";
import HeaderAfterLogin from "../utils/HeaderAfterLogin";

const Contact = () => {
  return (
    <div>
        {/* <Header/> */}
      <HeaderAfterLogin />
      <ContactForm/>
      <Footer/>
      {/* <h1>hello</h1> */}
    </div>
  );
};

export default Contact;
