import { useState, useEffect } from "react";

function PageLoading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return isLoading ? (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-light dark:bg-secondary z-50">
      <p className="text-xl font-semibold animate-blinkStar2">Loading...</p>
    </div>
  ) : null;
}

export default PageLoading;
