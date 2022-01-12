import React, { useState } from "react";
import { Fade } from "react-reveal";
import styles from "./Service.module.css";
const Service = () => {
  let services = [
    {
      type: "Front-End Development",
      description:
        "Developing your website front-end with advance technology e.g React,Next.",
      color: "rgb(249 215 76)",
      img: require("../../assets/services/web.webp"),
      boxShadow: "rgb(249 215 76 / 50%) 0px 5px 20px 0px",
    },
    {
      type: "Full Stack Development",
      description:
        "MEAN or MERN stack development to make your website super fast and much more advance. ",
      color: "rgb(108 108 229)",
      img: require("../../assets/services/fullstack.png"),
      boxShadow: "rgb(108 108 229 / 50%) 0px 5px 20px 0px",
    },
    {
      type: "Backend Development",
      description:
        "Building your website backend with Node Js, PHP or Laravel.",
      color: "rgb(249 123 139)",
      img: require("../../assets/services/backend.png"),
      boxShadow: "rgb(249 123 139 / 50%) 0px 5px 20px 0px",
    },
    {
      type: "Web Designing",
      description:
        "Advance and dazzling web designs with advance tools and animations.",
      color: "rgb(249 123 139)",
      img: require("../../assets/services/webdesign.png"),
      boxShadow: "rgb(249 123 139 / 50%) 0px 5px 20px 0px",
    },
    {
      type: "Search Engine Optimization",
      description:
        "Rank your website among the top competitors with our SEO services.",
      color: "rgb(249 215 76)",
      img: require("../../assets/services/seo.png"),
      boxShadow: "rgb(249 215 76 / 50%) 0px 5px 20px 0px",
    },
    {
      type: "Content Writing",
      description:
        "Blog writing for websites, web content writing, marketing material content, white papers and research articles.",
      color: "rgb(108 108 229)",
      img: require("../../assets/services/contentwriter.png"),
      boxShadow: "rgb(108 108 229 / 50%) 0px 5px 20px 0px",
    },
    {
      type: "Email Marketing",
      description: "Boost your product promotion by using our email services.",
      color: "rgb(108 108 229)",
      img: require("../../assets/services/email.png"),
      boxShadow: "rgb(108 108 229 / 50%) 0px 5px 20px 0px",
    },
    {
      type: "Virtual Assistant Services",
      description:
        "We provide our clients with the best administrative services, ensuring their complete satisfaction.",
      color: "rgb(249 123 139)",
      img: require("../../assets/services/virtualassistant.png"),
      boxShadow: "rgb(249 123 139 / 50%) 0px 5px 20px 0px",
    },

    {
      type: "Translation Services",
      description:
        "Services provide you the ability to communicate to a global audience with the assistance of a professional linguist.",
      color: "rgb(249 215 76)",
      img: require("../../assets/services/translation.png"),
      boxShadow: "rgb(249 215 76 / 50%) 0px 5px 20px 0px",
    },
    {
      type: "Proof Reading Services",
      description:
        "Our proofreading services concentrate on minor mistakes, ensuring that your text is error-free.",
      color: "rgb(249 215 76)",
      img: require("../../assets/services/proofreading.png"),
      boxShadow: "rgb(249 215 76 / 50%) 0px 5px 20px 0px",
    },
    {
      type: "Business Consultant",
      description:
        "Make your business grow rapidly with our experienced Business Consultants.",
      color: "rgb(108 108 229)",
      img: require("../../assets/services/businessconsultant.png"),
      boxShadow: "rgb(108 108 229 / 50%) 0px 5px 20px 0px",
    },
    {
      type: "Photoshop services",
      description:
        "With advanced tools and experienced editors, the best photo editing services are available.",
      color: "rgb(249 123 139)",
      img: require("../../assets/services/photoshop.png"),
      boxShadow: "rgb(249 123 139 / 50%) 0px 5px 20px 0px",
    },
    {
      type: "Mobile App Development",
      description: "We offer the mobile application in native and flutter.",
      color: "rgb(249 123 139)",
      img: require("../../assets/services/mobileappdevelopment.png"),
      boxShadow: "rgb(249 123 139 / 50%) 0px 5px 20px 0px",
    },
    {
      type: "Resume Writing Services",
      description:
        "Our service to help you streamline and polish your resume can help you at any stage in your career development.",
      color: "rgb(249 215 76)",
      img: require("../../assets/services/resumewriting.png"),
      boxShadow: "rgb(249 215 76 / 50%) 0px 5px 20px 0px",
    },
    {
      type: "Data Entry Services",
      description:
        "Get your data entered with 100% accuracy and unlimited revisions.",
      color: "rgb(108 108 229)",
      img: require("../../assets/services/dataentry.png"),
      boxShadow: "rgb(108 108 229 / 50%) 0px 5px 20px 0px",
    },
    {
      type: "HR Consulting Services",
      description:
        "It includes employee training, career development, performance management,coaching, mentoring, and succession planning. ",
      color: "rgb(108 108 229)",
      img: require("../../assets/services/hr.png"),
      boxShadow: "rgb(108 108 229 / 50%) 0px 5px 20px 0px",
    },
    {
      type: "Video Marketing Services",
      description:
        "Promote your product or business by using our video marketing services.",
      color: "rgb(249 123 139)",
      img: require("../../assets/services/videomarketing.png"),
      boxShadow: "rgb(249 123 139 / 50%) 0px 5px 20px 0px",
    },
    {
      type: "Ghost Writing",
      description:
        "Get sparkling, well-written website copy or other quality content.",
      color: "rgb(249 215 76)",
      img: require("../../assets/services/ghostwriter.png"),
      boxShadow: "rgb(249 215 76 / 50%) 0px 5px 20px 0px",
    },
    {
      type: "Digital Marketing",
      description:
        "Promote your brand at every famous platform to connect with the customers.",
      color: "rgb(249 215 76)",
      img: require("../../assets/services/digitalmarketing.png"),
      boxShadow: "rgb(249 215 76 / 50%) 0px 5px 20px 0px",
    },
    {
      type: "Project Managers",
      description:
        "Planning, organizing, and directing the completion of your projects while ensuring these projects are on time, on budget, and within scope",
      color: "rgb(108 108 229)",
      img: require("../../assets/services/projectmanager.png"),
      boxShadow: "rgb(108 108 229 / 50%) 0px 5px 20px 0px",
    },
    {
      type: "Event Managers",
      description: "Plan and organize promotional, business and social events.",
      color: "rgb(249 123 139)",
      img: require("../../assets/services/eventmanager.png"),
      boxShadow: "rgb(249 123 139 / 50%) 0px 5px 20px 0px",
    },
  ];
  const [index, setIndex] = useState(2);
  const [opacity, setOpacity] = useState(1);
  const LoadMore = () => {
    setOpacity(0);
    setTimeout(() => {
      setOpacity(1);
      setIndex(index === services.length - 1 ? 2 : index + 3);
    }, 400);
  };
  return (
    <section className={styles.main_section}>
      <Fade bottom>
        <h1>Services</h1>
      </Fade>
      <div className={styles.container}>
        {services.map((val, ind) => {
          if (ind <= index)
            return (
              <div
                className={styles.service}
                style={{
                  background: val.color,
                  boxShadow: val.boxShadow,
                  opacity,
                }}
                key={val.type}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div className={styles.img_container}>
                    <img src={val.img} alt={val.type} />
                  </div>
                </div>
                <div className={styles.description}>
                  <h3 style={{ textAlign: "center" }}>{val.type}</h3>
                  <p>{val.description}</p>
                </div>
              </div>
            );
        })}
      </div>
      <p style={{ margin: "15px 0" }}>
        Looking for a custom job?{" "}
        <a href="mailto:abdullahqayyum878@gmail.com" style={{ color: "white" }}>
          Email me{" "}
        </a>
      </p>
      <div className={styles.btn_div}>
        <button
          className={styles.load_btn}
          onClick={LoadMore}
          style={{
            background: index === services.length - 1 && "rgb(249 215 76)",
            opacity,
          }}
        >
          {index === services.length - 1 ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default Service;
