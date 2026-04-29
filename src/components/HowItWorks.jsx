import { Player } from "@lottiefiles/react-lottie-player";
import { Fade, Slide } from "react-awesome-reveal";

const steps = [
  { step: "01", title: "Sign Up", desc: "Create your free account in seconds and set up your profile." },
  { step: "02", title: "Find a Group", desc: "Browse hobby groups by category, location, or interest." },
  { step: "03", title: "Join & Connect", desc: "Join a group, attend meetups, and connect with members." },
  { step: "04", title: "Grow Together", desc: "Share experiences, learn new skills, and build lasting friendships." },
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-4 bg-base-200">
      <div className="max-w-7xl mx-auto">
        <Fade triggerOnce>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-accent mb-3">How It Works</h2>
            <p className="text-base-content/70 max-w-xl mx-auto">
              Getting started with PassionLoop is quick and simple.
            </p>
          </div>
        </Fade>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Lottie Animation */}
          <Slide direction="left" triggerOnce className="w-full lg:w-1/2">
            <div className="w-full max-w-sm mx-auto">
              <Player
                autoplay
                loop
                src="https://assets2.lottiefiles.com/packages/lf20_kkflmtur.json"
                style={{ height: "300px", width: "300px" }}
              />
            </div>
          </Slide>

          {/* Steps */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {steps.map((item, i) => (
              <Slide key={i} direction="right" triggerOnce delay={i * 150}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-primary text-primary-content flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-accent">{item.title}</h3>
                    <p className="text-sm text-base-content/70">{item.desc}</p>
                  </div>
                </div>
              </Slide>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;