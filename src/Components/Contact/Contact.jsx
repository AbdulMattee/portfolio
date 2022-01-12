import React, { useState } from "react";
import styles from "./Contact.module.css";
import { Fade } from "react-reveal";
import emailjs from "emailjs-com";
import { TailSpin } from "react-loader-spinner";
import { toast } from "react-toastify";
const Contact = () => {
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });
  const SendMessage = async (event) => {
    event.preventDefault();
    for (let i = 0; i < event.target.length - 1; i++) {
      if (event.target[i].value === "") {
        toast.error("All Fields are required!");
        return;
      }
    }
    setLoader(true);
    try {
      await emailjs.send(
        "service_mrzfh0i",
        "template_j3zxvpc",
        data,
        "user_BDkymZRPCk3G5FLw4Q1Z4"
      );
      toast.success("Message Sent Successfully!");
      event.target.reset();
    } catch (error) {
      if (error.status >= 400) toast.error("Unable to send the message.");
    }
    setLoader(false);
  };
  const HandleInput = (event) => {
    let _data = data;
    _data[event.target.name] = event.target.value;
    setData(_data);
  };
  return (
    <section className={styles.main_section}>
      <Fade bottom>
        <h1>Get in Touch</h1>
      </Fade>
      <div className={styles.container}>
        <div className={styles.msg_div}>
          <h2>Let's talk about everything! </h2>
          <p>
            Dont like the forms?{" "}
            <a
              style={{ color: "#ff4c60" }}
              href="mailto:abdullahqayyum878@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Email
            </a>{" "}
            or{" "}
            <a
              style={{ color: "#ff4c60" }}
              href="https://api.whatsapp.com/send?phone=923065401047"
              target="_blank"
              rel="noreferrer"
            >
              Contact
            </a>{" "}
            me.
          </p>
        </div>
        <form className={styles.form} onSubmit={SendMessage}>
          <div className={styles.name_subject_div}>
            <input
              onChange={HandleInput}
              type="text"
              name="name"
              className={styles.name_subject}
              placeholder="Name"
            />
            <input
              onChange={HandleInput}
              type="text"
              name="subject"
              className={styles.name_subject}
              placeholder="Subject"
            />
          </div>
          <input
            onChange={HandleInput}
            type="email"
            name="email"
            placeholder="Email"
          />
          <textarea
            onChange={HandleInput}
            name="message"
            placeholder="Message"
            rows="7"
          />
          <div className={styles.btn_div}>
            {!loader ? (
              <input
                type="submit"
                value={"Send a message"}
                className={styles.submit_btn}
              />
            ) : (
              <TailSpin
                arialLabel="loading-indicator"
                color="#ff4c60"
                width="35px"
                wrapperStyle={{ marginLeft: "50px" }}
              />
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
