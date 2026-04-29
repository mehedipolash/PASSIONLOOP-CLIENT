import { Fade, Slide } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";

const features = [
  { icon: "🤝", title: "Meet Like-Minded People", desc: "Find and connect with people who share the same hobbies and interests as you." },
  { icon: "📅", title: "Organize Meetups", desc: "Schedule group meetups, events, and activities with ease." },
  { icon: "🌍", title: "Local & Online Groups", desc: "Join groups in your city or participate in online communities from anywhere." },
  { icon: "🚀", title: "Grow Your Skills", desc: "Learn from others, share your knowledge, and grow together as a community." },
];

const WhyJoinUs = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <Fade triggerOnce>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-accent mb-3">
              Why Join{" "}
              <span className="text-primary">
                <Typewriter
                  words={["PassionLoop?", "a Group?", "Us Today?"]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h2>
            <p className="text-base-content/70 max-w-xl mx-auto">
              Whether you're a beginner or an expert, there's a place for everyone in PassionLoop.
            </p>
          </div>
        </Fade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <Slide key={i} direction="up" triggerOnce delay={i * 100}>
              <div className="bg-base-100 border border-base-300 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-accent mb-2">{feature.title}</h3>
                <p className="text-sm text-base-content/70">{feature.desc}</p>
              </div>
            </Slide>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;