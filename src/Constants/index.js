
const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
];

const words=[
    {text:'Ideas',imgPath:'/images/ideas.svg'},
    {text:'Code',imgPath:'/images/code.svg'},
    {text:'Vision',imgPath:'/images/vision.svg'},
    {text:'Concepts',imgPath:'/images/concepts.svg'},
    {text:'Designs',imgPath:'/images/designs.svg'},
]

const counterItems = [
    { value: 15, suffix: "+", label: "Completed Projects" },
    { value: 200, suffix: "+", label: "Full-Stack Projects" },
    { value: 108, suffix: "+", label: "Front-End Projects" },

];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Full-Stack Development",
        desc: "Ability to build end-to-end applications, from UI/UX to backend, including personal projects like a Fitness Tracker and a Tinder clone.",
    },
    {
        imgPath: "/images/chat.png",
        title: "UI/UX Design Thinking",
        desc: "Skilled at designing clean, user-friendly, and engaging interfaces with a focus on usability and aesthetics.",
    },
    {
        imgPath: "/images/time.png",
        title: "Problem-Solving & Adaptability",
        desc: "Strong at quickly learning new technologies (like Java, DSA, React) and applying them to practical, real-world projects",
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python Developer",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review: "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
        imgPath: "/images/jis.png",
        logoPath: "/images/icon2.png",
        title: "Pursuing Bachelor’s in Computer Science Technology",
        date: "September 2022 - Present",
        highlights: [
            "Exploring software engineering, networking, and web technologies through coursework and projects.",
            "Developing and showcasing academic projects focusing on front-end and back-end integration.",
            "Collaborating with peers to design and test user-friendly applications.",
        ],
    },
    {
        review: "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
        imgPath: "/images/fullStack.png",
        logoPath: "/images/icon3.png",
        title: "Growing as a Full-Stack Developer with a passion for front-end design",
        date: "January 2025 - Present",
        highlights: [
            "Built personal projects like a Fitness Tracker, Food App, and Movie Trailer App.",
            "Practicing API integration and backend connectivity in MERN and Kotlin projects.",
            "Refining my front-end skills with React and GSAP animations for portfolio-ready apps.",
        ],
    },
    {
        review: "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
        imgPath: "/images/UiUx.jpeg",
        logoPath: "/images/icon1.png",
        title: "Learning UX/UI Design",
        date: "March 2024 - Present",
        highlights: [
            "Studied design principles to create intuitive and user-friendly interfaces.",
            "Redesigning personal projects with a focus on better layouts and accessibility.",
            "Experimenting with wireframing tools and user flow design for improved experiences.",
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const testimonials = [
    {
        name: "Esther Howard",
        mentions: "@estherhoward",
        review:
            "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
        imgPath: "/images/client1.png",
    },
    {
        name: "Wade Warren",
        mentions: "@wadewarren",
        review:
            "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
        imgPath: "/images/client3.png",
    },
    {
        name: "Guy Hawkins",
        mentions: "@guyhawkins",
        review:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        imgPath: "/images/client2.png",
    },
    {
        name: "Marvin McKinney",
        mentions: "@marvinmckinney",
        review:
            "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
        imgPath: "/images/client5.png",
    },
    {
        name: "Floyd Miles",
        mentions: "@floydmiles",
        review:
            "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
        imgPath: "/images/client4.png",
    },
    {
        name: "Albert Flores",
        mentions: "@albertflores",
        review:
            "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
        imgPath: "/images/client6.png",
    },
];

const socialImgs = [
    {
        name: "insta",
        imgPath: "/images/insta.png",
    },
    {
        name: "fb",
        imgPath: "/images/fb.png",
    },
    {
        name: "x",
        imgPath: "/images/x.png",
    },
    {
        name: "linkedin",
        imgPath: "/images/linkedin.png",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};