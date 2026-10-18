import profilePic from "../../assets/profile-about.jpg";
import educationIcon from "../../assets/education.png";
import "./About.css";

function About() {
  return (
    <section id="about" className="aboutSection">
      <h1 className="sectionTitle">About Me</h1>

      <div className="details-upper-container">
        <div className="img-container">
          <img src={profilePic} alt="Ankit's profile" />
        </div>

        <div className="details-container">
          {/* Bachelor's Education */}
          <div className="education-section">
            <img src={educationIcon} alt="" />
            <h3>Bachelor of Computer Application (BCA)</h3>
            <p>
              Guru Jambheshwar University of Science and Technology, Hisar,
              Haryana
            </p>
          </div>

          {/* Master's Education */}
          <div className="education-section">
            <img src={educationIcon} alt="" />
            <h3>Master of Computer Applications (MCA)</h3>
            <p>Central University of Haryana (CUH)</p>
            <p>Mahendergarh, Haryana</p>
          </div>
        </div>
      </div>
      {/* Certification */}
      <div className="education-section certification-section">
        <img src={educationIcon} alt="" />
        <h2>Certification</h2>
        <h3>Full Stack Web Development</h3>
        <p>eKarma India — Haryana Government</p>
      </div>
    </section>
  );
}

export default About;
