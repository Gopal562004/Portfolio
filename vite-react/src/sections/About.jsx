import { useState, useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import CharacterModel from "../components/CharacterModel";
import Button from "../components/Button.jsx";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
const globeEl = useRef();

useEffect(() => {
  if (globeEl.current) {
    const controls = globeEl.current.controls();

    // Disable zoom
    controls.enableZoom = false;

    // Enable auto-rotate
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5; // Adjust speed as needed (default: 2.0)

    controls.update();
  }
}, []);
  const handleCopy = () => {
    navigator.clipboard.writeText("gopalgawas2004@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20 select-none" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="h-[250px]">
              <CharacterModel />
            </div>
            <div>
              <p className="grid-headtext">Hi, I’m Gopal Gawas</p>
              <p className="grid-subtext">
                I'm a 3rd year Computer Engineering student passionate about
                full-stack development. I love building modern, responsive, and
                interactive web apps using the MERN stack.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="../../public/images/techimg-Photoroom.png"
              alt="grid-2"
              draggable="false"
              className="w-full sm:h-[276px] h-fit object-contain select-none pointer-events-none"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools
                that allow me to build robust and scalable applications
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                ref={globeEl}
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 40,
                    lng: -100,
                    text: "Rjieka, Croatia",
                    color: "white",
                    size: 15,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I’m flexible with time zones and open to collaborating globally
              </p>
              <p className="grid-subtext">
                I&apos;m based in Palghar, Maharashtra, India and open to remote
                work or local on-site opportunities.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="../../public/images/code4-removebg-preview.png"
              alt="grid-3"
              draggable="false"
              className="w-full sm:h-[266px] h-fit object-contain select-none pointer-events-none"
            />

            <div>
              <p className="grid-headtext">Fueling Ideas Through Code</p>
              <p className="grid-subtext">
                I'm passionate about turning ideas into real-world solutions
                through code. I love building products that make a difference —
                currently working on a platform for coders to showcase projects,
                share ideas, and grow together. For me, coding is a way to
                create, connect, and innovate.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="../../public/images/grid4.png"
              alt="grid-4"
              draggable="false"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top select-none pointer-events-none"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={
                    hasCopied
                      ? "../../public/images/tick.svg"
                      : "../../public/images/copy.svg"
                  }
                  alt="copy"
                  draggable="false"
                  className="select-none pointer-events-none"
                />
                <p className="lg:text-lg md:text-xl font-medium text-gray_gradient text-white">
                  gopalgawas2004
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
