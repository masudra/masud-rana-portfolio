import Footer from "../../Sheard/Footer/Footer";
import Navbar from "../../Sheard/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Skills from "../Skills/Skills";
import ContactUsEmail from "../contactUsEmail/contactUsEmail";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Skills></Skills>
            <ContactUsEmail></ContactUsEmail> 
            <Footer></Footer>
            
        </div>
    );
};

export default Home;