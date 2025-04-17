export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];
export const myProjects = [
  {
    title: "CollegeQuest - College and Scholarship Finder",
    desc: "CollegeQuest is a web application designed to help students find colleges and scholarships easily. It provides an intuitive interface for searching and discovering educational opportunities.",
    subdesc:
      "Built with React and Firebase, CollegeQuest offers a smooth user experience, allowing students to quickly search for colleges and scholarship opportunities based on their preferences.",
    href: "https://college-quest-new.vercel.app/",
    texture: "/images/videos/collegequest.mp4",
    logo: "/images/logo/collegequest.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/images/spotlight/collegequest.png",
    tags: [
      { id: 1, name: "React.js", path: "/images/logo/react.png" },
      { id: 2, name: "JavaScript", path: "/images/logo/js.png" },
      {
        id: 3,
        name: "FireBase",
        path: "/images/logo/firebase.png",
      },
    ],
  },
  {
    title: "CodeVerse - Social Media Platform for Coders",
    desc: "CodeVerse is a social media platform built exclusively for coders, developers, and tech enthusiasts to showcase their projects, share knowledge, and collaborate.",
    subdesc:
      "Built using the MERN stack, CodeVerse provides a platform where developers can create, like, comment, and share code and projects, with user authentication and responsive design.",
    href: "https://code-verse-phi.vercel.app/",
    texture: "/images/videos/codeverse_video (online-video-cutter.com).mp4",
    logo: "/images/logo/codeverse.png",
    logoStyle: {
      backgroundColor: "#141b34",
      border: "0.2px solid #444",
      boxShadow: "0px 0px 20px 0px rgba(255, 255, 255, 0.2)",
    },
    spotlight: "/images/spotlight/codeverse.png",
    tags: [
      { id: 1, name: "React.js", path: "/images/logo/react.png" },
      { id: 2, name: "Node.js", path: "/images/logo/node.png" },
      { id: 3, name: "MongoDB", path: "/images/logo/mongodb.png" },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/images/logo/tailwindcss.png",
      },
    ],
  },
  {
    title: "Zudio - eCommerce Clothing Website",
    desc: "Zudio is an eCommerce platform for clothing built with the MERN stack, featuring a modern, responsive UI for browsing, purchasing, and managing clothing items.",
    subdesc:
      "Using MongoDB, Express, React, Node.js, and Tailwind CSS, Zudio offers a seamless shopping experience with real-time updates and secure transactions.",
    href: "https://zudio-seven.vercel.app/",
    texture: "/images/videos/zudio.mp4",
    logo: "/images/logo/zudio.png",
    logoStyle: {
      backgroundColor: "#000000",
      border: "0.2px solid #D1D1D1",
      boxShadow: "0px 0px 60px 0px #D6A8644D",
    },
    spotlight: "/images/spotlight/zudio.png",
    tags: [
      { id: 1, name: "React.js", path: "/images/logo/react.png" },
      {
        id: 2,
        name: "Node.js",
        path: "/images/logo/node.png",
      },
      { id: 3, name: "MongoDB", path: "/images/logo/mongodb.png" },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/images/logo/tailwindcss.png",
      },
    ],
  },
];


export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Framer",
    pos: "Lead Web Developer",
    duration: "2022 - Present",
    title:
      "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: "/assets/framer.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Figma",
    pos: "Web Developer",
    duration: "2020 - 2022",
    title:
      "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: "/assets/figma.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Notion",
    pos: "Junior Web Developer",
    duration: "2019 - 2020",
    title:
      "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: "/assets/notion.svg",
    animation: "salute",
  },
];
