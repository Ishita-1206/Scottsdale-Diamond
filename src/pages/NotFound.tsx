import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-6xl font-playfair font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-playfair font-semibold text-foreground mb-4">
          Page Not Found
        </h2>
        <p className="text-muted-foreground font-inter mb-8 leading-relaxed">
          The page you're looking for doesn't exist. It might have been moved, deleted, 
          or you entered the wrong URL.
        </p>
        <Link to="/">
          <button className="btn-luxury">
            Return to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
