import image from "./images/why-createx-image.png";
import dots from "./images/dots.png";
import check from "./images/check.png";
import circle from "./images/circles.png";

export default function Section2() {
  return (
    <section className="second-section">
      <img className="background-dots" src={dots} alt={""} />
      <img className="main-image" src={image} alt={""} />
      <div className="who-we-are">
        <p className="who-we-are-text">WHO WE ARE</p>
        <strong className="why-createx">Why Createx?</strong>
        <div className="createx-list">
          <div className="block">
            <img className="check" src={check} alt={""} />
            <p className="why-createx-text">
              A fermentum in morbi pretium aliquam adipiscing donec tempus.
            </p>
          </div>
          <div className="block">
            <img className="check" src={check} alt={""} />
            <p className="why-createx-text">
              Vulputate placerat amet pulvinar lorem nisl.
            </p>
          </div>
          <div className="block">
            <img className="check" src={check} alt={""} />
            <p className="why-createx-text">
              Consequat feugiat habitant gravida quisque elit bibendum id
              adipiscing sed.
            </p>
          </div>
          <div className="block">
            <img className="check" src={check} alt={""} />
            <p className="why-createx-text">
              Etiam duis lobortis in fames ultrices commodo nibh.
            </p>
          </div>
          <div className="block">
            <img className="check" src={check} alt={""} />
            <p className="why-createx-text">
              Tincidunt sagittis neque sem ac eget.
            </p>
          </div>
          <div className="block">
            <img className="check" src={check} alt={""} />
            <p className="why-createx-text">
              Ultricies amet justo et eget quisque purus vulputate dapibus
              tortor.
            </p>
          </div>
        </div>
        <button className="more-about-us">More about us</button>
      </div>
      <img className="background-circle" src={circle} alt={""} />
    </section>
  );
}
