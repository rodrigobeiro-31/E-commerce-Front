import { AiOutlineClose } from "react-icons/ai";

function AboutModal({ modalAbout, setModalAbout, person }) {
  console.log(person);
  return (
    person && (
      <div
        className={` ${modalAbout ? "modal-about" : "modal-about-inactive"} `}
      >
        <div className="about-card">
          <AiOutlineClose
            className="close-btn about-card-btn"
            onClick={() => setModalAbout(false)}
          />
          <img
            src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
            alt=""
            className="about-card-img"
          />
          <div className="about-card-details">
            <h3 className="about-card-title">{person.name}</h3>
            <p>Full Stack Developer</p>
          </div>
        </div>
      </div>
    )
  );
}

export default AboutModal;
