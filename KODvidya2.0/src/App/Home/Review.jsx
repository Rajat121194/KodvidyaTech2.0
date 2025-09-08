import { useState, useEffect, useRef } from "react";
import { GiStarSkull, GiMoebiusStar } from "react-icons/gi";
import { TfiArrowLeft, TfiArrowRight } from "react-icons/tfi";
import JohnSmith from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/client1.jpg";
import EmilyZhang from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/client2.jpg";
import SamanthaLee from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/client3.jpg";
import MarkJohnson from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/client4.jpg";
import SophiaReynolds from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/client5.jpg";
import LilyCarter from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/client9.jpg";
import ZStub from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/client10.jpg";
import MinJun from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/client11.jpg";
import OliviaBennett from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/client12.jpg";
import JamesWalker from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/client13.jpg";
import ChloeRivera from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/client14.jpg";

const testimonials = [
  {
    name: "John Smith",
    role: "CEO, Tech Innovators Inc.",
    text: "The team at CodeMechanism Infotech has been an invaluable partner. Their expertise in software development and project management helped us take our product to the next level. Highly recommend their services!",
    img: JohnSmith,
    rating: 5,
  },
  {
    name: "Emily Zhang",
    role: "Product Manager, Global Solutions",
    text: "Working with CodeMechanism was a game-changer. They delivered our app on time and exceeded our expectations. Their attention to detail and commitment to quality is unparalleled.",
    img: EmilyZhang,
    rating: 5,
  },
  {
    name: "Samantha Lee",
    role: "Head of Development, NextGen Enterprises",
    text: "We have been working with CodeMechanism Infotech Pvt. Ltd. for over two years now, and their team consistently delivers top-notch solutions. They are reliable, communicative, and results-oriented.",
    img: SamanthaLee,
    rating: 4,
  },
  {
    name: "Mark Johnson",
    role: "CTO, Smart Networks Ltd.",
    text: "The collaboration with CodeMechanism Infotech pvt. ltd. was seamless from start to finish. Their team understands the latest technologies and provides cutting-edge solutions that help our business thrive.",
    img: MarkJohnson,
    rating: 5,
  },
  {
    name: "Sophia Reynolds",
    role: "COO, Visionary Brands",
    text: "CodeMechanism Infotech is an exceptional partner. Their team is detail-oriented, innovative, and incredibly responsive. From strategy to execution, they delivered above expectations and ahead of schedule. It’s rare to find a tech team this committed to quality and collaboration. I look forward to working with them again.",
    img: SophiaReynolds,
    rating: 5,
  },
  {
    name: "Lily Carter",
    role: "Founder, Creatix Studio",
    text: "CodeMechanism totally blew me away! I had a vision for my app, and they brought it to life—way better than I imagined. Super friendly, super fast, and totally in sync with my ideas. As a young founder, I felt supported every step. Can’t wait to work with them again!",
    img: LilyCarter,
    rating: 5,
  },
  {
    name: "Z Stub",
    role: "Digital Artist & App Creator",
    text: "CodeMechanism Infotech Pvt. Ltd. is next-level. I threw a creative, kinda wild idea at them, and they totally ran with it. Super chill team, always on point, and the final product? 🔥 Couldn’t have asked for better. If you’ve got a dream, they’ll make it real.",
    img: ZStub,
    rating: 5,
  },
  {
    name: "Min-Jun Lee",
    role: "CEO, SeoulTech Startups ",
    text: "CodeMechanism Infotech PVT LTD was an excellent partner throughout our project. They understood our vision clearly, communicated effectively despite the time difference, and delivered outstanding results. Their team is highly skilled, respectful, and fast. We truly appreciate their dedication and would gladly work with them again on future projects.",
    img: MinJun,
    rating: 5,
  },
  {
    name: "Olivia Bennett",
    role: "Marketing Director, London Creative Co.",
    text: "Working with CodeMechanism has been an absolute pleasure. They’re not only technically brilliant but also incredibly easy to work with—always professional, proactive, and quick to respond. Our website and app turned out beautifully. I genuinely couldn’t recommend them more. They’re a rare find in the tech world.",
    img: OliviaBennett,
    rating: 4,
  },
  {
    name: "James Walker",
    role: "Owner, Walker Supplies Ltd. (Canada)",
    text: "I’ve been in business for over 30 years, and I can confidently say CodeMechanism Infotech pvt. ltd. is one of the most professional teams I’ve worked with. They listened to our needs, built a solid digital solution, and supported us every step of the way. Reliable, respectful, and excellent at what they do.",
    img: JamesWalker,
    rating: 4,
  },
  {
    name: "Chloe Rivera",
    role: "Fashion Influencer & Brand Founder",
    text: "CodeMechanism Infotech didn’t just meet expectations—they made my brand shine. Sleek design, smooth performance, and a team that gets aesthetics. They’re tech-savvy, detail-driven, and totally fabulous to work with. When your brand’s all about looking good and working flawlessly, you need a team like this.",
    img: ChloeRivera,
    rating: 5,
  },
];
function PaginationDots({ total, currentIndex, setCurrentIndex }) {
  const getVisibleDots = () => {
    const prevIndex = (currentIndex - 1 + total) % total;
    const nextIndex = (currentIndex + 1) % total;
    return [prevIndex, currentIndex, nextIndex];
  };

  const visibleDots = getVisibleDots();

  return (
    <div className="flex items-center justify-center gap-4">
      <div className="flex relative w-20 justify-between">
        {visibleDots.map((dotIndex, idx) => {
          const isActive = idx === 1; // middle dot
          return (
            <div
              key={dotIndex}
              onClick={() => setCurrentIndex(dotIndex)}
              className={`
                w-5 h-3 rounded-full cursor-pointer 
                transition-transform duration-500 ease-in-out
                ${isActive ? "bg-gold scale-125" : "bg-blue scale-30"}
              `}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="w-full px-4 py-25 bg-gold/10">
      <div className="container mx-auto">
        <h2 className="text-6xl text-center mb-2 text-gold font-Bebas">
          Happy Clients
        </h2>
        <p className="text-center text-xl sm:text-xl text-blue font-Sans mb-10">
          Having served more than 250 clients, we are happy to share their
          testimonials.
        </p>

        {/* Desktop Carousel */}
        <div className="hidden lg:flex relative items-center justify-center max-w-7xl mx-auto">
          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="absolute left-40 z-30 p-2 rounded-full bg-gold hover:bg-chitu text-chitu hover:text-gold hover:border-gold border-1"
          >
            <TfiArrowLeft />
          </button>

          {/* Testimonial Cards */}
          <div className="relative w-full max-w-5xl min-h-[480px] flex items-center justify-center overflow-hidden">
            {testimonials.map((t, i) => {
              let position = "hidden";
              if (i === currentIndex) position = "z-20 scale-100 opacity-100";
              else if (
                i ===
                (currentIndex - 1 + testimonials.length) % testimonials.length
              )
                position = "z-10 scale-80 opacity-30 -translate-x-32";
              else if (i === (currentIndex + 1) % testimonials.length)
                position = "z-10 scale-80 opacity-30 translate-x-32";

              return (
                <div
                  key={i}
                  className={`absolute transition-all duration-500 ease-in-out transform bg-chitu rounded-xl p-6 shadow-lg text-center ${position} sm:w-80 w-full px-1`}
                >
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <p className="text-sm font-Sans text-blue mb-2">{t.text}</p>
                  <h4 className="text-gold font-Sans">{t.name}</h4>
                  <p className="text-xs text-blue font-Sans mb-2">{t.role}</p>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) =>
                      i < t.rating ? (
                        <GiMoebiusStar
                          key={i}
                          className="text-orange-600 w-5 h-5"
                        />
                      ) : (
                        <GiStarSkull key={i} className="text-kalu w-5 h-5" />
                      )
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="absolute right-40 z-30 p-2 rounded-full bg-gold hover:bg-chitu hover:text-gold border-1 hover:border-gold text-chitu"
          >
            <TfiArrowRight />
          </button>

          {/* Pagination Dots — at bottom center */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <PaginationDots
              total={testimonials.length}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden flex flex-col items-center justify-center relative">
          <div className="transition-all duration-500 ease-in-out transform bg-chitu rounded-xl p-6 shadow-md text-center w-full max-w-sm mb-6">
            <img
              src={testimonials[currentIndex].img}
              alt={testimonials[currentIndex].name}
              className="w-20 h-20 rounded-full mx-auto mb-1 object-cover"
            />
            <p className="text-sm text-blue mb-4">
              {testimonials[currentIndex].text}
            </p>
            <h4 className="font-bold">{testimonials[currentIndex].name}</h4>
            <p className="text-xs text-blue mb-2">
              {testimonials[currentIndex].role}
            </p>
            <div className="flex justify-center">
              {[...Array(5)].map((_, i) =>
                i < testimonials[currentIndex].rating ? (
                  <GiMoebiusStar key={i} className="text-orange-600 w-5 h-5" />
                ) : (
                  <GiStarSkull key={i} className="text-kalu w-5 h-5" />
                )
              )}
            </div>
          </div>

          {/* Pagination Dots — below mobile card */}
          <PaginationDots
            total={testimonials.length}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>
      </div>
    </div>
  );
}
