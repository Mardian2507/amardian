import { auth } from "config/firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { useEffect, useState } from "react";
import GoogleIcon from "./svgs/googleIcon";

export default function GoogleLogin() {
  const [isLoading, setIsLoading] = useState(false);

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      setIsLoading(true);
      // alert("Loading 5 Second");
      await signInWithRedirect(auth, provider);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 backdrop-blur-md z-20">
      <div className=" w-full h-full flex justify-center items-center">
        <div className="text-center p-2 rounded-lg text-secondary bg-light shadow-lg shadow-black">
          <p className="text-base md:text-xl font-bold pb-2">Login With :</p>
          <button
            type="button"
            onClick={googleSignIn}
            disabled={isLoading}
            className="p-2 border-2 border-primary rounded-md shadow-md shadow-black hover:shadow-none hover:scale-90"
          >
            {isLoading ? (
              <span className="text-xs md:text-base animate-blinkStar1">
                Loading...
              </span>
            ) : (
              <GoogleIcon />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
