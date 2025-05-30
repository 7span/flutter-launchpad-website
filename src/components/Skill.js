import SectionTitle from "./SectionTitle";

const skillData = [
  {
    id: 1,
    avatar: "/open-source/flutter-launchpad/assets/img/pratik_square.jpeg",
    name: "Pratik Butani",
    designation: "The Starter",
    link: "https://www.linkedin.com/in/pratikbutani/",
  },
  {
    id: 2,
    avatar: "/open-source/flutter-launchpad/assets/img/cavin_square.png",
    name: "Cavin Macwan",
    designation: "The Maker",
    link: "https://www.linkedin.com/in/cavin-macwan/",
  },
  {
    id: 3,
    avatar: "/open-source/flutter-launchpad/assets/img/urvashi_square.jpeg",
    name: "Urvashi Kharecha",
    designation: "Config Captain",
    link: "https://www.linkedin.com/in/urvashi-kharecha/",
  },
  {
    id: 4,
    avatar: "/open-source/flutter-launchpad/assets/img/avni_square.png",
    name: "Avni Prajapati",
    designation: "The Doc Queen",
    link: "https://www.linkedin.com/in/avniprajapati/",
  },
  {
    id: 5,
    avatar: "/open-source/flutter-launchpad/assets/img/bhavik_square.jpg",
    name: "Bhavik Maradiya",
    designation: "The API Whisperer",
    link: "https://www.linkedin.com/in/bhavik-maradiya/",
  },
  {
    id: 6,
    avatar: "/open-source/flutter-launchpad/assets/img/tulsi_square.png",
    name: "Tulsi Gohel",
    designation: "Auth Angel",
    link: "https://www.linkedin.com/in/tulsi-gohel/",
  },
  {
    id: 7,
    avatar: "/open-source/flutter-launchpad/assets/img/nikunj_square.png",
    name: "Nikunj Panchal",
    designation: "The Privacy Protector",
    link: "https://www.linkedin.com/in/nikunj-panchal-/",
  },
  {
    id: 8,
    avatar: "/open-source/flutter-launchpad/assets/img/rydham_square.jpg",
    name: "Rydham Hansliya",
    designation: "Workflow Wizard",
    link: "https://www.linkedin.com/in/rydham1308/",
  },
];
const Skill = () => {
  return (
    <section id="skill" className="section experience-section">
      <div className="container">
        <SectionTitle heading={"Meet the Team"} subHeading={"Rockstars!"} />
        <div className="row g-4">
          {skillData.map((testimonial) => (
            <div
              className="col-12 col-md-6 col-lg-3"
              onClick={() => window.open(testimonial.link, "_blank")}
              style={{ cursor: "pointer" }}
              key={testimonial.id}
            >
              <div className="feature-box-03 d-flex justify-content-center align-items-center flex-column h-20">
                <div className="feature-img">
                  <img src={testimonial.avatar} alt="image" />
                </div>
                <div className="feature-content">
                  <h6>{testimonial.name}</h6>
                  <span>{testimonial.designation}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="owl-dots"></div>
      </div>
    </section>
  );
};

export default Skill;
