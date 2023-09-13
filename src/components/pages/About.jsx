import { useEffect } from "react";
import "./About.css";
import {
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoReact,
  BiLogoGithub,
  BiLogoDiscordAlt,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa";
import { Link } from "react-router-dom";
function About() {
  return (
    <div>
      <div className="about-bg-img container-fluid">
        <div className="about-gd-overlay"></div>
        <h2 className="w-100 h-100 text-white d-flex justify-content-center align-items-center title">
          ABOUT THIS PROJECT
        </h2>
      </div>
      <div className="text-center container-fluid">
        <section className="about-section-one justify-content-center align-items-center row m-5">
          <div className="align-self-center mb-2 col-lg-6 col-md-8 col-12">
            <h3>TECHNOLOGIES AND TOOLS USED</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A velit
              suscipit unde dolores odio maxime quibusdam dicta quod, ut laborum
              aut tenetur explicabo temporibus voluptatum molestias quisquam
              fugit cupiditate! Nobis?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A velit
              suscipit unde dolores odio maxime quibusdam dicta quod, ut laborum
              aut tenetur explicabo temporibus voluptatum molestias quisquam
              fugit cupiditate! Nobis?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A velit
              suscipit unde dolores odio maxime quibusdam dicta quod, ut laborum
              aut tenetur explicabo temporibus voluptatum molestias quisquam
              fugit cupiditate! Nobis?
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
            </div>
          </div>
        </section>
        <section className="about-section-two justify-content-center align-items-center m-5 row">
          <h3 className="mb-5">OUR TEAM</h3>
          <div className="col">
            <img
              src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
              alt=""
              className="team-img"
            />
            <h5 className="mt-3">ALEJO GONZÁLEZ</h5>
            <small>Full Stack Dev</small>
            <div>
              <Link to="linkedin" target="_blank">
                <BiLogoLinkedinSquare />
              </Link>
              <Link to="github" target="_blank">
                <BiLogoGithub />
              </Link>
            </div>
          </div>
          <div className="col">
            <img
              src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
              alt=""
              className="team-img"
            />
            <h5 className="mt-3">RODRIGO BEIRO</h5>
            <small>Full Stack Dev</small>
            <div>
              <Link to="linkedin" target="_blank">
                <BiLogoLinkedinSquare />
              </Link>
              <Link to="github" target="_blank">
                <BiLogoGithub />
              </Link>
            </div>
          </div>
          <div className="col">
            <img
              src="https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png"
              alt=""
              className="team-img"
            />
            <h5 className="mt-3">KATHIA OLAVERRY</h5>
            <small>Full Stack Dev</small>
            <div>
              <Link to="linkedin" target="_blank">
                <BiLogoLinkedinSquare />
              </Link>
              <Link to="github" target="_blank">
                <BiLogoGithub />
              </Link>
            </div>
          </div>
          <div className="col">
            <img
              src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
              alt=""
              className="team-img"
            />
            <h5 className="mt-3">JOSÉ IGNACIO SIUTTO</h5>
            <small>Full Stack Dev</small>
            <div>
              <Link to="linkedin" target="_blank">
                <BiLogoLinkedinSquare />
              </Link>
              <Link to="github" target="_blank">
                <BiLogoGithub />
              </Link>
            </div>
          </div>
          <div className="col">
            <img
              src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
              alt=""
              className="team-img"
            />
            <h5 className="mt-3">LEANDRO MATOSAS</h5>
            <small>Full Stack Dev</small>
            <div>
              <Link to="linkedin" target="_blank">
                <BiLogoLinkedinSquare />
              </Link>
              <Link to="github" target="_blank">
                <BiLogoGithub />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
