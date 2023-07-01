import Footer from "../../Sheard/Footer/Footer";
import Navbar from "../../Sheard/Navbar/Navbar";
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Skills from "../Skills/Skills";
import ContactUsEmail from "../contactUsEmail/contactUsEmail";

const Home = () => {
    return (
        <div className="bg-slate-100">
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <ContactUsEmail></ContactUsEmail> 
            <Footer></Footer>
            
        </div>
    );
};

export default Home;