import NtFound from "components/svgs/ntFound";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 3500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen w-full flex p-5 flex-col items-center justify-center bg-404">
      <div className="">
        <NtFound />
      </div>
      <div className="text-5xl text-center font-bold text-light/90">
        <h2 className="text-danger">Oops!</h2> <h2>Page not found</h2>
      </div>
      <p className="text-light/75 mt-3 text-center">
        {" The page you're looking for dosen't exist..."}
      </p>
      <Link href="/">
        <div className="text-center bg-light/95 rounded-lg text-primary mt-5 font-semibold px-2 py-1 text-xs font-neuton">
          <p>Go home</p>
        </div>
      </Link>
    </div>
  );
}
