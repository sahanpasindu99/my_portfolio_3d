export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an AI-powered fintech solution at Soukpay",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "DEEPSKIN AI", //EARLY SKIN CANCER DETECTION
    des: "DEEPSKIN  is an early skin cancer detection platform that leverages advanced AI algorithms to provide accurate and timely diagnoses.",
    img: "/deepskin.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/redux.svg"],
    link: "https://github.com/sahanpasindu99",
  },
  {
    id: 2,
    title: "TurtlesEgg - Mobile App",
    des: "TurtlesEgg is a Ecommerce platform that provides a seamless shopping experience for users.",
    img: "/TURTLESEGG-MOCK.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/redux.svg"],
    link: "https://github.com/sahanpasindu99",
  },
  {
    id: 3,
    title: "Fashion E-commerce",
    des: "Our platform is powered by cutting-edge technologies such as React, Tailwind CSS, and TypeScript.",
    img: "/fashion.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/redux.svg"],
    link: "https://github.com/sahanpasindu99",
  },
  {
    id: 4,
    title: "Realtime Chat App",
    des: "This chat application delivers a seamless messaging experience by leveraging optimistic updates. As users send,edit and delete messages.",
    img: "/chat-app.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/supabase.svg",
      "/postgre.svg",
    ],
    link: "https://github.com/sahanpasindu99",
  },
  // {
  //   id: 4,
  //   title: "Legends Tour",
  //   des: "Legends Tour is sports portfolio website that showcases match stats,tickets and schedules.",
  //   img: "/legend.png",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
  //   link: "https://github.com/sahanpasindu99",
  // },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Sahan was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Sahan's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your product and brand, Sahan is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Sahan delivered our fintech integration ahead of schedule with zero production issues. His grasp of payment systems and AI-driven workflows is exceptional — he thinks in systems, not just features.",
    name: "Sarah Thompson",
    title: "CTO, FinBridge Solutions",
  },
  {
    quote:
      "Working with Sahan on our e-commerce platform was a game-changer. He built a low-latency Redis-based search engine that handles millions of products with millisecond response times. Truly impressive engineering.",
    name: "James Carter",
    title: "Head of Engineering, TurtlesEgg Inc.",
  },
  {
    quote:
      "Sahan's ability to bridge complex backend infrastructure with seamless frontend experiences is rare. He transformed our B2B platform from concept to deployment with a 30% improvement in data access performance.",
    name: "Emily Richards",
    title: "Product Lead, Donext Pvt Ltd",
  },
  {
    quote:
      "Sahan is one of those engineers who brings both technical depth and clear communication to every project. His Agentic AI dashboards automated our product categorisation workflows and boosted team efficiency by 20%.",
    name: "David Nguyen",
    title: "VP of Technology, MarketPlace Group",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 5,
    title: "Software Engineer / Consultant",
    company: "Soukpay",
    desc: "Engineering high-throughput fintech transaction infrastructure and real-time reward systems. Architecting Agentic AI frameworks for autonomous payment workflows and integrating Generative AI for dynamic, personalized customer experiences in a reward-based payment platform.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 3,
    title: "Associate Software Engineer",
    company: "TurtlesEgg Inc.",
    desc: "Built a socially responsible multivendor e-commerce mobile and web platform. Developed Agentic AI dashboards for automated product categorisation (+20% efficiency) and low-latency Redis Cache search across millions of products.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 1,
    title: "Software Engineer Intern",
    company: "Donext Pvt Ltd",
    desc: "Built 'MyUnivrs', a B2B platform for UK university students and businesses using React, Next.js, NestJS, and AWS. Optimised backend architectures improving data access performance by 30%.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },

  {
    id: 2,
    title: "AI/ML Engineer Intern",
    company: "Contract — Remote",
    desc: "Developed and maintained AI solutions including large language model integrations and large-scale dataset processing pipelines.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },

  // {
  //   id: 2,
  //   title: "Mobile App Dev - JSM Tech",
  //   desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp2.svg",
  // },
  // {
  //   id: 3,
  //   title: "Freelance App Dev Project",
  //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp3.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    label: "GitHub",
    link: "https://www.github.com/sahanpasindu99",
  },
  {
    id: 3,
    img: "/link.svg",
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/sahan-naw",
  },
];
