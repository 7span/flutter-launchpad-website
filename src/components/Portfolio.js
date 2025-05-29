import SectionTitle from "./SectionTitle";

const portfolioData = [
  {
    id: 1,
    title: "Vepaar Store",
    subtitle: "Business",
    image: "assets/img/vepaar-store.png",
    link: "https://play.google.com/store/apps/details?id=com.whatshash",
  },
  {
    id: 2,
    title: "Abu Dhabi Pass",
    subtitle: "Travel",
    image: "assets/img/abu-dabhi-pass-app.png",
    link: "https://play.google.com/store/apps/details?id=com.theabudhabipass.officialapp",
  },
  {
    id: 3,
    title: "Fotofizz",
    subtitle: "Social",
    image: "assets/img/fotofizz-app.png",
    link: "https://play.google.com/store/apps/details?id=com.fotofizz",
  },
  {
    id: 4,
    title: "CRM",
    subtitle: "Business",
    image: "assets/img/vepaar-crm.png",
    link: "https://play.google.com/store/apps/details?id=com.vepaar.crm",
  },
  {
    id: 5,
    title: "Voliz",
    subtitle: "Social",
    image: "assets/img/voliz-app.png",
    link: "https://play.google.com/store/apps/details?id=com.voliz",
  },
  {
    id: 6,
    title: "Liquify",
    subtitle: "Fintech",
    image: "assets/img/liquify-app.png",
    link: "https://play.google.com/store/apps/details?id=com.liquify",
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
