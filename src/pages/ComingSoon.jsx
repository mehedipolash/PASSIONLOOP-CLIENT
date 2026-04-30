import { Player } from "@lottiefiles/react-lottie-player";
import { Fade, Zoom } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center px-4 text-center">

      {/* Lottie Animation */}
      <Zoom triggerOnce>
        <Player
          autoplay
          loop
          src="https://assets9.lottiefiles.com/packages/lf20_myejiggj.json"
          style={{ height: "260px", width: "260px" }}
        />
      </Zoom>

      {/* Badge */}
      <Fade triggerOnce delay={100}>
        <span className="inline-block bg-primary/10 text-primary border border-primary/30 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
          🚧 Under Implementation
        </span>
      </Fade>

      {/* Heading */}
      <Fade triggerOnce delay={200}>
        <h1 className="text-4xl lg:text-6xl font-extrabold text-accent mb-4 leading-tight">
          Coming{" "}
          <span className="text-primary">
            <Typewriter
              words={["Soon...", "Real Soon!", "Stay Tuned!"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1800}
            />
          </span>
        </h1>
      </Fade>

      {/* Description */}
      <Fade triggerOnce delay={300}>
        <p className="text-base-content/60 max-w-md mx-auto text-sm leading-relaxed mb-8">
          We're working hard to bring this feature to life. 
          Check back soon — something exciting is on the way! 🎉
        </p>
      </Fade>

      {/* Back Button */}
      <Fade triggerOnce delay={400}>
        <Link
          to="/"
          className="btn btn-primary px-8 rounded-xl"
        >
          ← Back to Home
        </Link>
      </Fade>

    </div>
  );
};

export default ComingSoon;