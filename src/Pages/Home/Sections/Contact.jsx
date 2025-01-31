function Contact() {
  return (
    <section id="contact" className="py-20 bg-base-200">
        <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 mx-auto shadow-2xl">
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
            <textarea className="textarea textarea-bordered" placeholder="Write your message"></textarea>
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
