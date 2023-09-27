import "./About.css";
import {
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoReact,
  BiLogoGithub,
  BiLogoDiscordAlt,
  BiLogoLinkedinSquare,
  BiLogoCss3,
  BiLogoNodejs,
} from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa";
import { RxVercelLogo } from "react-icons/rx";
import { SiAdobephotoshop, SiAdobeillustrator, SiSupabase } from "react-icons/si";
import { BsTrello, BsFillArrowDownCircleFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import BackToTop from "../partials/BackToTop";
import axios from "axios";
import { useState } from "react";
import AboutModal from "../partials/AboutModal";

function About() {
  const navigate = useNavigate();
  const [modalAbout, setModalAbout] = useState(false);
  const [person, setPerson] = useState(null);
  const team = [
    {
      name: "Alejo González",
      age: 23,
      image: "/imgs/profile-alejo.jpg",
      title: "BA in Communication | Illustrator | Full Stack Dev.",
      linkedin: "https://www.linkedin.com/in/alejo-gonzalez-gentile/?locale=en_US",
      github: "https://github.com/AlejoGonzalez99/",
      resume: "BA in Communication from Universidad ORT Uruguay, Full Stack Developer Jr. formed at Hack Academy and independent illustrator. Experience as a journalistic producer, podcast scripter and web designer in pojects for brands such as Itaú Bank, Club Atlético Aguada, Asociación Española and El País newspaper.",
    },
    {
      name: "Rodrigo Beiro",
      age: 27,
      image:
        "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
      title: "Full Stack Dev.",
      linkedin: "",
      github: "",
      resume: "",
    },
    {
      name: "Kathia Olaverry",
      age: 27,
      image:
        "https://as2.ftcdn.net/v2/jpg/02/79/66/93/1000_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg",
      title: "Full Stack Dev.",
      linkedin: "",
      github: "",
      resume: "",
    },
    {
      name: "José Ignacio Siutto",
      age: 27,
      image:
        "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
      title: "Full Stack Dev.",
      linkedin: "",
      github: "",
      resume: "",
    },
    {
      name: "Leandro Matosas",
      age: 27,
      image:
        "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
      title: "Full Stack Dev.",
      linkedin: "",
      github: "",
      resume: "",
    },
  ];

  const handleDatabase = () => {
    const response = axios({
      method: "patch",
      url: `${import.meta.env.VITE_API_URL}/database`,
    });
    navigate("/");
  };
  return (
    <div>
      <div className={modalAbout ? "bg-blur" : ""}>
        <div className="about-bg-img container-fluid d-flex flex-column justify-content-center align-items-center">
          <h2 className="text-white text-center title">
            ABOUT THIS PROJECT
          </h2>
          <h3 className="mt-5 pt-5 fw-bold text-center slide-down">Slide down <BsFillArrowDownCircleFill /></h3>
          <div className="about-gd-overlay"></div>
        </div>
        <div className="container-fluid">
          <section className="about-section-two justify-content-center align-items-center my-5 row">
            <div className="d-flex flex-column justify-content-center align-items-center mb-4">
              <h3 className="text-center mb-5 contact-title">Our team</h3>
              <span className="line-span"></span>
            </div>
            {team.map((person) => (
              <div
                key={person.name}
                className="col d-flex flex-column justify-content-center align-items-center text-center"
              >
                <img
                  src={person.image}
                  alt=""
                  className="team-img"
                  onClick={() => {
                    setPerson(person);
                    setModalAbout(true);
                  }}
                />
                <h5 className="mt-3 contact-text text-uppercase fw-bold">
                  {person.name}
                </h5>
                <small>{person.title}</small>
                <div>
                  <Link to={person.linkedin} target="_blank">
                    <BiLogoLinkedinSquare className="social-icons me-2" />
                  </Link>
                  <Link to={person.github} target="_blank">
                    <BiLogoGithub className="social-icons" />
                  </Link>
                </div>
              </div>
            ))}
          </section>
          <section className="about-section-one justify-content-center align-items-center row">
            <div className="d-flex flex-column justfiy-content-center align-items-center mb-2 col-lg-8 col-md-10 col-12 p-5 ">
              <h5 className=" my-5">The current webpage was built as a final course project for the Full Stack Developing Bootcamp by Hack Academy in September 2023. It is the result of more than 120 hours of coding, decision making and designing as a team. Everything from its functionalities and structure to the brand identity and product selection was created from scratch. </h5>
              <h3 className="mb-5 fw-bold contact-title">
                Organization
              </h3>
              <span className="line-span"></span>
              <p className="contact-text">
                Working in a team of five with a three-week deadline demanded us to develop a well-organized system to avoid wasting time and generating conflicts in the code. Even though we worked most of the time simultaneously on a Discord channel, we used Trello as a platform where each team member could assign itself tasks and see what the others were working on.
              </p>
              <p className="contact-text">
                We structured the code in three Github repositories for the Backend, the Admin Frontend, and the User Frontend codes. We then determined a series of goals for each one of the three weeks:
              </p>
              <ul>
                <li>First week: setting up the models and seeders for the site’s database, structuring the views for each page, defining key style elements for the brand, and connecting routes.</li>
                <li>Second week: programming the admin page with CRUD functionalities for users, orders, and products, defining authentication and authorization functions, creating a working Cart.</li>
                <li>Third week: Finishing touches and deploying the database and site.</li>
              </ul>
              <p className="mb-5 contact-text">Both working together and individually, we divided tasks considering all team member’s strengths and weaknesses as well as the learning opportunities that appeared throughout the process.</p>
              <h3 className="my-5 fw-bold contact-title">
                Brand identity
              </h3>
              <span className="line-span"></span>
              <img className="my-5 about-brand-img" src="/imgs/doppios-main-logo.png" alt="Doppio's Logo" />
              <p className="contact-text">After inclining ourselves for a cafe and bakery business, most style decisions were made as a team. We researched the Uruguayan and foreign markets, searched for inspirations, and identify mistakes in regards of developing an attractive and original brand.</p>
              <p className="mb-5 contact-text">Both the visual identity and name of Doppio’s Cafe & Bakery was created to quickly identify the purpose of the store. The cartoonish logo combined with a focus on the products imagery and a brown color palette, inspires a classic yet trendy feel to the webpage. </p>
              <h3 className="my-5 fw-bold contact-title">
                Technologies and tools
              </h3>
              <span className="line-span"></span>
              <p className="contact-text">
                This site was developed using the React library for JavaScript as well as Node.js, Redux and elements of vanilla HTML and CSS. Other Node libraries were used for specific purposes such as Express, Formidable, Dotenv, Bcrypt, React Bootstrap, among others.
              </p>
              <p className="contact-text">
                The data for this e-commerce was stored in MongoDB considering the advantages of employing a non-relational database for this project.  We made this decision valuing the flexibility of this type of database, which makes them easier to adjust or make changes. It also presented some advantages when using MongoDB Atlas, since it was a faster a simpler way of storing data in the cloud. Multimedia elements such as images and icons were stored using Supabase.
              </p>
              <p className="contact-text">
                The brand logo and icons were designed with Procreate and Adobe Illustrator. Adobe Photoshop was used for editing the products images as well as fixing and adjusting other elements when creating the visual identity of Doppio’s.
              </p>
              <p className="contact-text">
                Tools and programs such as Discord, Trello and Excalidraw were used for organizing and holding group working sessions throughout the process.
              </p>
              <div className="d-flex gap-5 justify-content-center align-self-center flex-wrap m-0">
                <div className="tech-icon">
                  <BiLogoJavascript className="icon" />
                  <small>JavaScript</small>
                </div>
                <div className="tech-icon">
                  <FaBootstrap className="icon" />
                  <small>Bootstrap</small>
                </div>
                <div className="tech-icon">
                  <BiLogoMongodb className="icon" />
                  <small>MongoDB</small>
                </div>
                <div className="tech-icon">
                  <BiLogoReact className="icon" />
                  <small>React</small>
                </div>
                <div className="tech-icon">
                  <BiLogoGithub className="icon" />
                  <small>GitHub</small>
                </div>
                <div className="tech-icon">
                  <BiLogoDiscordAlt className="icon" />
                  <small>Discord</small>
                </div>
                <div className="tech-icon">
                  <BsTrello className="icon" />
                  <small>Trello</small>
                </div>
                <div className="tech-icon">
                  <BiLogoCss3 className="icon" />
                  <small>CSS3</small>
                </div>
                <div className="tech-icon">
                  <BiLogoNodejs className="icon" />
                  <small>Nodejs</small>
                </div>
                <div className="tech-icon">
                  <SiSupabase className="icon" />
                  <small>Supabase</small>
                </div>
                <div className="tech-icon">
                  <RxVercelLogo className="icon" />
                  <small>Vercel</small>
                </div>
                <div className="tech-icon">
                  <SiAdobephotoshop className="icon" />
                  <small>Photoshop</small>
                </div>
                <div className="tech-icon">
                  <SiAdobeillustrator className="icon" />
                  <small>Illustrator</small>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h2 className="contact-title">USER WEB</h2>
              <span className="line-span"></span>
              <Link to="/">
                <img
                  src="https://mcbzesritumxqjtbullp.supabase.co/storage/v1/object/public/resources/about-1.avif"
                  alt=""
                  className="about-img"
                />
              </Link>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
              <h2 className="contact-title">ADMIN WEB</h2>
              <span className="line-span"></span>
              <Link to="/admin">
                <img
                  src="https://mcbzesritumxqjtbullp.supabase.co/storage/v1/object/public/resources/about-2.avif"
                  alt=""
                  className="about-img"
                />
              </Link>
            </div>
          </section>
          <section className="about-section-two justify-content-center align-items-center my-5 row">
            <div className="d-flex flex-column justfiy-content-center  mb-2 col-lg-8 col-md-10 col-12 p-5 ">
            <h3 className="mb-5 fw-bold contact-title">
                DISCLAIMER
              </h3>
              <span className="line-span"></span>
              <p>Every image used in this site is license free and was taken both from Unsplash and Freepik websites, except for the brand logo which was created originally by the team.</p>
              <p>Doppio’s Coffee & Bakery is a fictional brand created for the solely purpose of this project. So are the contact information and places mentioned at any time.</p>
              <p>Any similarities with real brands or people are merely coincidental.</p>
              <p>This page serves no commercial purposes.</p>
              <p className="text-end">September 2023.</p>
              <p className="text-end">Montevideo, Uruguay.</p>
            </div>
            <p>
              To reset the database click{" "}
              <span className="click-here" onClick={handleDatabase}>
                here
              </span>
            </p>
          </section>
        </div>
        <BackToTop />
      </div>
      <AboutModal
        setModalAbout={setModalAbout}
        modalAbout={modalAbout}
        person={person}
      />
    </div>
  );
}

export default About;
