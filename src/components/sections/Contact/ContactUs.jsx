import React from 'react';

const ContactUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero h-screen relative bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1687440758228-e449337d6e16?q=80&w=3651&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-40 backdrop-blur-md absolute inset-0"></div>
        <div className="relative flex items-center justify-center h-full px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              If You Can Dream It
              <strong className="block font-extrabold text-[#60AD02]">We Can Build It.</strong>
            </h1>
            <p className="mt-4 text-lg sm:text-xl lg:text-2xl max-w-lg mx-auto">
              Building Excellence, Shaping Futures: Nibir Nirman – Your Trusted Partner in Quality Construction Since 1997.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-extrabold text-[#60AD02]">About Nibir Nirman</h2>
          <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto">
            We are a construction company with a legacy of excellence and dedication, building the future since 1997.
          </p>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-extrabold text-[#068510]">Contact Us</h2>
          <p className="mt-4 text-lg sm:text-xl">
            Get in touch with us for more information and inquiries.
          </p>
          <div className="mt-8">
            <form action="#" method="POST" className="max-w-lg mx-auto">
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#068510]"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#068510]"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#068510]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded bg-[#068510] px-12 py-3 text-white font-medium hover:bg-[#60AD02] focus:outline-none focus:ring-2 focus:ring-[#60AD02]"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="mt-8">
            <p><strong>Other Ways to Reach Us</strong></p>
            <p>Email: info@example.com</p>
            <p>Phone: (555) 123-4567</p>
            <p>Address: 123 Business Street, City, Country</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Nibir Nirman. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
