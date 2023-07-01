import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUsEmail = () => {
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yhotwbt', 'template_9owm68b', form.current, '0Nwt1DDvPHY4j1ddc')
            .then((result) => {
                console.log(result);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div className="text-center">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="from_name" placeholder="Enter Your Name" className=" my-2 input input-bordered input-primary w-full max-w-xs" /><br />
                <input type="email"  name="user_email" placeholder="Enter Your Email" className=" my-2 input input-bordered input-primary w-full max-w-xs" /><br />
                <input type="text" name="message" placeholder=" Description" className=" my-2 input input-bordered input-primary  w-full h-[120px] max-w-xs" /><br />
                <input className=" my-2 input input-bordered bg-primary  w-full text-white max-w-xs" type="submit" value='Send' />
            </form>

        </div>
    );
};

export default ContactUsEmail;