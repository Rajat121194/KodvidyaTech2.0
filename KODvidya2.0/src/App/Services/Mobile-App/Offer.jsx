import { TiTickOutline } from "react-icons/ti";
import mpImage from "../../../assets/pictures/mp.jpg";

const MobileAppServices = () => {
  return (
    <section className="bg-gold/10 px-4 sm:px-8 md:px-16 lg:px-30 py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Image Section */}
        <div className="w-full order-1 md:order-none">
          <img
            src={mpImage}
            alt="Mobile App Development"
            className="rounded-2xl w-[95%] h-auto object-cover shadow-gold shadow-sm hover:shadow-2xl transition-shadow duration-300"
          />
        </div>

        {/* Content Section */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-5xl md:text-[50px] lg:text-[65px] font-Bebas text-gold leading-tight md:leading-[70px]">
            What We Offer in Mobile App Development Services
          </h2>

          <p className="text-blue text-base sm:text-lg md:text-xl lg:text-[20px] font-Sans leading-relaxed md:leading-[32px]">
            We provide a variety of mobile app development services that are
            customised to meet your specific needs. We customise our services to
            meet your goals and budget, whether you need apps for particular
            platforms, cross-platform solutions, or development for a new
            platform.
          </p>

          <ul className="text-blue text-base sm:text-md md:text-lg lg:text-xl font-Sans leading-relaxed md:leading-[32px] space-y-2">
            {[
              "Custom iOS and Android apps development",
              "Native and cross-platform solutions",
              "Second platform app development",
              "UI/UX design",
              "Consulting and prototyping",
              "Automated QA and testing",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <TiTickOutline className="text-gold mt-1 text-lg md:text-xl flex-shrink-0" />
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
