import Image from "next/image";
import { ParallaxBanner } from "react-scroll-parallax";
import ScrollIcon from "./svgs/scrollIcon";

export default function ParallaxSunset() {
  return (
    <>
      <div className="w-full  h-full justify-center items-center ">
        <div className="overflow-hidden">
          <ParallaxBanner
            layers={[
              {
                speed: -40,
                children: (
                  <div className=" translate-y-[490px] md:translate-y-[500px] lg:translate-y-[360px] w-full">
                    <Image
                      alt="bg"
                      src="/assets/sunset/9.webp"
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
                  <div className="lg:translate-y-[460px] w-full">
                    <Image
                      alt="bgstone"
                      src="/assets/sunset/8.webp"
                      width="1300"
                      height="868"
                      className="bg-cover "
                      priority
                    />
                  </div>
                ),
              },

              {
                translateX: [100, 0],
                speed: 20,
                children: (
                  <div className="absolute  lg:translate-y-[170px] lg:translate-x-[-640px] ">
                    <Image
                      alt="bird"
                      src="/assets/sunset/7.webp"
                      width="1300"
                      height="868"
                      className="bg-cover w-full "
                      priority
                    />
                  </div>
                ),
              },

              {
                translateX: [0, 100],
                speed: 10,
                children: (
                  <div className="absolute lg:translate-x-[-135px] lg:translate-y-[220px]">
                    <Image
                      alt="my"
                      src="/assets/sunset/6.webp"
                      width="200"
                      height="133"
                      className="bg-cover w-full "
                      priority
                    />
                  </div>
                ),
              },

              {
                speed: -20,
                children: (
                  <div className="absolute lg:translate-y-[160px]">
                    <Image
                      alt="me"
                      src="/assets/sunset/5.webp"
                      width="1300"
                      height="868"
                      className="bg-cover w-full "
                      priority
                    />
                  </div>
                ),
              },

              {
                speed: -60,
                children: (
                  <div className="absolute lg:translate-y-[575px]">
                    <Image
                      alt="me"
                      src="/assets/sunset/4.webp"
                      width="1300"
                      height="868"
                      className="bg-cover w-full "
                      priority
                    />
                  </div>
                ),
              },

              {
                speed: -50,
                children: (
                  <div className="absolute lg:translate-y-[460px]">
                    <Image
                      alt="me"
                      src="/assets/sunset/3.webp"
                      width="1300"
                      height="868"
                      className="bg-cover w-full "
                      priority
                    />
                  </div>
                ),
              },

              {
                speed: -40,
                children: (
                  <div className="absolute lg:translate-y-[365px]">
                    <Image
                      alt="me"
                      src="/assets/sunset/2.webp"
                      width="1300"
                      height="868"
                      className="bg-cover w-full "
                      priority
                    />
                  </div>
                ),
              },

              {
                translateX: [40, 0],
                translateY: [0, 100],
                speed: -100,
                children: (
                  <div className="absolute lg:translate-x-[-300px] lg:translate-y-[225px]">
                    <Image
                      alt="me"
                      src="/assets/sunset/1.webp"
                      width="800"
                      height="467"
                      className="bg-cover w-full "
                      priority
                    />
                  </div>
                ),
              },

              {
                speed: -50,
                children: (
                  <div className="absolute flex-col inset-0 flex items-center justify-center animate-pulse">
                    <ScrollIcon />
                    <span>SCROLL</span>
                  </div>
                ),
              },
            ]}
            className="lg:aspect-[16/10]"
          />
        </div>
      </div>
    </>
  );
}
