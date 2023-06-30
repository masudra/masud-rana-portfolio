import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (

        <footer className="   p-10 bg-neutral text-white">
            <h1 className=" text-purple-700 text-4xl text-center my-4">Links</h1>

            <div className="flex justify-center mx-auto  gap-5 text-4xl">
                <Link className="text-purple-700" to='https://github.com/masudra'><FaGithub></FaGithub></Link>
                <Link className="text-purple-700" to='https://www.facebook.com/masudrana0707'><FaFacebook></FaFacebook></Link>
                <Link className="text-purple-700" to='https://www.linkedin.com/in/md-masud-rana-731130235'><FaLinkedin></FaLinkedin></Link>
                <Link className="text-purple-700" to='https://twitter.com/MdMasud71285325'><FaTwitter></FaTwitter></Link>

            </div>

        </footer>

    );
};

export default Footer;