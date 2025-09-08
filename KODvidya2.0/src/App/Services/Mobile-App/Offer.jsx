import { TiTickOutline } from "react-icons/ti";
import mpImage from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/mp.jpg";

const MobileAppServices = () => {
  return (
    <section className="bg-gold/10 px-15 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="w-full">
          <img
            src={mpImage}
            alt="Mobile App Development"
            className="rounded-md w-full h-auto object-cover"
          />
        </div>

        <div>
          <h2 className="text-6xl font-Bebas text-gold mb-3">
            What we offer in Mobile App Development Services
          </h2>
          <p className="text-blue text-xl font-Sans mb-3">
            We provide a variety of mobile app development services that are
            customised to meet your specific needs. We customise our services to
            meet your goals and budget, whether you need apps for particular
            platforms, cross-platform solutions, or development for a new
            platform.
          </p>

          <ul className="text-md space-y-2 text-blue">
            {[
              "Custom iOS and Android apps development",
              "Native and cross-platform solutions",
              "Second platform app development",
              "UI/UX design",
              "Consulting and prototyping",
              "Automated QA and testing",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <TiTickOutline className="text-gold font-Sans mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MobileAppServices;
