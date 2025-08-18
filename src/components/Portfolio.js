import SectionTitle from "./SectionTitle";

const portfolioData = [
  {
    id: 1,
    title: "Vepaar Store",
    subtitle: "Business",
    image: "/open-source/dashing-kit/assets/img/vepaar-store.png",
    link: "https://play.google.com/store/apps/details?id=com.whatshash",
  },
  {
    id: 2,
    title: "Fotofizz",
    subtitle: "Social",
    image: "/open-source/dashing-kit/assets/img/fotofizz-app.png",
    link: "https://play.google.com/store/apps/details?id=com.fotofizz",
  },
  {
    id: 3,
    title: "CRM",
    subtitle: "Business",
    image: "/open-source/dashing-kit/assets/img/vepaar-crm.png",
    link: "https://play.google.com/store/apps/details?id=com.vepaar.crm",
  },
  {
    id: 4,
    title: "Voliz",
    subtitle: "Social",
    image: "/open-source/dashing-kit/assets/img/voliz-app.png",
    link: "https://play.google.com/store/apps/details?id=com.voliz",
  },
  {
    id: 5,
    title: "Motolith",
    subtitle: "Ecommerce",
    image: "/open-source/dashing-kit/assets/img/motolith-app.jpg",
    link: "https://play.google.com/store/apps/details?id=com.motolith",
  },
];

const Portfolio = () => {
  return (
    <section id="work" className="section work-section bg-gray">
      <div className="container">
        <SectionTitle heading={"Apps Powered By Us"} subHeading={"So Much!"} />
        <div className="row g-4 lightbox-gallery">
          {portfolioData.map((portfolio) => (
            <div className="col-sm-6 col-lg-4" key={portfolio.id}>
              <div className="portfolio-box">
                <div className="portfolio-img">
                  <a
                    href={portfolio.link}
                    className="gallery-link"
                    target="_blank"
                  >
                    <img src={portfolio.image} alt="image" />
                  </a>
                </div>
                <div className="portfolio-info">
                  <h6>{portfolio.title}</h6>
                  <span>{portfolio.subtitle}</span>
                  <a
                    href={portfolio.link}
                    className="gallery-link"
                    target="_blank"
                  >
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
