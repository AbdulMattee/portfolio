import {
  BsLinkedin,
  BsInstagram,
  BsFacebook,
  BsGithub,
  BsWhatsapp,
} from "react-icons/bs";
let contacts = [
  { link: "https://github.com/AbdulMattee/", icon: <BsGithub /> },
  {
    link: "https://www.linkedin.com/in/abdul-mattee123",
    icon: <BsLinkedin />,
  },
  { link: "https://www.instagram.com/mattee_xd/", icon: <BsInstagram /> },
  {
    link: "https://www.facebook.com/profile.php?id=100009095508375",
    icon: <BsFacebook />,
  },
  {
    link: "https://api.whatsapp.com/send?phone=923065401047",
    icon: <BsWhatsapp />,
  },
];
let sentences = [
  " a Front-End Developer.",
  " a ReactJs Developer.",
  " a NextJs Developer.",
];
export { contacts, sentences };
