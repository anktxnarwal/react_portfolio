import profilePic from "../../assets/profile-about.jpg";
import educationIcon from "../../assets/education.png";
import "./About.css";
function About() {
  return (
    <section id="about" className="aboutSection">
      <h1 className="sectionTitle">About Me</h1>
      <div className="details-upper-container">
        <div className="img-container">
          <img src={profilePic} />
        </div>
        <div className="details-container">
          <div className="education-section">
            <img src={educationIcon} />
            <h2>Education</h2>{" "}
            <p>
              Bachelors of Computer Application Guru Jambheshwar University of
              Science and Technology, Hisar
            </p>
          </div>
          <div className="education-section">
            <img src={educationIcon} />
            <h2>Certification</h2>
            <p>Full Stack Web Development EKarma India</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
