import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../sliderProps";
import SectionTitle from "./SectionTitle";
const testimonialData = [
  {
    id: 1,
    avatar: "/assets/img/dhruv_sqaure.jpg",
    name: "Dhruv Chandrani",
    designation: "Lead Software Engineer",
    company: "7Span",
    comment:
      "We've used the Flutter boilerplate in two projects. It sped up feature development, kept our codebase clean, and made releases fast and reliable",
  },
  {
    id: 2,
    avatar: "/assets/img/shweta_square.jpeg",
    name: "Shweta Butani",
    designation: "Sr. Software Engineer",
    company: "7Span",
    comment:
      "The boilerplate made my development faster. I knew the structure, so I could focus on features. It kept code clean and helped the team work better together",
  },
  {
    id: 3,
    avatar: "/assets/img/rydham_square.jpg",
    name: "Rydham Hansaliya",
    designation: "Software Developer",
    company: "7Span",
    comment:
      "This Flutter boilerplate comes with Widgetbook for UI testing and built-in API clients like Dio and GraphQL for accelerating scalable App development.",
  },
  {
    id: 4,
    avatar: "/assets/img/avni_square.png",
    name: "Avni Prajapati",
    designation: "Software Engineer",
    company: "7Span",
    comment:
      "Flutter starter kit saves serious time. My favourite feature is the one script generates that a FULL feature with pagination and API integration",
  },
];
const Testimonial = () => {
  return (
    <section className="section testimonial-section">
      <div className="container">
        <SectionTitle
          heading={"Loved By Developers"}
          subHeading={"For Real!"}
        />
        <Swiper {...sliderProps.testimonial} className="lightbox-gallery">
          {testimonialData.map((testimonial) => (
            <SwiperSlide className="feature-box-03" key={testimonial.id}>
              <div className="feature-img">
                <img src={testimonial.avatar} alt="image" />
              </div>
              <div className="feature-content">
                <div className="icons">
                  <i className="fas fa-quote-left" />
                </div>
                <p>{testimonial.comment}</p>
                <h6>{testimonial.name}</h6>
                <span>
                  {testimonial.designation} at {testimonial.company}
                </span>
              </div>
            </SwiperSlide>
          ))}
          <div className="owl-dots"></div>
        </Swiper>
      </div>
    </section>
  );
};
export default Testimonial;
