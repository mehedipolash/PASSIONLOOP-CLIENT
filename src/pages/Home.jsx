import { useLoaderData } from "react-router";
import Hero from "../components/Hero";
import FeaturedGroups from "../components/FeaturedGroups";

const Home = () => {
  const groups = useLoaderData();

  return (
    <div>
      <Hero />
      <div className="max-w-7xl mx-auto px-4">
        <FeaturedGroups groups={groups} />
      </div>
    </div>
  );
};

export default Home;