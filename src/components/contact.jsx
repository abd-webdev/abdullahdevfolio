import React, { useState, useRef } from "react";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [inputValues, setInputValues] = useState({
    to_name: "",
    from_name: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    setShowAlert(true);
    setInputValues({
      to_name: "",
      from_name: "",
      message: "",
    });

    emailjs
      .sendForm(
        "service_ytw15ic",
        "template_nwk8yer",
        form.current,
        "WMG30NkLCyNOVN_wq"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  setTimeout(() => {
    setShowAlert(false);
  }, 10000);

  
  return (
    <div>
      <section id="contact">
        <h1>Contact me</h1>
        <form className="contact-form" onSubmit={sendEmail} ref={form}>
          <input
            className="contact-style"
            type="text"
            value={inputValues.to_name}
            onChange={handleInputChange}
            placeholder="Name"
            name="to_name"
            required
            autocomplete="off"
          />
          <br />
          <input
            className="contact-style"
            type="email"
            value={inputValues.from_name}
            onChange={handleInputChange}
            placeholder="Email"
            name="from_name"
            required
            autocomplete="off"
          />
          <br />
          <label htmlFor="" style={{ color: "#bf60bf" }}>
            Message:
          </label>
          <br />
          <textarea
            name="message"
            id="message"
            cols="100"
            rows="4"
            placeholder="Enter project details"
            value={inputValues.message}
            onChange={handleInputChange}
            autocomplete="off"
          ></textarea>
          <br />
          <input type="submit" value="Send" className="submit-btn" />
        </form>
        {isFormSubmitted && showAlert && (
          <div className="alert alert-success" role="alert">
            Message sent succeccsully!
          </div>
        )}
      </section>
    </div>
  );
};

export default Contact;
