// // // // // import { useState, useEffect, useRef } from "react";
// // // // // import Globe from "react-globe.gl";
// // // // // import CharacterModel from "../components/CharacterModel";
// // // // // import Button from "../components/Button.jsx";

// // // // // const About = () => {
// // // // //   const [hasCopied, setHasCopied] = useState(false);
// // // // // const globeEl = useRef();

// // // // // useEffect(() => {
// // // // //   if (globeEl.current) {
// // // // //     const controls = globeEl.current.controls();

// // // // //     // Disable zoom
// // // // //     controls.enableZoom = false;

// // // // //     // Enable auto-rotate
// // // // //     controls.autoRotate = true;
// // // // //     controls.autoRotateSpeed = 0.5; // Adjust speed as needed (default: 2.0)

// // // // //     controls.update();
// // // // //   }
// // // // // }, []);
// // // // //   const handleCopy = () => {
// // // // //     navigator.clipboard.writeText("gopalgawas2004@gmail.com");
// // // // //     setHasCopied(true);

// // // // //     setTimeout(() => {
// // // // //       setHasCopied(false);
// // // // //     }, 2000);
// // // // //   };

// // // // //   return (
// // // // //     <section className="c-space my-20 select-none" id="about">
// // // // //       <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
// // // // //         <div className="col-span-1 xl:row-span-3">
// // // // //           <div className="grid-container">
// // // // //             <div className="h-[250px]">
// // // // //               <CharacterModel />
// // // // //             </div>
// // // // //             <div>
// // // // //               <p className="grid-headtext">Hi, I’m Gopal Gawas</p>
// // // // //               <p className="grid-subtext">
// // // // //                 I'm a 3rd year Computer Engineering student passionate about
// // // // //                 full-stack development. I love building modern, responsive, and
// // // // //                 interactive web apps using the MERN stack.
// // // // //               </p>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         <div className="col-span-1 xl:row-span-3">
// // // // //           <div className="grid-container">
// // // // //             <img
// // // // //               src="../../public/images/techimg-Photoroom.png"
// // // // //               alt="grid-2"
// // // // //               draggable="false"
// // // // //               className="w-full sm:h-[276px] h-fit object-contain select-none pointer-events-none"
// // // // //             />

// // // // //             <div>
// // // // //               <p className="grid-headtext">Tech Stack</p>
// // // // //               <p className="grid-subtext">
// // // // //                 I specialize in a variety of languages, frameworks, and tools
// // // // //                 that allow me to build robust and scalable applications
// // // // //               </p>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         <div className="col-span-1 xl:row-span-4">
// // // // //           <div className="grid-container">
// // // // //             <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
// // // // //               <Globe
// // // // //                 ref={globeEl}
// // // // //                 height={326}
// // // // //                 width={326}
// // // // //                 backgroundColor="rgba(0, 0, 0, 0)"
// // // // //                 backgroundImageOpacity={0.5}
// // // // //                 showAtmosphere
// // // // //                 showGraticules
// // // // //                 globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
// // // // //                 bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
// // // // //                 labelsData={[
// // // // //                   {
// // // // //                     lat: 40,
// // // // //                     lng: -100,
// // // // //                     text: "Rjieka, Croatia",
// // // // //                     color: "white",
// // // // //                     size: 15,
// // // // //                   },
// // // // //                 ]}
// // // // //               />
// // // // //             </div>
// // // // //             <div>
// // // // //               <p className="grid-headtext">
// // // // //                 I’m flexible with time zones and open to collaborating globally
// // // // //               </p>
// // // // //               <p className="grid-subtext">
// // // // //                 I&apos;m based in Palghar, Maharashtra, India and open to remote
// // // // //                 work or local on-site opportunities.
// // // // //               </p>
// // // // //               <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         <div className="xl:col-span-2 xl:row-span-3">
// // // // //           <div className="grid-container">
// // // // //             <img
// // // // //               src="../../public/images/code4-removebg-preview.png"
// // // // //               alt="grid-3"
// // // // //               draggable="false"
// // // // //               className="w-full sm:h-[266px] h-fit object-contain select-none pointer-events-none"
// // // // //             />

// // // // //             <div>
// // // // //               <p className="grid-headtext">Fueling Ideas Through Code</p>
// // // // //               <p className="grid-subtext">
// // // // //                 I'm passionate about turning ideas into real-world solutions
// // // // //                 through code. I love building products that make a difference —
// // // // //                 currently working on a platform for coders to showcase projects,
// // // // //                 share ideas, and grow together. For me, coding is a way to
// // // // //                 create, connect, and innovate.
// // // // //               </p>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         <div className="xl:col-span-1 xl:row-span-2">
// // // // //           <div className="grid-container">
// // // // //             <img
// // // // //               src="../../public/images/contact.png"
// // // // //               alt="grid-4"
// // // // //               draggable="false"
// // // // //               className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top select-none pointer-events-none"
// // // // //             />

// // // // //             <div className="space-y-2">
// // // // //               <p className="grid-subtext text-center">Contact me</p>
// // // // //               <div className="copy-container" onClick={handleCopy}>
// // // // //                 <img
// // // // //                   src={
// // // // //                     hasCopied
// // // // //                       ? "../../public/images/tick.svg"
// // // // //                       : "../../public/images/copy.svg"
// // // // //                   }
// // // // //                   alt="copy"
// // // // //                   draggable="false"
// // // // //                   className="select-none pointer-events-none"
// // // // //                 />
// // // // //                 <p className="lg:text-lg md:text-xl font-medium text-gray_gradient text-white">
// // // // //                   gopalgawas2004
// // // // //                 </p>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default About;
// // // // import { useState, useEffect, useRef } from "react";
// // // // import Globe from "react-globe.gl";
// // // // import CharacterModel from "../components/CharacterModel";
// // // // import Button from "../components/Button.jsx";

// // // // const About = () => {
// // // //   const [hasCopied, setHasCopied] = useState(false);
// // // //   const [isInteractingGlobe, setIsInteractingGlobe] = useState(false);
// // // //   const [isInteractingCharacter, setIsInteractingCharacter] = useState(false);
// // // //   const globeEl = useRef();

// // // //   useEffect(() => {
// // // //     if (globeEl.current) {
// // // //       const controls = globeEl.current.controls();
// // // //       controls.enableZoom = false;
// // // //       controls.autoRotate = true;
// // // //       controls.autoRotateSpeed = 0.5;
// // // //       controls.update();
// // // //     }
// // // //   }, []);

// // // //   const handleCopy = () => {
// // // //     navigator.clipboard.writeText("gopalgawas2004@gmail.com");
// // // //     setHasCopied(true);
// // // //     setTimeout(() => setHasCopied(false), 2000);
// // // //   };

// // // //   return (
// // // //     <section className="c-space my-20 select-none" id="about">
// // // //       <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
// // // //         {/* Character Model */}
// // // //         <div className="col-span-1 xl:row-span-3">
// // // //           <div className="grid-container">
// // // //             <div
// // // //               className="h-[250px] flex justify-center items-center"
// // // //               onPointerDown={() => setIsInteractingCharacter(true)}
// // // //               onPointerUp={() => setIsInteractingCharacter(false)}
// // // //               onPointerLeave={() => setIsInteractingCharacter(false)}
// // // //             >
// // // //               <CharacterModel controlsEnabled={isInteractingCharacter} />
// // // //             </div>
// // // //             <div>
// // // //               <p className="grid-headtext">Hi, I’m Gopal Gawas</p>
// // // //               <p className="grid-subtext">
// // // //                 I'm a 3rd year Computer Engineering student passionate about
// // // //                 full-stack development. I love building modern, responsive, and
// // // //                 interactive web apps using the MERN stack.
// // // //               </p>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Tech Stack */}
// // // //         <div className="col-span-1 xl:row-span-3">
// // // //           <div className="grid-container">
// // // //             <img
// // // //               src="../../public/images/techimg-Photoroom.png"
// // // //               alt="grid-2"
// // // //               draggable="false"
// // // //               className="w-full sm:h-[276px] h-fit object-contain select-none pointer-events-none"
// // // //             />
// // // //             <div>
// // // //               <p className="grid-headtext">Tech Stack</p>
// // // //               <p className="grid-subtext">
// // // //                 I specialize in a variety of languages, frameworks, and tools
// // // //                 that allow me to build robust and scalable applications.
// // // //               </p>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Globe */}
// // // //         <div className="col-span-1 xl:row-span-4">
// // // //           <div className="grid-container">
// // // //             <div
// // // //               className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center"
// // // //               onPointerDown={() => setIsInteractingGlobe(true)}
// // // //               onPointerUp={() => setIsInteractingGlobe(false)}
// // // //               onPointerLeave={() => setIsInteractingGlobe(false)}
// // // //             >
// // // //               <div
// // // //                 className={`transition-all duration-200 ${
// // // //                   isInteractingGlobe
// // // //                     ? "pointer-events-auto"
// // // //                     : "pointer-events-none"
// // // //                 }`}
// // // //               >
// // // //                 <Globe
// // // //                   ref={globeEl}
// // // //                   height={326}
// // // //                   width={326}
// // // //                   backgroundColor="rgba(0, 0, 0, 0)"
// // // //                   backgroundImageOpacity={0.5}
// // // //                   showAtmosphere
// // // //                   showGraticules
// // // //                   globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
// // // //                   bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
// // // //                   labelsData={[
// // // //                     {
// // // //                       lat: 40,
// // // //                       lng: -100,
// // // //                       text: "Rjieka, Croatia",
// // // //                       color: "white",
// // // //                       size: 15,
// // // //                     },
// // // //                   ]}
// // // //                 />
// // // //               </div>
// // // //             </div>
// // // //             <div>
// // // //               <p className="grid-headtext">
// // // //                 I’m flexible with time zones and open to collaborating globally
// // // //               </p>
// // // //               <p className="grid-subtext">
// // // //                 I&apos;m based in Palghar, Maharashtra, India and open to remote
// // // //                 work or local on-site opportunities.
// // // //               </p>
// // // //               <Button
// // // //                 name="Get Resume"
// // // //                 isBeam
// // // //                 containerClass="w-full mt-10"
// // // //                 href="https://drive.google.com/file/d/1TZJPa0aecp6JzqnvYGny4fmBrz7rax_Y/view?usp=drive_link"
// // // //               />
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Coding Section */}
// // // //         <div className="xl:col-span-2 xl:row-span-3">
// // // //           <div className="grid-container">
// // // //             <img
// // // //               src="../../public/images/code4-removebg-preview.png"
// // // //               alt="grid-3"
// // // //               draggable="false"
// // // //               className="w-full sm:h-[266px] h-fit object-contain select-none pointer-events-none"
// // // //             />
// // // //             <div>
// // // //               <p className="grid-headtext">Fueling Ideas Through Code</p>
// // // //               <p className="grid-subtext">
// // // //                 I'm passionate about turning ideas into real-world solutions
// // // //                 through code. I love building products that make a difference —
// // // //                 currently working on a platform for coders to showcase projects,
// // // //                 share ideas, and grow together. For me, coding is a way to
// // // //                 create, connect, and innovate.
// // // //               </p>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Contact Section */}
// // // //         <div className="xl:col-span-1 xl:row-span-2">
// // // //           <div className="grid-container">
// // // //             <img
// // // //               src="../../public/images/contact.png"
// // // //               alt="grid-4"
// // // //               draggable="false"
// // // //               className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top select-none pointer-events-none"
// // // //             />
// // // //             <div className="space-y-2">
// // // //               <p className="grid-subtext text-center">Contact me</p>
// // // //               <div className="copy-container" onClick={handleCopy}>
// // // //                 <img
// // // //                   src={
// // // //                     hasCopied
// // // //                       ? "../../public/images/tick.svg"
// // // //                       : "../../public/images/copy.svg"
// // // //                   }
// // // //                   alt="copy"
// // // //                   draggable="false"
// // // //                   className="select-none pointer-events-none"
// // // //                 />
// // // //                 <p className="lg:text-lg md:text-xl font-medium text-gray_gradient text-white">
// // // //                   gopalgawas2004
// // // //                 </p>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default About;

// // // // import { useState, useEffect, useRef } from "react";
// // // // import Globe from "react-globe.gl";
// // // // import CharacterModel from "../components/CharacterModel";
// // // // import Button from "../components/Button.jsx";

// // // // const About = () => {
// // // //   const [hasCopied, setHasCopied] = useState(false);
// // // // const globeEl = useRef();

// // // // useEffect(() => {
// // // //   if (globeEl.current) {
// // // //     const controls = globeEl.current.controls();

// // // //     // Disable zoom
// // // //     controls.enableZoom = false;

// // // //     // Enable auto-rotate
// // // //     controls.autoRotate = true;
// // // //     controls.autoRotateSpeed = 0.5; // Adjust speed as needed (default: 2.0)

// // // //     controls.update();
// // // //   }
// // // // }, []);
// // // //   const handleCopy = () => {
// // // //     navigator.clipboard.writeText("gopalgawas2004@gmail.com");
// // // //     setHasCopied(true);

// // // //     setTimeout(() => {
// // // //       setHasCopied(false);
// // // //     }, 2000);
// // // //   };

// // // //   return (
// // // //     <section className="c-space my-20 select-none" id="about">
// // // //       <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
// // // //         <div className="col-span-1 xl:row-span-3">
// // // //           <div className="grid-container">
// // // //             <div className="h-[250px]">
// // // //               <CharacterModel />
// // // //             </div>
// // // //             <div>
// // // //               <p className="grid-headtext">Hi, I’m Gopal Gawas</p>
// // // //               <p className="grid-subtext">
// // // //                 I'm a 3rd year Computer Engineering student passionate about
// // // //                 full-stack development. I love building modern, responsive, and
// // // //                 interactive web apps using the MERN stack.
// // // //               </p>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         <div className="col-span-1 xl:row-span-3">
// // // //           <div className="grid-container">
// // // //             <img
// // // //               src="../../public/images/techimg-Photoroom.png"
// // // //               alt="grid-2"
// // // //               draggable="false"
// // // //               className="w-full sm:h-[276px] h-fit object-contain select-none pointer-events-none"
// // // //             />

// // // //             <div>
// // // //               <p className="grid-headtext">Tech Stack</p>
// // // //               <p className="grid-subtext">
// // // //                 I specialize in a variety of languages, frameworks, and tools
// // // //                 that allow me to build robust and scalable applications
// // // //               </p>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         <div className="col-span-1 xl:row-span-4">
// // // //           <div className="grid-container">
// // // //             <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
// // // //               <Globe
// // // //                 ref={globeEl}
// // // //                 height={326}
// // // //                 width={326}
// // // //                 backgroundColor="rgba(0, 0, 0, 0)"
// // // //                 backgroundImageOpacity={0.5}
// // // //                 showAtmosphere
// // // //                 showGraticules
// // // //                 globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
// // // //                 bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
// // // //                 labelsData={[
// // // //                   {
// // // //                     lat: 40,
// // // //                     lng: -100,
// // // //                     text: "Rjieka, Croatia",
// // // //                     color: "white",
// // // //                     size: 15,
// // // //                   },
// // // //                 ]}
// // // //               />
// // // //             </div>
// // // //             <div>
// // // //               <p className="grid-headtext">
// // // //                 I’m flexible with time zones and open to collaborating globally
// // // //               </p>
// // // //               <p className="grid-subtext">
// // // //                 I&apos;m based in Palghar, Maharashtra, India and open to remote
// // // //                 work or local on-site opportunities.
// // // //               </p>
// // // //               <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         <div className="xl:col-span-2 xl:row-span-3">
// // // //           <div className="grid-container">
// // // //             <img
// // // //               src="../../public/images/code4-removebg-preview.png"
// // // //               alt="grid-3"
// // // //               draggable="false"
// // // //               className="w-full sm:h-[266px] h-fit object-contain select-none pointer-events-none"
// // // //             />

// // // //             <div>
// // // //               <p className="grid-headtext">Fueling Ideas Through Code</p>
// // // //               <p className="grid-subtext">
// // // //                 I'm passionate about turning ideas into real-world solutions
// // // //                 through code. I love building products that make a difference —
// // // //                 currently working on a platform for coders to showcase projects,
// // // //                 share ideas, and grow together. For me, coding is a way to
// // // //                 create, connect, and innovate.
// // // //               </p>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         <div className="xl:col-span-1 xl:row-span-2">
// // // //           <div className="grid-container">
// // // //             <img
// // // //               src="../../public/images/contact.png"
// // // //               alt="grid-4"
// // // //               draggable="false"
// // // //               className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top select-none pointer-events-none"
// // // //             />

// // // //             <div className="space-y-2">
// // // //               <p className="grid-subtext text-center">Contact me</p>
// // // //               <div className="copy-container" onClick={handleCopy}>
// // // //                 <img
// // // //                   src={
// // // //                     hasCopied
// // // //                       ? "../../public/images/tick.svg"
// // // //                       : "../../public/images/copy.svg"
// // // //                   }
// // // //                   alt="copy"
// // // //                   draggable="false"
// // // //                   className="select-none pointer-events-none"
// // // //                 />
// // // //                 <p className="lg:text-lg md:text-xl font-medium text-gray_gradient text-white">
// // // //                   gopalgawas2004
// // // //                 </p>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default About;
// // // import { useState, useEffect, useRef } from "react";
// // // import Globe from "react-globe.gl";
// // // import CharacterModel from "../components/CharacterModel";
// // // import Button from "../components/Button.jsx";

// // // const About = () => {
// // //   const [hasCopied, setHasCopied] = useState(false);
// // //   const [isInteractingGlobe, setIsInteractingGlobe] = useState(false);
// // //   const [isInteractingCharacter, setIsInteractingCharacter] = useState(false);
// // //   const globeEl = useRef();

// // //   useEffect(() => {
// // //     if (globeEl.current) {
// // //       const controls = globeEl.current.controls();
// // //       controls.enableZoom = false;
// // //       controls.autoRotate = true;
// // //       controls.autoRotateSpeed = 0.5;
// // //       controls.update();
// // //     }
// // //   }, []);

// // //   const handleCopy = () => {
// // //     navigator.clipboard.writeText("gopalgawas2004@gmail.com");
// // //     setHasCopied(true);
// // //     setTimeout(() => setHasCopied(false), 2000);
// // //   };

// // //   return (
// // //     <section className="c-space my-20 select-none" id="about">
// // //       <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
// // //         {/* Character Model */}
// // //         <div className="col-span-1 xl:row-span-3">
// // //           <div className="grid-container">
// // //             <div
// // //               className="h-[250px] flex justify-center items-center"
// // //               onPointerDown={() => setIsInteractingCharacter(true)}
// // //               onPointerUp={() => setIsInteractingCharacter(false)}
// // //               onPointerLeave={() => setIsInteractingCharacter(false)}
// // //             >
// // //               <CharacterModel controlsEnabled={isInteractingCharacter} />
// // //             </div>
// // //             <div>
// // //               <p className="grid-headtext">Hi, I’m Gopal Gawas</p>
// // //               <p className="grid-subtext">
// // //                 Final-year Computer Engineering student passionate about full-stack development and cloud technologies. Skilled in building modern, scalable, and user-centric applications across web and cloud ecosystems.
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Tech Stack */}
// // //         <div className="col-span-1 xl:row-span-3">
// // //           <div className="grid-container">
// // //             <img
// // //               src="/images/techimg-Photoroom.png"
// // //               alt="grid-2"
// // //               draggable="false"
// // //               className="w-full sm:h-[276px] h-fit object-contain select-none pointer-events-none"
// // //             />
// // //             <div>
// // //               <p className="grid-headtext">Tech Stack</p>
// // //               <p className="grid-subtext">
// // //                 I specialize in a diverse set of technologies that help me build robust,
// // // scalable, and high-performance applications.

// // //               </p>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Globe */}
// // //         <div className="col-span-1 xl:row-span-4">
// // //           <div className="grid-container">
// // //             <div
// // //               className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center"
// // //               onPointerDown={() => setIsInteractingGlobe(true)}
// // //               onPointerUp={() => setIsInteractingGlobe(false)}
// // //               onPointerLeave={() => setIsInteractingGlobe(false)}
// // //             >
// // //               <div
// // //                 className={`transition-all duration-200 ${
// // //                   isInteractingGlobe
// // //                     ? "pointer-events-auto"
// // //                     : "pointer-events-none"
// // //                 }`}
// // //               >
// // //                 <Globe
// // //                   ref={globeEl}
// // //                   height={326}
// // //                   width={326}
// // //                   backgroundColor="rgba(0, 0, 0, 0)"
// // //                   backgroundImageOpacity={0.5}
// // //                   showAtmosphere
// // //                   showGraticules
// // //                   globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
// // //                   bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
// // //                   labelsData={[
// // //                     {
// // //                       lat: 40,
// // //                       lng: -100,
// // //                       text: "Rjieka, Croatia",
// // //                       color: "white",
// // //                       size: 15,
// // //                     },
// // //                   ]}
// // //                 />
// // //               </div>
// // //             </div>
// // //             <div>
// // //               <p className="grid-headtext">
// // //                 I’m flexible with time zones and open to collaborating globally
// // //               </p>
// // //               <p className="grid-subtext">
// // //                 I'm based in Mumbai, Maharashtra, India, and open to both remote work and local on-site opportunities.
// // //               </p>
// // //               <Button
// // //                 name="Get Resume"
// // //                 isBeam
// // //                 containerClass="w-full mt-10"
// // //                 href="https://drive.google.com/file/d/1GZ62w6e7ID0wiSinqsxaJ1sNwlB3rlXX/view?usp=sharing"
// // //               />
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Coding Section */}
// // //         <div className="xl:col-span-2 xl:row-span-3">
// // //           <div className="grid-container">
// // //             <img
// // //               src="/images/code4-removebg-preview.png"
// // //               alt="grid-3"
// // //               draggable="false"
// // //               className="w-full sm:h-[266px] h-fit object-contain select-none pointer-events-none"
// // //             />
// // //             <div>
// // //               <p className="grid-headtext">Fueling Ideas Through Code</p>
// // //               <p className="grid-subtext">
// // //                 I'm passionate about turning ideas into real-world solutions
// // //                 through code. I love building products that make a difference —
// // //                 currently working on a platform for coders to showcase projects,
// // //                 share ideas, and grow together. For me, coding is a way to
// // //                 create, connect, and innovate.
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Contact Section */}
// // //         <div className="xl:col-span-1 xl:row-span-2">
// // //           <div className="grid-container">
// // //             <img
// // //               src="/images/contact.png"
// // //               alt="grid-4"
// // //               draggable="false"
// // //               className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top select-none pointer-events-none"
// // //             />
// // //             <div className="space-y-2">
// // //               <p className="grid-subtext text-center">Contact me</p>
// // //               <div className="copy-container" onClick={handleCopy}>
// // //                 <img
// // //                   src={
// // //                     hasCopied
// // //                       ? "/images/tick.svg"
// // //                       : "/images/copy.svg"
// // //                   }
// // //                   alt="copy"
// // //                   draggable="false"
// // //                   className="select-none pointer-events-none"
// // //                 />
// // //                 <p className="lg:text-lg md:text-xl font-medium text-gray_gradient text-white">
// // //                   gopalgawas2004
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default About;
// // import { useState, useEffect, useRef } from "react";
// // import Globe from "react-globe.gl";
// // import CharacterModel from "../components/CharacterModel";

// // const About = () => {
// //   const [hasCopied, setHasCopied] = useState(false);
// //   const [isInteractingGlobe, setIsInteractingGlobe] = useState(false);
// //   const globeEl = useRef();

// //   const techStack = [
// //     "React.js",
// //     "Node.js",
// //     "MongoDB",
// //     "Express.js",
// //     "Next.js",
// //     "TypeScript",
// //     "AWS",
// //     "Docker",
// //     "PostgreSQL",
// //     "Firebase",
// //     "Git",
// //     "Tailwind CSS",
// //     "REST API",
// //     "JWT Auth",
// //     "Python",
// //     "C++",
// //   ];

// //   const experiences = [
// //     {
// //       role: "Backend Developer Intern",
// //       company: "Perfectrank.in",
// //       period: "May 2025 – Aug 2025",
// //       type: "Hybrid",
// //       description:
// //         "Built APIs and server-side logic for exam preparation platform.",
// //       link: "https://perfectrank.in/",
// //     },
// //     {
// //       role: "Website Development Intern",
// //       company: "AI4SEE PVT LTD",
// //       period: "Dec 2025 – Present",
// //       type: "Remote",
// //       description:
// //         "Full-stack development with React/Next.js and Node.js APIs.",
// //       link: "https://www.ai4sees.com/",
// //     },
// //   ];

// //   const achievements = [
// //     "MERN & AWS Stack Training – Tech Ustaad & SJCEM",
// //     "Network Fundamentals Certification – Infosys Springboard (Oct 2024)",
// //     "LeetCode – 100+ Problems Solved",
// //   ];

// //   useEffect(() => {
// //     if (globeEl.current) {
// //       const controls = globeEl.current.controls();
// //       controls.enableZoom = false;
// //       controls.autoRotate = true;
// //       controls.autoRotateSpeed = 0.5;
// //       controls.update();
// //     }
// //   }, []);

// //   const handleCopy = () => {
// //     navigator.clipboard.writeText("gopalgawas2004@gmail.com");
// //     setHasCopied(true);
// //     setTimeout(() => setHasCopied(false), 2000);
// //   };

// //   return (
// //     <section
// //       className="py-12 md:py-16 px-4 sm:px-6 max-w-7xl mx-auto"
// //       id="about"
// //     >
// //       {/* Compact Header */}
// //       <div className="text-center mb-10">
// //         <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
// //           About{" "}
// //           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
// //             Me
// //           </span>
// //         </h2>
// //         <p className="text-gray-400 max-w-2xl mx-auto">
// //           Full-Stack Developer specializing in scalable web applications
// //         </p>
// //       </div>

// //       {/* Main Grid - Single Row for Desktop, Stacked for Mobile */}
// //       <div className="grid lg:grid-cols-2 gap-6 mb-8">
// //         {/* Profile & Education - Left Side */}
// //         <div className="space-y-6">
// //           {/* Compact Profile Card */}
// //           <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
// //             <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
// //               {/* Character Model - Smaller */}
// //               <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden border-2 border-gray-800 bg-gradient-to-br from-blue-500/20 to-cyan-400/20">
// //                 <div className="w-full h-full flex items-center justify-center">
// //                   <CharacterModel />
// //                 </div>
// //               </div>

// //               {/* Profile Info */}
// //               <div className="flex-1 text-center sm:text-left">
// //                 <div className="mb-4">
// //                   <h3 className="text-2xl font-bold text-white mb-2">
// //                     Gopal Gawas
// //                   </h3>
// //                   <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full">
// //                     <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
// //                     <span className="text-blue-400 text-sm font-medium">
// //                       Full-Stack Developer
// //                     </span>
// //                   </div>
// //                 </div>

// //                 {/* Quick Contact */}
// //                 <div className="space-y-2 mb-4">
// //                   <div className="flex items-center gap-2 justify-center sm:justify-start">
// //                     <svg
// //                       className="w-4 h-4 text-blue-400"
// //                       fill="none"
// //                       stroke="currentColor"
// //                       viewBox="0 0 24 24"
// //                     >
// //                       <path
// //                         strokeLinecap="round"
// //                         strokeLinejoin="round"
// //                         strokeWidth={2}
// //                         d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
// //                       />
// //                     </svg>
// //                     <span className="text-gray-300 text-sm">
// //                       gopalgawas2004@gmail.com
// //                     </span>
// //                   </div>
// //                   <div className="flex items-center gap-2 justify-center sm:justify-start">
// //                     <svg
// //                       className="w-4 h-4 text-blue-400"
// //                       fill="none"
// //                       stroke="currentColor"
// //                       viewBox="0 0 24 24"
// //                     >
// //                       <path
// //                         strokeLinecap="round"
// //                         strokeLinejoin="round"
// //                         strokeWidth={2}
// //                         d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
// //                       />
// //                     </svg>
// //                     <span className="text-gray-300 text-sm">
// //                       Mumbai, Maharashtra
// //                     </span>
// //                   </div>
// //                 </div>

// //                 {/* Quick Actions */}
// //                 <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
// //                   <button
// //                     onClick={handleCopy}
// //                     className="px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 rounded-lg text-gray-300 text-sm transition-colors flex items-center gap-2"
// //                   >
// //                     {hasCopied ? (
// //                       <>
// //                         <svg
// //                           className="w-4 h-4 text-green-400"
// //                           fill="none"
// //                           stroke="currentColor"
// //                           viewBox="0 0 24 24"
// //                         >
// //                           <path
// //                             strokeLinecap="round"
// //                             strokeLinejoin="round"
// //                             strokeWidth={2}
// //                             d="M5 13l4 4L19 7"
// //                           />
// //                         </svg>
// //                         Copied!
// //                       </>
// //                     ) : (
// //                       <>
// //                         <svg
// //                           className="w-4 h-4"
// //                           fill="none"
// //                           stroke="currentColor"
// //                           viewBox="0 0 24 24"
// //                         >
// //                           <path
// //                             strokeLinecap="round"
// //                             strokeLinejoin="round"
// //                             strokeWidth={2}
// //                             d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
// //                           />
// //                         </svg>
// //                         Copy Email
// //                       </>
// //                     )}
// //                   </button>

// //                   <a
// //                     href="https://drive.google.com/file/d/1GZ62w6e7ID0wiSinqsxaJ1sNwlB3rlXX/view?usp=sharing"
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-lg text-sm transition-all flex items-center gap-2"
// //                   >
// //                     <svg
// //                       className="w-4 h-4"
// //                       fill="none"
// //                       stroke="currentColor"
// //                       viewBox="0 0 24 24"
// //                     >
// //                       <path
// //                         strokeLinecap="round"
// //                         strokeLinejoin="round"
// //                         strokeWidth={2}
// //                         d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
// //                       />
// //                     </svg>
// //                     View Resume
// //                   </a>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Education & Experience - Side by side on desktop, stacked on mobile */}
// //           <div className="grid md:grid-cols-2 gap-6">
// //             {/* Education */}
// //             <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
// //               <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
// //                 <svg
// //                   className="w-5 h-5 text-blue-400"
// //                   fill="none"
// //                   stroke="currentColor"
// //                   viewBox="0 0 24 24"
// //                 >
// //                   <path d="M12 14l9-5-9-5-9 5 9 5z" />
// //                   <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
// //                 </svg>
// //                 Education
// //               </h3>
// //               <div className="space-y-4">
// //                 <div>
// //                   <h4 className="font-semibold text-white">
// //                     B.Tech Computer Engineering
// //                   </h4>
// //                   <p className="text-gray-400 text-sm">
// //                     St. John College of Engineering
// //                   </p>
// //                   <div className="flex items-center gap-2 mt-1">
// //                     <span className="text-blue-400 text-sm">2022–2026</span>
// //                     <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs">
// //                       CGPA: 7.41
// //                     </span>
// //                   </div>
// //                 </div>

// //                 <div className="pt-4 border-t border-gray-800">
// //                   <h4 className="font-semibold text-white">HSC (12th)</h4>
// //                   <p className="text-gray-400 text-sm">VIVA COLLEGE</p>
// //                   <span className="text-emerald-400 text-sm">75%</span>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Experience */}
// //             <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
// //               <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
// //                 <svg
// //                   className="w-5 h-5 text-emerald-400"
// //                   fill="none"
// //                   stroke="currentColor"
// //                   viewBox="0 0 24 24"
// //                 >
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     strokeWidth={2}
// //                     d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
// //                   />
// //                 </svg>
// //                 Experience
// //               </h3>
// //               <div className="space-y-4">
// //                 {experiences.map((exp, index) => (
// //                   <div
// //                     key={index}
// //                     className="pb-4 last:pb-0 last:border-0 border-b border-gray-800"
// //                   >
// //                     <div className="flex justify-between items-start mb-1">
// //                       <h4 className="font-semibold text-white">{exp.role}</h4>
// //                       <span className="text-blue-400 text-sm">
// //                         {exp.period}
// //                       </span>
// //                     </div>
// //                     <p className="text-gray-300 text-sm mb-1">{exp.company}</p>
// //                     <p className="text-gray-400 text-xs mb-2">
// //                       {exp.description}
// //                     </p>
// //                     <a
// //                       href={exp.link}
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                       className="text-blue-400 hover:text-blue-300 text-xs flex items-center gap-1"
// //                     >
// //                       Visit Website
// //                       <svg
// //                         className="w-3 h-3"
// //                         fill="none"
// //                         stroke="currentColor"
// //                         viewBox="0 0 24 24"
// //                       >
// //                         <path
// //                           strokeLinecap="round"
// //                           strokeLinejoin="round"
// //                           strokeWidth={2}
// //                           d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
// //                         />
// //                       </svg>
// //                     </a>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Skills & Globe - Right Side */}
// //         <div className="space-y-6">
// //           {/* Compact Skills Card */}
// //           <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
// //             <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
// //               <svg
// //                 className="w-5 h-5 text-amber-400"
// //                 fill="none"
// //                 stroke="currentColor"
// //                 viewBox="0 0 24 24"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth={2}
// //                   d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
// //                 />
// //               </svg>
// //               Tech Stack
// //             </h3>
// //             <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
// //               {techStack.map((tech, index) => (
// //                 <div
// //                   key={index}
// //                   className="px-3 py-2 bg-gray-800/30 border border-gray-700 rounded-lg hover:border-blue-500/50 transition-colors group"
// //                 >
// //                   <span className="text-gray-300 text-sm group-hover:text-blue-300 transition-colors">
// //                     {tech}
// //                   </span>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Globe & Location */}
// //           <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
// //             <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
// //               <svg
// //                 className="w-5 h-5 text-purple-400"
// //                 fill="none"
// //                 stroke="currentColor"
// //                 viewBox="0 0 24 24"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth={2}
// //                   d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
// //                 />
// //               </svg>
// //               Location & Availability
// //             </h3>

// //             {/* Compact Globe */}
// //             <div className="relative h-[200px] rounded-lg overflow-hidden border border-gray-800 mb-4">
// //               <div
// //                 className="w-full h-full"
// //                 onPointerDown={() => setIsInteractingGlobe(true)}
// //                 onPointerUp={() => setIsInteractingGlobe(false)}
// //                 onPointerLeave={() => setIsInteractingGlobe(false)}
// //               >
// //                 <Globe
// //                   ref={globeEl}
// //                   height={200}
// //                   width={200}
// //                   backgroundColor="rgba(0, 0, 0, 0)"
// //                   backgroundImageOpacity={0.5}
// //                   showAtmosphere
// //                   showGraticules
// //                   globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
// //                   bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
// //                   labelsData={[
// //                     {
// //                       lat: 19.076,
// //                       lng: 72.8777,
// //                       text: "Mumbai",
// //                       color: "#3b82f6",
// //                       size: 15,
// //                     },
// //                   ]}
// //                 />
// //               </div>
// //             </div>

// //             <div className="grid grid-cols-2 gap-4">
// //               <div className="space-y-2">
// //                 <div className="flex items-center gap-2">
// //                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
// //                   <span className="text-gray-300 text-sm">Remote Work</span>
// //                 </div>
// //                 <div className="flex items-center gap-2">
// //                   <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
// //                   <span className="text-gray-300 text-sm">On-site</span>
// //                 </div>
// //               </div>

// //               <div className="text-center p-3 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 border border-blue-500/30 rounded-lg">
// //                 <p className="text-blue-400 font-medium">Mumbai, India</p>
// //                 <p className="text-gray-400 text-xs">GMT+5:30</p>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Achievements */}
// //           <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
// //             <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
// //               <svg
// //                 className="w-5 h-5 text-green-400"
// //                 fill="none"
// //                 stroke="currentColor"
// //                 viewBox="0 0 24 24"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth={2}
// //                   d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
// //                 />
// //               </svg>
// //               Achievements
// //             </h3>
// //             <div className="space-y-3">
// //               {achievements.map((achievement, index) => (
// //                 <div key={index} className="flex items-start gap-3">
// //                   <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-400/20 flex items-center justify-center">
// //                     <svg
// //                       className="w-3 h-3 text-green-400"
// //                       fill="currentColor"
// //                       viewBox="0 0 20 20"
// //                     >
// //                       <path
// //                         fillRule="evenodd"
// //                         d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
// //                         clipRule="evenodd"
// //                       />
// //                     </svg>
// //                   </div>
// //                   <p className="text-gray-300 text-sm">{achievement}</p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Social Links - Compact Footer */}
// //       {/* <div className="mt-8 pt-6 border-t border-gray-800">
// //         <div className="flex flex-wrap justify-center gap-4">
// //           <a
// //             href="https://linkedin.com/in/gopal-gawas-42la74275/"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="px-4 py-2 bg-gray-800/50 hover:bg-blue-500/10 border border-gray-700 hover:border-blue-500 rounded-lg text-gray-300 hover:text-blue-300 text-sm transition-all flex items-center gap-2"
// //           >
// //             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
// //               <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
// //             </svg>
// //             LinkedIn
// //           </a>

// //           <a
// //             href="https://github.com/Gopal562004"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600 rounded-lg text-gray-300 hover:text-white text-sm transition-all flex items-center gap-2"
// //           >
// //             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
// //               <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
// //             </svg>
// //             GitHub
// //           </a>

// //           <a
// //             href="https://leetcode.com/u/Gopal_Gawas/"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="px-4 py-2 bg-gray-800/50 hover:bg-amber-500/10 border border-gray-700 hover:border-amber-500 rounded-lg text-gray-300 hover:text-amber-300 text-sm transition-all flex items-center gap-2"
// //           >
// //             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
// //               <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
// //             </svg>
// //             LeetCode
// //           </a>

// //           <a
// //             href="https://portfolio-ten-flame-41.vercel.app/"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="px-4 py-2 bg-gray-800/50 hover:bg-purple-500/10 border border-gray-700 hover:border-purple-500 rounded-lg text-gray-300 hover:text-purple-300 text-sm transition-all flex items-center gap-2"
// //           >
// //             <svg
// //               className="w-4 h-4"
// //               fill="none"
// //               stroke="currentColor"
// //               viewBox="0 0 24 24"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth={2}
// //                 d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
// //               />
// //             </svg>
// //             Portfolio
// //           </a>
// //         </div>
// //       </div> */}
// //     </section>
// //   );
// // };

// // export default About;

// import { useState, useEffect, useRef } from "react";
// import Globe from "react-globe.gl";
// import CharacterModel from "../components/CharacterModel";

// const About = () => {
//   const [hasCopied, setHasCopied] = useState(false);
//   const [isInteractingGlobe, setIsInteractingGlobe] = useState(false);
//   const globeEl = useRef();

//   // Tech stack with icons
//   const techIcons = [
//     { icon: "⚛️", name: "React" },
//     { icon: "🟢", name: "Node.js" },
//     { icon: "🍃", name: "MongoDB" },
//     { icon: "📘", name: "TypeScript" },
//     { icon: "▲", name: "Next.js" },
//     { icon: "☁️", name: "AWS" },
//     { icon: "🐳", name: "Docker" },
//     { icon: "🐘", name: "PostgreSQL" },
//     { icon: "🔥", name: "Firebase" },
//     { icon: "🎨", name: "Tailwind" },
//     { icon: "🔗", name: "REST API" },
//     { icon: "🔐", name: "JWT" },
//   ];

//   const experiences = [
//     {
//       role: "Backend Developer Intern",
//       company: "Perfectrank.in",
//       period: "May 2025 – Aug 2025",
//       type: "Hybrid",
//       description:
//         "Built APIs and server-side logic for exam preparation platform.",
//       link: "https://perfectrank.in/",
//     },
//     {
//       role: "Website Development Intern",
//       company: "AI4SEE PVT LTD",
//       period: "Dec 2025 – Present",
//       type: "Remote",
//       description:
//         "Full-stack development with React/Next.js and Node.js APIs.",
//       link: "https://www.ai4sees.com/",
//     },
//   ];

//   const achievements = [
//     "MERN & AWS Stack Training – Tech Ustaad & SJCEM",
//     "Network Fundamentals Certification – Infosys Springboard (Oct 2024)",
//     "LeetCode – 100+ Problems Solved",
//   ];

//   useEffect(() => {
//     if (globeEl.current) {
//       const controls = globeEl.current.controls();
//       controls.enableZoom = false;
//       controls.autoRotate = true;
//       controls.autoRotateSpeed = 0.5;
//       controls.update();
//     }
//   }, []);

//   const handleCopy = () => {
//     navigator.clipboard.writeText("gopalgawas2004@gmail.com");
//     setHasCopied(true);
//     setTimeout(() => setHasCopied(false), 2000);
//   };

//   return (
//     <section
//       className="py-12 md:py-16 px-4 sm:px-6 max-w-7xl mx-auto"
//       id="about"
//     >
//       {/* Compact Header */}
//       <div className="text-center mb-10">
//         <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
//           About{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
//             Me
//           </span>
//         </h2>
//         <p className="text-gray-400 max-w-2xl mx-auto">
//           Full-Stack Developer specializing in scalable web applications
//         </p>
//       </div>

//       {/* Main Grid */}
//       <div className="grid lg:grid-cols-2 gap-6 mb-8">
//         {/* Left Column - Profile & Education */}
//         <div className="space-y-6">
//           {/* Profile Card */}
//           <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
//             <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
//               {/* Character Model */}
//               <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden border-2 border-gray-800 bg-gradient-to-br from-blue-500/20 to-cyan-400/20">
//                 <div className="w-full h-full flex items-center justify-center">
//                   <CharacterModel />
//                 </div>
//               </div>

//               {/* Profile Info */}
//               <div className="flex-1 text-center sm:text-left">
//                 <div className="mb-4">
//                   <h3 className="text-2xl font-bold text-white mb-2">
//                     Gopal Gawas
//                   </h3>
//                   <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-full">
//                     <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                     <span className="text-gray-300 text-sm font-medium">
//                       Full-Stack Developer
//                     </span>
//                   </div>
//                 </div>

//                 {/* Quick Contact */}
//                 <div className="space-y-2 mb-4">
//                   <div className="flex items-center gap-2 justify-center sm:justify-start">
//                     <svg
//                       className="w-4 h-4 text-gray-400"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                       />
//                     </svg>
//                     <span className="text-gray-300 text-sm">
//                       gopalgawas2004@gmail.com
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-2 justify-center sm:justify-start">
//                     <svg
//                       className="w-4 h-4 text-gray-400"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                       />
//                     </svg>
//                     <span className="text-gray-300 text-sm">
//                       Mumbai, Maharashtra
//                     </span>
//                   </div>
//                 </div>

//                 {/* Quick Actions */}
//                 <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
//                   <button
//                     onClick={handleCopy}
//                     className="px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg text-gray-300 text-sm transition-colors flex items-center gap-2"
//                   >
//                     {hasCopied ? (
//                       <>
//                         <svg
//                           className="w-4 h-4 text-green-400"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M5 13l4 4L19 7"
//                           />
//                         </svg>
//                         Copied!
//                       </>
//                     ) : (
//                       <>
//                         <svg
//                           className="w-4 h-4"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
//                           />
//                         </svg>
//                         Copy Email
//                       </>
//                     )}
//                   </button>

//                   <a
//                     href="https://drive.google.com/file/d/1GZ62w6e7ID0wiSinqsxaJ1sNwlB3rlXX/view?usp=sharing"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg text-gray-300 text-sm transition-all flex items-center gap-2"
//                   >
//                     <svg
//                       className="w-4 h-4"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//                       />
//                     </svg>
//                     View Resume
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Education & Experience */}
//           <div className="grid md:grid-cols-2 gap-6">
//             {/* Education */}
//             <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
//               <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
//                 <svg
//                   className="w-5 h-5 text-gray-400"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 14l9-5-9-5-9 5 9 5z" />
//                   <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
//                 </svg>
//                 Education
//               </h3>
//               <div className="space-y-4">
//                 <div>
//                   <h4 className="font-semibold text-white">
//                     B.Tech Computer Engineering
//                   </h4>
//                   <p className="text-gray-400 text-sm">
//                     St. John College of Engineering
//                   </p>
//                   <div className="flex items-center gap-2 mt-1">
//                     <span className="text-blue-400 text-sm">2022–2026</span>
//                     <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs">
//                       CGPA: 7.41
//                     </span>
//                   </div>
//                 </div>

//                 <div className="pt-4 border-t border-gray-800">
//                   <h4 className="font-semibold text-white">HSC (12th)</h4>
//                   <p className="text-gray-400 text-sm">VIVA COLLEGE</p>
//                   <span className="text-emerald-400 text-sm">75%</span>
//                 </div>
//               </div>
//             </div>

//             {/* Experience */}
//             <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
//               <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
//                 <svg
//                   className="w-5 h-5 text-gray-400"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                   />
//                 </svg>
//                 Experience
//               </h3>
//               <div className="space-y-4">
//                 {experiences.map((exp, index) => (
//                   <div
//                     key={index}
//                     className="pb-4 last:pb-0 last:border-0 border-b border-gray-800"
//                   >
//                     <div className="flex justify-between items-start mb-1">
//                       <h4 className="font-semibold text-white">{exp.role}</h4>
//                       <span className="text-blue-400 text-sm">
//                         {exp.period}
//                       </span>
//                     </div>
//                     <p className="text-gray-300 text-sm mb-1">{exp.company}</p>
//                     <p className="text-gray-400 text-xs mb-2">
//                       {exp.description}
//                     </p>
//                     <a
//                       href={exp.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-400 hover:text-blue-300 text-xs flex items-center gap-1"
//                     >
//                       Visit Website
//                       <svg
//                         className="w-3 h-3"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
//                         />
//                       </svg>
//                     </a>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Column - Skills & Globe */}
//         <div className="space-y-6">
//           {/* Tech Stack Icons - Floating Container */}
//           <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
//             <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
//               <svg
//                 className="w-5 h-5 text-gray-400"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
//                 />
//               </svg>
//               Tech Stack
//             </h3>

//             <div className="grid grid-cols-4 sm:grid-cols-6 gap-4">
//               {techIcons.map((tech, index) => (
//                 <div
//                   key={index}
//                   className="relative group"
//                   style={{
//                     animationDelay: `${index * 0.1}s`,
//                     animation: `float ${3 + index * 0.1}s ease-in-out infinite`,
//                   }}
//                 >
//                   <div className="flex flex-col items-center">
//                     <div className="w-12 h-12 flex items-center justify-center bg-gray-800/50 border border-gray-700 rounded-xl group-hover:border-gray-600 transition-all duration-300 group-hover:scale-110">
//                       <span className="text-2xl">{tech.icon}</span>
//                     </div>
//                     <span className="text-gray-400 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       {tech.name}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Globe & Location */}
//           <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
//             <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
//               <svg
//                 className="w-5 h-5 text-gray-400"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                 />
//               </svg>
//               Location & Availability
//             </h3>

//             {/* Compact Globe */}
//             <div className="relative h-[200px] rounded-lg overflow-hidden border border-gray-800 mb-4">
//               <div
//                 className="w-full h-full"
//                 onPointerDown={() => setIsInteractingGlobe(true)}
//                 onPointerUp={() => setIsInteractingGlobe(false)}
//                 onPointerLeave={() => setIsInteractingGlobe(false)}
//               >
//                 <Globe
//                   ref={globeEl}
//                   height={200}
//                   width={200}
//                   backgroundColor="rgba(0, 0, 0, 0)"
//                   backgroundImageOpacity={0.5}
//                   showAtmosphere
//                   showGraticules
//                   globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
//                   bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
//                   labelsData={[
//                     {
//                       lat: 19.076,
//                       lng: 72.8777,
//                       text: "Mumbai",
//                       color: "#3b82f6",
//                       size: 15,
//                     },
//                   ]}
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <div className="flex items-center gap-2">
//                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                   <span className="text-gray-300 text-sm">Remote Work</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
//                   <span className="text-gray-300 text-sm">On-site</span>
//                 </div>
//               </div>

//               <div className="text-center p-3 bg-gray-800/50 border border-gray-700 rounded-lg">
//                 <p className="text-gray-300 font-medium">Mumbai, India</p>
//                 <p className="text-gray-500 text-xs">GMT+5:30</p>
//               </div>
//             </div>
//           </div>

//           {/* Achievements */}
//           <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
//             <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
//               <svg
//                 className="w-5 h-5 text-gray-400"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                 />
//               </svg>
//               Achievements
//             </h3>
//             <div className="space-y-3">
//               {achievements.map((achievement, index) => (
//                 <div key={index} className="flex items-start gap-3">
//                   <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center">
//                     <svg
//                       className="w-3 h-3 text-green-400"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </div>
//                   <p className="text-gray-300 text-sm">{achievement}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
import { useState, useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import CharacterModel from "../components/CharacterModel";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const [isInteractingGlobe, setIsInteractingGlobe] = useState(false);
  const [globeSize, setGlobeSize] = useState(250);
  const globeEl = useRef();

  // Tech stack with icons
  const techIcons = [
    { icon: "⚛️", name: "React" },
    { icon: "🟢", name: "Node.js" },
    { icon: "🍃", name: "MongoDB" },
    { icon: "📘", name: "TypeScript" },
    { icon: "▲", name: "Next.js" },
    { icon: "☁️", name: "AWS" },
    { icon: "🐳", name: "Docker" },
    { icon: "🐘", name: "PostgreSQL" },
    { icon: "🔥", name: "Firebase" },
    { icon: "🎨", name: "Tailwind" },
    { icon: "🔗", name: "REST API" },
    { icon: "🔐", name: "JWT" },
  ];

  const experiences = [
    {
      role: "Backend Developer Intern",
      company: "Perfectrank.in",
      period: "May 2025 – Aug 2025",
      type: "Hybrid",
      description:
        "Built APIs and server-side logic for exam preparation platform.",
      link: "https://perfectrank.in/",
    },
    {
      role: "Website Development Intern",
      company: "AI4SEE PVT LTD",
      period: "Dec 2025",
      type: "Remote",
      description:
        "Full-stack development with React/Next.js and Node.js APIs.",
      link: "https://www.ai4sees.com/",
    },
  ];

  const achievements = [
    "MERN & AWS Stack Training – Tech Ustaad & SJCEM",
    "Network Fundamentals Certification – Infosys Springboard (Oct 2024)",
    "LeetCode – 100+ Problems Solved",
  ];

  useEffect(() => {
    if (globeEl.current) {
      const controls = globeEl.current.controls();
      controls.enableZoom = false;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5;
      controls.update();
    }

    // Adjust globe size based on container
    const updateGlobeSize = () => {
      if (window.innerWidth >= 1024) {
        setGlobeSize(280); // Larger for desktop
      } else {
        setGlobeSize(250); // Smaller for mobile
      }
    };

    updateGlobeSize();
    window.addEventListener("resize", updateGlobeSize);

    return () => {
      window.removeEventListener("resize", updateGlobeSize);
    };
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("gopalgawas2004@gmail.com");
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <section
      className="py-12 md:py-16 px-4 sm:px-6 max-w-7xl mx-auto"
      id="about"
    >
      {/* Compact Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Me
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Full-Stack Developer specializing in scalable web applications
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Left Column - Profile & Education */}
        <div className="space-y-6">
          {/* Profile Card */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              {/* Character Model */}
              <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden border-2 border-gray-800 bg-gradient-to-br from-blue-500/20 to-cyan-400/20">
                <div className="w-full h-full flex items-center justify-center">
                  <CharacterModel />
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center sm:text-left">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Gopal Gawas
                  </h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-300 text-sm font-medium">
                      Full-Stack Developer
                    </span>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-gray-300 text-sm">
                      gopalgawas2004@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                    </svg>
                    <span className="text-gray-300 text-sm">
                      Mumbai, Maharashtra
                    </span>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                  <button
                    onClick={handleCopy}
                    className="px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg text-gray-300 text-sm transition-colors flex items-center gap-2"
                  >
                    {hasCopied ? (
                      <>
                        <svg
                          className="w-4 h-4 text-green-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Copied!
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                        Copy Email
                      </>
                    )}
                  </button>

                  <a
                    href="https://drive.google.com/file/d/1GZ62w6e7ID0wiSinqsxaJ1sNwlB3rlXX/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg text-gray-300 text-sm transition-all flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    View Resume
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Education */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white">
                    B.Tech Computer Engineering
                  </h4>
                  <p className="text-gray-400 text-sm">
                    St. John College of Engineering and Management
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-blue-400 text-sm">2022–2026</span>
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs">
                      CGPA: 7.5
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-800">
                  <h4 className="font-semibold text-white">HSC (12th)</h4>
                  <p className="text-gray-400 text-sm">VIVA COLLEGE</p>
                  <span className="text-emerald-400 text-sm">75%</span>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Experience
              </h3>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="pb-4 last:pb-0 last:border-0 border-b border-gray-800"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-semibold text-white">{exp.role}</h4>
                      <span className="text-blue-400 text-sm">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mb-1">{exp.company}</p>
                    <p className="text-gray-400 text-xs mb-2">
                      {exp.description}
                    </p>
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-xs flex items-center gap-1"
                    >
                      Visit Website
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Skills, Globe & Achievements */}
        <div className="space-y-6">
          {/* Tech Stack Icons */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              Tech Stack
            </h3>

            <div className="grid grid-cols-4 sm:grid-cols-6 gap-4">
              {techIcons.map((tech, index) => (
                <div
                  key={index}
                  className="relative group"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: `float ${3 + index * 0.1}s ease-in-out infinite`,
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-800/50 border border-gray-700 rounded-xl group-hover:border-gray-600 transition-all duration-300 group-hover:scale-110">
                      <span className="text-2xl">{tech.icon}</span>
                    </div>
                    <span className="text-gray-400 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Combined Square Container for Globe & Achievements */}
          <div className="grid grid-cols-1 gap-6">
            {/* Globe, Location & Achievements - Square Container */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Left Side - Globe */}
                <div className="lg:w-1/2">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Location & Availability
                  </h3>

                  {/* Square Globe Container - Centered */}
                  <div className="relative w-full aspect-square rounded-lg overflow-hidden border border-gray-800 mb-4 flex items-center justify-center">
                    <div
                      className="w-full h-full flex items-center justify-center"
                      onPointerDown={() => setIsInteractingGlobe(true)}
                      onPointerUp={() => setIsInteractingGlobe(false)}
                      onPointerLeave={() => setIsInteractingGlobe(false)}
                    >
                      <div
                        className="relative"
                        style={{ width: globeSize, height: globeSize }}
                      >
                        <Globe
                          ref={globeEl}
                          height={globeSize}
                          width={globeSize}
                          backgroundColor="rgba(0, 0, 0, 0)"
                          backgroundImageOpacity={0.5}
                          showAtmosphere
                          showGraticules
                          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                          labelsData={[
                            {
                              lat: 19.076,
                              lng: 72.8777,
                              text: "Mumbai",
                              color: "#3b82f6",
                              size: 15,
                            },
                          ]}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Location Info */}
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-gray-300 text-sm">
                            Remote Work
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                          <span className="text-gray-300 text-sm">On-site</span>
                        </div>
                      </div>

                      <div className="text-center p-3 bg-gray-800/50 border border-gray-700 rounded-lg">
                        <p className="text-gray-300 font-medium">
                          Mumbai, India
                        </p>
                        <p className="text-gray-500 text-xs">GMT+5:30</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Achievements */}
                <div className="lg:w-1/2">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Achievements
                  </h3>

                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-300 text-sm flex-1">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Additional Info */}
                  <div className="mt-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-800 rounded-lg">
                        <svg
                          className="w-5 h-5 text-blue-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618 4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-300 text-sm font-medium">
                          Always Learning
                        </p>
                        <p className="text-gray-500 text-xs">
                          Continuously updating skills with latest technologies
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
