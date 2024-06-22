import React from "react";

const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div className="footer-section">
          <div id="outro" className="footer-inner">
            <h4>Abd's portfolio</h4>
            <p>
              "Welcome to my world of exceptional Web Development Services! 🚀
              Passionate about crafting stunning websites, I'm here to bring
              your vision to life. Let's create something extraordinary
              together. Reach out for top-notch services and seamless
              collaboration! #WebDevelopment #Innovation #Creativity"
            </p>
          </div>

          <div id="phone" className="footer-inner">
            <h4>Contact</h4>
            <div>
              <span className="text-new">Phone:</span> (+92)-3065941072
            </div>
            <div>
              <span className="text-new">Email:</span>{" "}
              abdullahatiq0180@gmail.com
            </div>
          </div>
        </div>
        <div className="copyright">
          Copyright &#169; https://abd-webdev.github.io/abdullahdevfolio/ | All
          Rights reserved
        </div>
      </footer>
    </div>
  );
};

export default Footer;
