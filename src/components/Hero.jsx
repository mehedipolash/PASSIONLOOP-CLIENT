// import { Link } from "react-router";

// const slides = [
//   {
//     id: "slide1",
//     prev: "slide3", // Removed the '#' to simplify logic
//     next: "slide2",
//     image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&auto=format&fit=crop",
//     title: "Find Your Tribe",
//     subtitle: "Connect with people who share your hobbies and passions",
//     cta: "Explore Groups",
//     link: "/groups",
//   },
//   {
//     id: "slide2",
//     prev: "slide1",
//     next: "slide3",
//     image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop",
//     title: "Create & Lead",
//     subtitle: "Start your own hobby group and build a community around what you love",
//     cta: "Create a Group",
//     link: "/createGroup",
//   },
//   {
//     id: "slide3",
//     prev: "slide2",
//     next: "slide1",
//     image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&auto=format&fit=crop",
//     title: "Grow Together",
//     subtitle: "Meet up, share skills, and grow with passionate people near you",
//     cta: "Join Now",
//     link: "/auth/signup",
//   },
// ];

// const Hero = () => {
//   const scrollToSlide = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
//     }
//   };

//   return (
//     <div className="w-full relative">
//       {/* Forced horizontal flex container with hidden overflow */}
//       <div className="flex overflow-x-hidden scroll-smooth snap-x snap-mandatory">
//         {slides.map((slide) => (
//           <div
//             key={slide.id}
//             id={slide.id}
//             className="w-full flex-none snap-start relative h-[500px]"
//           >
//             <img
//               src={slide.image}
//               className="w-full h-full object-cover"
//               alt={slide.title}
//             />
            
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
//               <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
//                 {slide.title}
//               </h1>
//               <p className="text-lg md:text-xl text-white/85 max-w-xl mb-8">
//                 {slide.subtitle}
//               </p>
//               <Link to={slide.link} className="btn btn-primary px-8 text-base">
//                 {slide.cta}
//               </Link>
//             </div>

//             {/* Navigation Arrows - Using buttons to trigger smooth scroll */}
//             <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
//               <button 
//                 onClick={() => scrollToSlide(slide.prev)} 
//                 className="btn btn-circle bg-black/40 border-0 text-white hover:bg-black/60"
//               >
//                 ❮
//               </button>
//               <button 
//                 onClick={() => scrollToSlide(slide.next)} 
//                 className="btn btn-circle bg-black/40 border-0 text-white hover:bg-black/60"
//               >
//                 ❯
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Hero;


import { useState, useEffect } from "react";
import { Link } from "react-router";

const slides = [
  {
    id: "slide1",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&auto=format&fit=crop",
    title: "Find Your Tribe",
    subtitle: "Connect with people who share your hobbies and passions",
    cta: "Explore Groups",
    link: "/allGroups",
  },
  {
    id: "slide2",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop",
    title: "Create & Lead",
    subtitle: "Start your own hobby group and build a community around what you love",
    cta: "Create a Group",
    link: "/createGroup",
  },
  {
    id: "slide3",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&auto=format&fit=crop",
    title: "Grow Together",
    subtitle: "Meet up, share skills, and grow with passionate people near you",
    cta: "Join Now",
    link: "/auth/signup",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = (index) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(index);
    setTimeout(() => setAnimating(false), 600);
  };

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = () => goTo((current + 1) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [current]);

  const slide = slides[current];

  return (
    <div
      className="w-full relative overflow-hidden"
      style={{ height: "clamp(280px, 55vw, 560px)" }}
    >
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          <img
            src={s.image}
            className="w-full h-full object-cover object-center"
            alt={s.title}
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Dark overlay + Content */}
      <div
        className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center"
        style={{ zIndex: 2, padding: "clamp(16px, 4vw, 48px)" }}
      >
        <div
          key={current}
          style={{ animation: "slideUp 0.6s ease forwards" }}
          className="w-full max-w-2xl mx-auto space-y-3"
        >
          <h1
            className="font-bold text-white drop-shadow-lg leading-tight"
            style={{ fontSize: "clamp(1.5rem, 5vw, 3.75rem)" }}
          >
            {slide.title}
          </h1>
          <p
            className="text-white/85 mx-auto"
            style={{
              fontSize: "clamp(0.85rem, 2.2vw, 1.25rem)",
              maxWidth: "min(90%, 560px)",
            }}
          >
            {slide.subtitle}
          </p>
          <Link
            to={slide.link}
            className="btn btn-primary inline-block mt-2"
            style={{ fontSize: "clamp(0.8rem, 2vw, 1rem)", padding: "0.5em 2em" }}
          >
            {slide.cta}
          </Link>
        </div>
      </div>

      {/* Arrows */}
      <div
        className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between"
        style={{ zIndex: 3, padding: "0 clamp(8px, 2vw, 20px)" }}
      >
        <button
          onClick={prev}
          className="btn btn-circle bg-black/40 border-0 text-white hover:bg-black/70 transition"
          style={{ width: "clamp(32px, 5vw, 48px)", height: "clamp(32px, 5vw, 48px)", minHeight: "unset", fontSize: "clamp(12px, 2vw, 18px)" }}
        >
          ❮
        </button>
        <button
          onClick={next}
          className="btn btn-circle bg-black/40 border-0 text-white hover:bg-black/70 transition"
          style={{ width: "clamp(32px, 5vw, 48px)", height: "clamp(32px, 5vw, 48px)", minHeight: "unset", fontSize: "clamp(12px, 2vw, 18px)" }}
        >
          ❯
        </button>
      </div>

      {/* Dot indicators */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2"
        style={{ zIndex: 3 }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? "clamp(16px, 3vw, 24px)" : "clamp(6px, 1.5vw, 8px)",
              height: "clamp(6px, 1.5vw, 8px)",
              background: i === current ? "white" : "rgba(255,255,255,0.4)",
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Hero;