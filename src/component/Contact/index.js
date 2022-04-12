import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import "./style.css";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  //const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage("please enter a valid email");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("form Submit");
    setFormState({ name: "", email: "", message: "" });
  }

  return (
    <section className="page-section text-white mb-0">
      <div className="container">
        <h2 class="page-section-heading text-left text-uppercase text-white">
          Contact
        </h2>
        <form className="form flex-row" onSubmit={handleSubmit}>
          <div>
            <div>
              <label htmlFor="Name">First Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              type="text"
              name="message"
              rows="10"
              value={formState.message}
              onChange={handleChange}
              style={{ display: "block", marginBottom: "15px", width: "40%" }}
            ></textarea>
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
