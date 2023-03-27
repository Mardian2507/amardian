import Image from "next/image";
import { ParallaxBanner } from "react-scroll-parallax";

export default function ParallaxHero() {
  return (
    <>
      <div className="w-full  h-full justify-center items-center ">
        <div className="overflow-hidden mb-10">
          <ParallaxBanner
            layers={[
              {
                speed: -100,
                children: (
                  <div className=" translate-y-[490px] md:translate-y-[500px] lg:translate-y-[630px] w-full">
                    <Image
                      alt="bg"
                      src="/assets/img/bgsea.webp"
                      width="1300"
                      height="1673"
                      className="bg-cover "
                      priority
                    />
                  </div>
                ),
              },

              {
                speed: -40,
                children: (
                  <div className=" translate-y-[280px] md:translate-y-[370px] lg:translate-y-[460px] w-full">
                    <Image
                      alt="bgstone"
                      src="/assets/img/bgstone.webp"
                      width="1300"
                      height="868"
                      className="bg-cover "
                      priority
                    />
                  </div>
                ),
              },
              {
                speed: -50,
                children: (
                  <div className="absolute inset-0 flex items-center justify-end">
                    <h1 className="text-sm md:text-2xl lg:text-5xl p-2 md:p-10  text-white translate-y-[-200px] md:translate-y-[-150px] lg:translate-y-[100px] font-thin">
                      20-10-20
                    </h1>
                  </div>
                ),
              },
              {
                translateX: [100, 0],
                speed: 20,
                children: (
                  <div className="absolute translate-x-[-90px] translate-y-[340px] md:translate-y-[350px] md:translate-x-[-200px] lg:translate-x-[-500px] ">
                    <Image
                      alt="bird"
                      src="/assets/img/bird.webp"
                      width="1300"
                      height="868"
                      className="bg-cover w-full "
                      priority
                    />
                  </div>
                ),
              },
              {
                speed: -20,
                children: (
                  <div className="absolute translate-y-[155px] md:translate-y-[160px]">
                    <Image
                      alt="me"
                      src="/assets/img/me.webp"
                      width="1300"
                      height="868"
                      className="bg-cover w-full "
                      priority
                    />
                  </div>
                ),
              },

              {
                speed: -5,
                children: (
                  <div className="absolute  translate-y-[75px]">
                    <Image
                      alt="my"
                      src="/assets/img/my.webp"
                      width="1300"
                      height="868"
                      className="bg-cover w-full "
                      priority
                    />
                  </div>
                ),
              },
            ]}
            className="aspect-[16/12] md:aspect-[16/11] lg:aspect-[16/8]"
          />
        </div>
      </div>
    </>
  );
}
