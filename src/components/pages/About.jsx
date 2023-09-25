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
import { BsTrello } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import BackToTop from "../partials/BackToTop";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import AboutModal from "../partials/AboutModal";

function About() {
  const navigate = useNavigate();
  const [modalAbout, setModalAbout] = useState(false);
  const [person, setPerson] = useState(null);
  const team = [
    {
      name: "Alejo González",
      age: 27,
      image:
        "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
    },
    {
      name: "Rodrigo Beiro",
      age: 27,
      image:
        "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
    },
    {
      name: "Kathia Olaverry",
      age: 27,
    },
    {
      name: "Jose Ignacio Siutto",
      age: 27,
      image:
        "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
    },
    {
      name: "Leandro Matosas",
      age: 27,
      image:
        "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
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
        <div className="about-bg-img container-fluid d-flex justify-content-center align-items-center">
          <h2 className="text-white d-flex justify-content-center align-items-center title">
            ABOUT THIS PROJECT
          </h2>
          <div className="about-gd-overlay"></div>
        </div>
        <div className="container-fluid">
          <section className="about-section-one justify-content-center align-items-center row">
            <div className="d-flex flex-column justfiy-content-center align-items-center mb-2 col-lg-8 col-md-10 col-12 p-5 ">
              <h3 className="mb-5 fw-bold contact-title">
                Technologies and tools used
              </h3>
              <span className="line-span"></span>
              <p className="contact-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
                velit suscipit unde dolores odio maxime quibusdam dicta quod, ut
                laborum aut tenetur explicabo temporibus voluptatum molestias
                quisquam fugit cupiditate! Nobis?
              </p>
              <p className="contact-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
                velit suscipit unde dolores odio maxime quibusdam dicta quod, ut
                laborum aut tenetur explicabo temporibus voluptatum molestias
                quisquam fugit cupiditate! Nobis?
              </p>
              <p className="contact-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
                velit suscipit unde dolores odio maxime quibusdam dicta quod, ut
                laborum aut tenetur explicabo temporibus voluptatum molestias
                quisquam fugit cupiditate! Nobis?
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
              </div>
            </div>
          </section>
          <section>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h2 className="contact-title">MAIN WEB</h2>
              <span className="line-span"></span>
              <img
                src="https://mcbzesritumxqjtbullp.supabase.co/storage/v1/object/public/resources/about-1.png"
                alt=""
                className="about-img"
              />
              <p className="contact-text my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                ipsam recusandae aperiam facere asperiores fuga enim eaque iusto
                nemo ex eos quas, ut molestias accusantium beatae eum nulla
                obcaecati saepe?
              </p>
              <p>
                To reset the database click{" "}
                <span className="click-here" onClick={handleDatabase}>
                  here
                </span>
              </p>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
              <h2 className="contact-title">ADMIN WEB</h2>
              <span className="line-span"></span>
              <img
                src="https://mcbzesritumxqjtbullp.supabase.co/storage/v1/object/public/resources/about-2.png"
                alt=""
                className="about-img"
              />
              <p className="contact-text my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                ipsam recusandae aperiam facere asperiores fuga enim eaque iusto
                nemo ex eos quas, ut molestias accusantium beatae eum nulla
                obcaecati saepe?
              </p>
            </div>
          </section>
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
                <small>Full Stack Dev</small>
                <div>
                  <Link to="linkedin" target="_blank">
                    <BiLogoLinkedinSquare className="social-icons me-2" />
                  </Link>
                  <Link to="github" target="_blank">
                    <BiLogoGithub className="social-icons" />
                  </Link>
                </div>
              </div>
            ))}
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
