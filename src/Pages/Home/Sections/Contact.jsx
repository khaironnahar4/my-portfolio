import { Link } from "react-router-dom";
import SectionHeader from "../../../Components/SectionHeader";
import { motion } from "motion/react";


function Contact() {
  return (
    <motion.section 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.3 }}
    id="contact" className="lg:py-20 md:py-14 py-12 px-4">
       <SectionHeader
        heading="Contact With Me"
        subHeading=""
        text="Send a message or contact with me using the links"
      ></SectionHeader>
      {/* contact */}
      <div className="flex justify-center mt-12 md:mt-14 lg:mt-16 ">
        <Link to="mailto:khaironnaha4@gamil.com">
          <motion.img 
          initial={{ opacity: 0, scale:0.7 }}
          whileInView={{ opacity: 1, scale:1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
            align="center"
            src="https://img.shields.io/badge/gmail-EA4335.svg?style=for-the-badge&logo=gmail&logoColor=white"
            alt="azzar"
            height="30"
          />
        </Link>
        <Link to="https://wa.me/+8801956301999" className="ms-4">
          <motion.img 
          initial={{ opacity: 0, scale:0.7 }}
          whileInView={{ opacity: 1, scale:1 }}
          transition={{ duration: 0.7, delay: 1.1 }}
            align="center"
            src="https://img.shields.io/badge/whatsapp-4B7F1.svg?style=for-the-badge&logo=whatsapp&logoColor=white"
            alt="azzar"
            height="30"
          />
        </Link>
      </div>

      {/* form */}
      <motion.div 
      initial={{ opacity: 0, y:50 }}
      whileInView={{ opacity: 1, y:0 }}
      transition={{ duration: 0.9, delay: 1.3 }}
      className="card bg-base-100 w-full max-w-sm shrink-0 mx-auto shadow-2xl mt-8">
        <form className="card-body">
          {/* name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Put your name"
              className="input input-bordered"
              required
            />
          </div>

          {/* email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Put your email"
              className="input input-bordered"
              required
            />
          </div>

          {/* message */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Message</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Write your message"
            ></textarea>
            {/* <input
              type="email"
              placeholder="Write your message"
              className="input input-bordered"
              required
            /> */}
          </div>

          <div className="form-control mt-6 mx-auto">
            <button type="submit" className="btn primaryBtn">
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
    </motion.section>
  );
}

export default Contact;
