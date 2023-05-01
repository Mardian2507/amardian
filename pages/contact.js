import Layout from "@components/Layout";
import AudioInfo from "components/AudioInfo";
import GithubIcon from "components/svgs/githubIcon";
import LinkedinIcon from "components/svgs/linkedinIcon";
import ResumeIcon from "components/svgs/resumeIcon";
import WhatsappIcon from "components/svgs/whatsappIcon";
import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import Avatar1 from "/public/assets/avatar/avatar1.webp";
import Avatar2 from "/public/assets/avatar/avatar2.webp";
import Avatar3 from "/public/assets/avatar/avatar3.webp";
import Avatar4 from "/public/assets/avatar/avatar4.webp";
import Avatar5 from "/public/assets/avatar/avatar5.webp";

const icons = [
  {
    href: "https://www.linkedin.com/in/mardian-suherman-6a054a183/",
    img: LinkedinIcon,
    text: "Linkedin",
  },
  {
    href: "https://github.com/Mardian2507",
    img: GithubIcon,
    text: "Github",
  },
  {
    href: "whatsapp://send?text=Assalamualaikum&phone=+6285659467422",
    img: WhatsappIcon,
    text: "WhatsApp",
  },
  {
    href: "",
    img: ResumeIcon,
    text: "Resume",
  },
];

export default function Contact() {
  const audioSrc = "/assets/audio/Let's-Talk.mp3";

  return (
    <Layout title="Mardian Contact">
      <div id="contact" className="w-full min-h-screen">
        <div className="lg:max-w-7xl m-auto px-2 pt-16 pb-24 w-full ">
          <h2
            className="pt-2 text-center tracking-widest text-primary uppercase"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Contact
          </h2>

          <div
            className="flex items-center py-4"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <h2>Get In Touch</h2>
            <AudioInfo audioSrc={audioSrc} />
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* left */}
            <div className="col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-gray-400 rounded-xl p-4">
              <div className="lg:p-4 h-full">
                <Tilt
                  className="tilt-card w-[250px] h-[230px] flex justify-center items-center"
                  perspective={500}
                  scale={1.1}
                  trackOnWindow={true}
                >
                  {/* <ContactUs /> */}
                  <Image
                    alt="Avatar1"
                    src={Avatar1}
                    width="500"
                    height="auto"
                    className="z-[100] absolute tilt-bgft1"
                    priority
                  />
                  <Image
                    alt="Avatar2"
                    src={Avatar2}
                    width="500"
                    height="auto"
                    className="z-[99] absolute tilt-bgft2"
                    priority
                  />
                  <Image
                    alt="Avatar3"
                    src={Avatar3}
                    width="500"
                    height="auto"
                    className="z-[98] absolute tilt-bgft3"
                    priority
                  />
                  <Image
                    alt="Avatar4"
                    src={Avatar4}
                    width="500"
                    height="auto"
                    className="z-[97] absolute tilt-bgft4"
                    priority
                  />
                  <Image
                    alt="Avatar5"
                    src={Avatar5}
                    width="500"
                    height="auto"
                    className="z-[96] absolute tilt-bgft5"
                    priority
                  />
                </Tilt>

                <div>
                  <h2
                    className="py-2"
                    // data-aos="zoom-in-up"
                    // data-aos-duration="3000"
                  >
                    Mardian Suherman
                  </h2>
                  <p className="font-semibold">Front-End Developer</p>
                  <p
                    className="py-4"
                    // data-aos="flip-right"
                    // data-aos-duration="2000"
                  >
                    I am available for freelance or full-time positions. Contact
                    me and let&apos;s talk.
                  </p>
                </div>

                <div>
                  <p className="uppercase pt-14">Connect With Me:</p>

                  <div className="flex items-center justify-between py-4">
                    <div className="container">
                      <ul
                        className=" flex justify-between"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                      >
                        {icons.map((icon, index) => (
                          <li
                            key={index}
                            className="group text-center cursor-pointer"
                          >
                            <Link href={icon.href}>
                              <div className="flex justify-center mb-2 ">
                                <icon.img className="shadow-md shadow-slate-600 rounded-md border-primary border-2 group-hover:shadow-none transition-all duration-200" />
                              </div>
                              <span className="text-xs m-auto dark:text-white/90">
                                {icon.text}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* right */}
            <div className="col-span-3 w-full h-auto shadow-md shadow-gray-400 rounded-xl lg:p-4">
              <div className="p-4">
                <form
                  method="POST"
                  action="https://getform.io/f/4986e683-7d49-4f12-94e1-2e5cd581586c"
                  encType="multipart/form-data"
                >
                  <div className="grid md:grid-cols-2 gap-4 w-full py-1">
                    <div className="flex flex-col">
                      <label htmlFor="name">
                        <span
                          className="text-label"
                          data-aos="fade-down"
                          data-aos-duration="1000"
                        >
                          Name
                        </span>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          minLength="2"
                          placeholder="input name"
                          className="bg-input peer"
                        />
                        <p className="text-corect">Name Invalid</p>
                      </label>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="phone">
                        <span
                          className="text-label"
                          data-aos="fade-down"
                          data-aos-duration="1000"
                        >
                          Phone Number
                        </span>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          minLength="8"
                          maxLength="14"
                          placeholder="input phone number"
                          className="bg-input peer"
                        />
                        <p className="text-corect">Phone Number Invalid</p>
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col py-1">
                    <label htmlFor="email">
                      <span
                        className="text-label"
                        data-aos="fade-down"
                        data-aos-duration="1000"
                      >
                        Email
                      </span>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="input email"
                        className="bg-input peer"
                      />
                      <p className="text-corect">Email Invalid</p>
                    </label>
                  </div>
                  <div className="flex flex-col py-1">
                    <label htmlFor="subject">
                      <span
                        className="text-label"
                        data-aos="fade-down"
                        data-aos-duration="1000"
                      >
                        Subject
                      </span>
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        minLength="2"
                        placeholder="input subject"
                        className="bg-input peer"
                      />
                      <p className="text-corect">Subject Invalid</p>
                    </label>
                  </div>
                  <div className="flex flex-col py-1">
                    <label htmlFor="message">
                      <span
                        className="text-label"
                        data-aos="fade-down"
                        data-aos-duration="1000"
                      >
                        Message
                      </span>
                      <textarea
                        id="message"
                        rows="5"
                        name="massage"
                        minLength="2"
                        placeholder="input message"
                        className="bg-input peer"
                      />
                      <p className="text-corect">Message Invalid</p>
                    </label>
                  </div>
                  <button
                    className="relative group w-full py-6 rounded-lg bg-primary before:rounded-lg before:absolute before:inset-0 before:transition-transform before:duration-700 before:scale-x-0 before:hover:scale-x-100 before:origin-left  before:hover:bg-secondary before:hover:dark:bg-gray-300 mt-4"
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                  >
                    <span className="inset-center z-10 text-light dark:group-hover:text-secondary">
                      Send Message
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="pt-20 flex-col flex justify-center items-center w-full">
            <p className="text-sm font-neuton">
              I was born and raised in Cidaun
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d988.9425514456555!2d107.34461482917149!3d-7.490605670001978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMjknMjYuMiJTIDEwN8KwMjAnNDIuNiJF!5e0!3m2!1sen!2sid!4v1679520435162!5m2!1sen!2sid"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-80 rounded-md border-2 border-secondary/30"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
}
