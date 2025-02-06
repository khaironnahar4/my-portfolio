import { Link } from "react-router-dom";
import SectionHeader from "../../../Components/SectionHeader";

function Contact() {
  return (
    <section id="contact" className="lg:py-20 md:py-14 py-12 px-4">
       <SectionHeader
        heading="Contact With Me"
        subHeading=""
        text="Send a message or contact with me using the links"
      ></SectionHeader>
      {/* contact */}
      <div className="flex justify-center mt-12 md:mt-14 lg:mt-16 ">
        <Link to="mailto:khaironnaha4@gamil.com">
          <img
            align="center"
            src="https://img.shields.io/badge/gmail-EA4335.svg?style=for-the-badge&logo=gmail&logoColor=white"
            alt="azzar"
            height="30"
          />
        </Link>
        <Link to="https://wa.me/+8801956301999" className="ms-4">
          <img
            align="center"
            src="https://img.shields.io/badge/whatsapp-4B7F1.svg?style=for-the-badge&logo=whatsapp&logoColor=white"
            alt="azzar"
            height="30"
          />
        </Link>
      </div>

      {/* form */}
      <div className="card bg-base-100 w-full max-w-sm shrink-0 mx-auto shadow-2xl mt-8">
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
      </div>
    </section>
  );
}

export default Contact;
