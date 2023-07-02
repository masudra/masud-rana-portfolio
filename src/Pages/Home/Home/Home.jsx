import Footer from "../../Sheard/Footer/Footer";
import Navbar from "../../Sheard/Navbar/Navbar";
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
import ContactUsEmail from "../contactUsEmail/contactUsEmail";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects>
            <Services></Services>
            <ContactUsEmail></ContactUsEmail> 
            <Footer></Footer>
            
        </div>
    );
};

export default Home;