import SectionTitle from "./SectionTitle";

const serviceData = [
  {
    id: 1,
    name: "Multi-Module Architecture",
    icon: "bi bi-diagram-3",
    desc: "Organize your project for better scalability and easier team collaboration with a clean, modular structure using Melos",
  },
  {
    id: 2,
    name: "Navigation & Routing",
    icon: "bi bi-signpost-2",
    desc: "Simplify in-app navigation with pre-configured routing for seamless screen transitions and user flows using Auto Route",
  },
  {
    id: 3,
    name: "Environment Configurations",
    icon: "bi bi-gear",
    desc: "Easily manage different environments (dev, staging, prod) with streamlined configuration management for smooth deployments",
  },
  {
    id: 4,
    name: "Design System",
    icon: "bi bi-palette",
    desc: "Built upon the principles of Atomic Design, our system provides a way for scalable and consistent UI development",
  },
  {
    id: 5,
    name: "Code Generation",
    icon: "bi bi-code-slash",
    desc: "Boost productivity and reduce repetitive code with integrated code generation using Bricks for common tasks.",
  },
  {
    id: 6,
    name: "Extensive Documentation",
    icon: "bi bi-book",
    desc: "Quickly understand and utilize the starter kit with our comprehensive and well-organized documentation.",
  },
  {
    id: 7,
    name: "In App Purchases",
    icon: "bi bi-credit-card",
    desc: "Easily implement and manage in-app purchase functionality to effectively monetize your Flutter application.",
  },
  {
    id: 8,
    name: "Notification Handling",
    icon: "bi bi-bell",
    desc: "Engage users with complete implementation of push notifications using OneSignal to keep them informed.",
  },
  {
    id: 9,
    name: "Customised Scripts",
    icon: "bi bi-terminal",
    desc: "Automate common development tasks like building and deploying with our helpful set of customized scripts.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section services-section bg-gray">
      <div className="container">
        <SectionTitle heading={"Key Features"} subHeading={"Included!"} />
        <div className="row gy-4">
          {serviceData.map((service) => (
            <div className="col-sm-6 col-lg-4" key={service.id}>
              <div className="feature-box-01">
                <div className="feature-content">
                  <div className="number">
                    <span>0{service.id}</span>
                  </div>
                  <h5>{service.name}</h5>
                  <p>{service.desc}</p>
                  <div className="icon">
                    <i className={service.icon} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
