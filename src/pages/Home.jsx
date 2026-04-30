

import Hero from "../components/Hero";
import FeaturedGroups from "../components/FeaturedGroups";
import WhyJoinUs from "../components/WhyJoinUs";
import HowItWorks from "../components/HowItWorks";
import { useLoaderData } from "react-router";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  const groups = useLoaderData();
  // const [isDark, setIsDark] = useState(false);

  // const toggleTheme = () => {
  //   const newTheme = isDark ? "light" : "dark";
  //   document.documentElement.setAttribute("data-theme", newTheme);
  //   setIsDark(!isDark);
  // };

  return (
    <div className="transition-colors duration-500">

      {/* Floating Theme Toggle */}
      {/* <button
        onClick={toggleTheme}
        title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary text-primary-content shadow-lg flex items-center justify-center text-xl hover:scale-110 active:scale-95 transition-transform duration-200"
      >
        {isDark ? "☀️" : "🌙"}
      </button> */}

      {/* Hero - full width */}
      <Fade triggerOnce>
        <Hero />
      </Fade>

      {/* Featured Groups */}
      <div className="max-w-7xl mx-auto px-4">
        <Fade triggerOnce delay={100}>
          <FeaturedGroups groups={groups} />
        </Fade>
      </div>

      {/* Why Join Us */}
      <Fade triggerOnce delay={100}>
        <WhyJoinUs />
      </Fade>

      {/* How It Works */}
      <Fade triggerOnce delay={100}>
        <HowItWorks />
      </Fade>

    </div>
  );
};

export default Home;

