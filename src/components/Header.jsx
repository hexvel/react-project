import loginUser from "./images/login-user.png";
import illustrationImg from "./images/illustration.png";
import playSoundBtn from "./images/play-btn.png";

const getRandomNumber = (max, min) => {
  let result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
};

let randStudents = getRandomNumber(2400, 1200);
let randCompleteCourses = getRandomNumber(260, 80);
let randTutors = getRandomNumber(180, 16);
let experienceYears = getRandomNumber(12, 6);

export default function Header() {
  return (
    <header className="header">
      <div className="header-nav">
        <div className="header-nav-container">
          <div className="logo">
            <p>CREATE</p>
            <span>X</span>
          </div>
          <nav className="navigation">
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Courses</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-buttons">
          <button className="consultation-button">Get consultation</button>
          <div className="login-user-form">
            <img className="login-user-img" src={loginUser} alt={""} />
            <span className="login-user">Log in/Register</span>
          </div>
        </div>
      </div>
      <div className="header-middle">
        <div>
          <div className="header-middle-container">
            <div className="online-courses">
              <div className="play-sound">
                <img src={playSoundBtn} alt={""} />
                <p className="play-showreel">Play showreel</p>
              </div>
              <h1>Enjoy studying with Createx Online Courses</h1>
              <div>
                <button className="aboutus-btn">About us</button>
                <button className="explore-btn">Explore courses</button>
              </div>
            </div>
            <img src={illustrationImg} alt={""} />
          </div>
          <div className="header-stats">
            <div className="count-container">
              <p className="count">{randStudents}</p>
              <p>Students graduated</p>
            </div>
            <div className="circle"></div>
            <div className="count-container">
              <p className="count">{randCompleteCourses}</p>
              <p>Completed courses</p>
            </div>
            <div className="circle"></div>
            <div className="count-container">
              <p className="count">{randTutors}</p>
              <p>Qualified tutors</p>
            </div>
            <div className="circle"></div>
            <div className="count-container">
              <p className="count">{experienceYears}</p>
              <p>Years of experience</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
