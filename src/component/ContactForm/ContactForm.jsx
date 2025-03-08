import { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";
// import Video from "../../shared/Video";
// import video from "../../assets/video.mp4"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Input Field Handle
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form Submission Handle
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_wtov8ck",   //EmailJS Service ID
        "template_syejxgv",  //EmailJS Template ID
        formData,
        "6ToSd4r0vmxRi_zYC"    //EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message Sent Successfully!");
          setFormData({ name: "", number: "", email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("Error Sending Message.");
        }
      );
  };

  return (
    <>
      <section className="w-full flex items-center justify-center pt-32">
        {/* Hero Content */}
    <div className="contact-form-container mx-auto z-20">
      <h2 className="text-center text-5xl font-bold">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Phone Number:</label>
        <input type="tel" name="number" value={formData.number} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Message:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required />

        <button className="btn" type="submit">Send</button>
      </form>
      {status && <p>{status}</p>}
    </div>
      </section>
    </>
  );
};

export default ContactForm;
