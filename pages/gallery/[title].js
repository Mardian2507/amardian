import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import mockPosts from "/utils/posts.json";
import Layout from "components/Layout";
import Link from "next/link";
import ArrowBack from "components/svgs/arrowBack";

export default function Title() {
  const router = useRouter();
  const { title } = router.query;
  const [thumbnail, setThumbnail] = useState();
  const [places, setPlaces] = useState();
  const [date, setDate] = useState();
  const [shortDescription, setShotDescription] = useState();

  useEffect(() => {
    if (!router.isReady) return;
    // console.log(title);

    mockPosts.map((item) => {
      if (item.title === title) {
        setThumbnail(item.thumbnail);
        setPlaces(item.places);
        setDate(item.date);
        setShotDescription("Keterangan: " + item.shortDescription);
      }
    });
  }, [title, router.isReady]);

  return (
    <Layout title={title}>
      <div className="w-full min-h-screen">
        <div className="mx-auto pb-10 md:pb-0">
          <div>
            {thumbnail && (
              <Image
                alt="Detail Photo"
                src={thumbnail}
                width="1300"
                height="975"
                className="m-auto mt-11"
                priority
              />
            )}
          </div>

          <div className="px-5 md:px-10">
            <p className="text-center p-2 flex-wrap space-x-1 text-[8px] md:text-[10px] lg:text-xs font-ubuntu">
              <span className="uppercase">{places}</span>
              <span>&bull;</span>
              <span>{date}</span>
            </p>
            <hr />

            <h2 className="text-center p-2 pt-5 font-semibold">{title}</h2>
            <p className="flex justify-center text-justify text-xs md:text-base text-secondary dark:text-light mb-10">
              {shortDescription}
            </p>
            <hr />
          </div>
        </div>

        <div className="pb-10 hidden md:block ">
          <div className="flex justify-center">
            <Link href="/gallery" className="p-4 m-auto">
              <ArrowBack />
              <span className="text-xs">back</span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
