import { useRouteError, Link } from "react-router";
import { Player } from "@lottiefiles/react-lottie-player";
import { Fade, Slide } from "react-awesome-reveal";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center text-center px-4">
      
      {/* Lottie Animation */}
      <Fade triggerOnce>
        <Player
          autoplay
          loop
          src="https://assets9.lottiefiles.com/packages/lf20_ux4rlcic.json"
          style={{ height: "280px", width: "280px" }}
        />
      </Fade>

      {/* Error Code */}
      <Slide direction="up" triggerOnce>
        <h1 className="text-7xl font-bold text-primary mb-2">
          {error?.status || "Oops!"}
        </h1>
      </Slide>

      {/* Error Message */}
      <Slide direction="up" triggerOnce delay={100}>
        <h2 className="text-2xl font-semibold text-accent mb-4">
          {error?.status === 404
            ? "Page Not Found"
            : error?.statusText || "Something went wrong"}
        </h2>
      </Slide>

      {/* Description */}
      <Slide direction="up" triggerOnce delay={200}>
        <p className="text-base-content/60 max-w-md mb-8">
          {error?.status === 404
            ? "The page you're looking for doesn't exist or has been moved."
            : "An unexpected error occurred. Please try again later."}
        </p>
      </Slide>

      {/* Button */}
      <Slide direction="up" triggerOnce delay={300}>
        <Link to="/" className="btn btn-primary px-8">
          Back to Home
        </Link>
      </Slide>

    </div>
  );
};

export default ErrorPage;