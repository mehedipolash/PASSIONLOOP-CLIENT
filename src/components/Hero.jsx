import { Link } from "react-router";

const slides = [
  {
    id: "slide1",
    prev: "slide3", // Removed the '#' to simplify logic
    next: "slide2",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&auto=format&fit=crop",
    title: "Find Your Tribe",
    subtitle: "Connect with people who share your hobbies and passions",
    cta: "Explore Groups",
    link: "/groups",
  },
  {
    id: "slide2",
    prev: "slide1",
    next: "slide3",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop",
    title: "Create & Lead",
    subtitle: "Start your own hobby group and build a community around what you love",
    cta: "Create a Group",
    link: "/createGroup",
  },
  {
    id: "slide3",
    prev: "slide2",
    next: "slide1",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&auto=format&fit=crop",
    title: "Grow Together",
    subtitle: "Meet up, share skills, and grow with passionate people near you",
    cta: "Join Now",
    link: "/signup",
  },
];

const Hero = () => {
  const scrollToSlide = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    }
  };

  return (
    <div className="w-full relative">
      {/* Forced horizontal flex container with hidden overflow */}
      <div className="flex overflow-x-hidden scroll-smooth snap-x snap-mandatory">
        {slides.map((slide) => (
          <div
            key={slide.id}
            id={slide.id}
            className="w-full flex-none snap-start relative h-[500px]"
          >
            <img
              src={slide.image}
              className="w-full h-full object-cover"
              alt={slide.title}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-white/85 max-w-xl mb-8">
                {slide.subtitle}
              </p>
              <Link to={slide.link} className="btn btn-primary px-8 text-base">
                {slide.cta}
              </Link>
            </div>

            {/* Navigation Arrows - Using buttons to trigger smooth scroll */}
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
              <button 
                onClick={() => scrollToSlide(slide.prev)} 
                className="btn btn-circle bg-black/40 border-0 text-white hover:bg-black/60"
              >
                ❮
              </button>
              <button 
                onClick={() => scrollToSlide(slide.next)} 
                className="btn btn-circle bg-black/40 border-0 text-white hover:bg-black/60"
              >
                ❯
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;