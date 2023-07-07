import Layout from "@components/Layout";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import Skillsbg1 from "/public/assets/bgskills/1.webp";
import Skillsbg2 from "/public/assets/bgskills/2.webp";
import Skillsbg3 from "/public/assets/bgskills/3.webp";
import Skillsbg4 from "/public/assets/bgskills/4.webp";
import Skillsbg5 from "/public/assets/bgskills/5.webp";
import Skillsbg7 from "/public/assets/bgskills/6.webp";

const imgSkills = [
  {
    id: 1,
    href: "https://github.com/Mardian2507",
    imgSkill: "/assets/skills/html.webp",
    text: "HTML",
  },
  {
    id: 2,
    href: "https://github.com/Mardian2507",
    imgSkill: "/assets/skills/css.webp",
    text: "CSS",
  },
  {
    id: 3,
    href: "https://github.com/Mardian2507",
    imgSkill: "/assets/skills/javascript.webp",
    text: "JavaScript",
  },
  {
    id: 4,
    href: "https://github.com/Mardian2507",
    imgSkill: "/assets/skills/firebase.webp",
    text: "Firebase",
  },
  {
    id: 5,
    href: "https://github.com/Mardian2507",
    imgSkill: "/assets/skills/tailwind.webp",
    text: "Tailwind",
  },
  {
    id: 6,
    href: "https://github.com/Mardian2507",
    imgSkill: "/assets/skills/bootstrap.webp",
    text: "Bootstrap",
  },
  {
    id: 7,
    href: "https://github.com/Mardian2507",
    imgSkill: "/assets/skills/github.webp",
    text: "Github",
  },
  {
    id: 8,
    href: "https://github.com/Mardian2507",
    imgSkill: "/assets/skills/nextjs.webp",
    text: "NextJS",
  },
  {
    id: 9,
    href: "https://github.com/Mardian2507",
    imgSkill: "/assets/skills/react.webp",
    text: "React",
  },
  {
    id: 10,
    href: "https://github.com/Mardian2507",
    imgSkill: "/assets/skills/vuejs.webp",
    text: "Vue",
  },
];

export default function Skills() {
  return (
    <Layout title="Mardian Skills">
      <div className=" relative w-full min-h-screen overflow-hidden dark:bg-black bg-slate-400">
        <div className="lg:max-w-7xl m-auto px-2 lg:px-0 pt-16 lg:pt-0 flex flex-col items-center justify-center">
          <h2 className="lg:fixed top-24 pt-2 text-center tracking-widest uppercase text-light z-30 text-shadow-secondary">
            Skills
          </h2>
          <div className="lg:fixed pt-6 pb-2 lg:py-0 right-52 top-44 z-30 px-5 text-light">
            <h3 className="text-xl md:text-3xl">What I Can Do</h3>
          </div>
          <div className="fixed w-full h-12 bg-light opacity-80 dark:bg-opacity-0 z-10 top-0" />

          <Image
            alt="Avatar5"
            src={Skillsbg7}
            width="1500"
            height="auto"
            className="fixed aspect-[4/16] lg:aspect-[16/12] "
            priority
          />

          <div className="lg:fixed top-60 grid lg:grid-cols-6 z-30">
            <div className="col-span-3"></div>
            <div className="grid grid-cols-2 md:grid-cols-5  lg:col-span-3 gap-4 lg:gap-2 z-20 px-10">
              {imgSkills.map((items) => (
                <div
                  key={items.id}
                  className="group bg-light p-3 shadow-md shadow-black hover:shadow-lg rounded-xl"
                >
                  <div className="flex flex-col justify-center items-center">
                    <div className="m-auto">
                      <Image
                        alt={items.id}
                        src={items.imgSkill}
                        width="250"
                        height="250"
                        className="m-auto group-hover:-rotate-12 ease-in-out duration-300"
                        priority
                      />
                    </div>
                    <div className=" text-secondary">
                      <h3>{items.text}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block w-full h-full overflow-hidden ">
            <Tilt
              className="tilt-card w-[1000px] h-[600px] justify-center items-center"
              perspective={6000}
              trackOnWindow={true}
            >
              <Image
                alt="Avatar1"
                src={Skillsbg1}
                width="1500"
                height="auto"
                className="z-[100] absolute tilt-bgft4"
                priority
              />
              <Image
                alt="Avatar2"
                src={Skillsbg2}
                width="1500"
                height="auto"
                className="z-[99] absolute tilt-bgft1"
                priority
              />
              <Image
                alt="Avatar3"
                src={Skillsbg3}
                width="1500"
                height="auto"
                className="z-[98] absolute tilt-bgft8"
                priority
              />
              <Image
                alt="Avatar4"
                src={Skillsbg4}
                width="1500"
                height="auto"
                className="z-[97] absolute tilt-bgft5"
                priority
              />
              <Image
                alt="Avatar5"
                src={Skillsbg5}
                width="1500"
                height="auto"
                className="z-[96] absolute tilt-bgft3"
                priority
              />
            </Tilt>
          </div>
        </div>
      </div>
    </Layout>
  );
}
