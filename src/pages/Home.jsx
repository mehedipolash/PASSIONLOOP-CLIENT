import Hero from "../components/Hero";
import FeaturedGroups from "../components/FeaturedGroups";
import WhyJoinUs from "../components/WhyJoinUs";
import HowItWorks from "../components/HowItWorks";
import { useLoaderData } from "react-router";

const Home = () => {
  const groups = useLoaderData();

  return (
    <div>
      <Hero />
      <div className="max-w-7xl mx-auto px-4">
        <FeaturedGroups groups={groups} />
      </div>
      <WhyJoinUs />
      <HowItWorks />
    </div>
  );
};

export default Home;