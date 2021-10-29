type logoNames =
    | "react"
    | "bootstrap"
    | "expressjs"
    | "git"
    | "github"
    | "materialui"
    | "mongodb"
    | "nextjs"
    | "typescript"
    | "ejs"
    | "nodejs"
    | "javascript"
    | "redux"
    | "sass"
    | "framerMotion"
    | "C"
    | "tailwindCSS"
    | "ubuntu"
    | "PHP"
    | "AWSEC2"
    | "postman"
    | "mariaDB"
    | "codeIgniter"

type Logos = {
    [K in logoNames]: {
    label: string;
    logo: string;
    spin?: boolean;
    invert?: boolean;
    };
};

const logos: Logos = {
    C: {
        label: "c",
        logo: "/assets/icons/c.svg",
    },
    javascript: {
        label: "JavaScript",
        logo: "/assets/icons/javascript.svg",
    },
    typescript: {
        label: "TypeScript",
        logo: "/assets/icons/typescript.svg",
    },
    PHP: {
        label: "PHP",
        logo: "/assets/icons/php.svg",
    },
    codeIgniter: {
        label: "CodeIgniter",
        logo: "/assets/icons/codeigniter.svg",
    },
    react: {
    label: "React",
    logo: "/assets/icons/react.png",
    spin: true,
    },
    redux: {
        label: "Redux",
        logo: "/assets/icons/redux.svg",
    },
    nextjs: {
        label: "Next.js",
        logo: "/assets/icons/nextjs.svg",
        invert: true,
    },
    nodejs: {
        label: "Node.js",
        logo: "/assets/icons/nodejs.svg",
    },
    expressjs: {
        label: "Express.js",
        logo: "/assets/icons/expressjs.png",
    },
    ubuntu: {
        label: "Ubuntu",
        logo: "/assets/icons/ubuntu.svg",
    },
    AWSEC2: {
        label: "AWS EC2",
        logo: "/assets/icons/aws-ec2.svg",
    },
    sass: {
        label: "Sass",
        logo: "/assets/icons/sass.svg",
    },
    bootstrap: {
    label: "Bootstrap",
    logo: "/assets/icons/bootstrap.svg",
    },
    tailwindCSS: {
    label: "TailwindCSS",
    logo: "/assets/icons/tailwindCSS.svg",
    },
    mongodb: {
        label: "MongoDB",
        logo: "/assets/icons/mongodb.svg",
    },
    mariaDB: {
        label: "MariaDB",
        logo: "/assets/icons/mariaDB.svg",
    },
    postman: {
        label: "Postman",
        logo: "/assets/icons/postman.svg",
    },
    git: {
    label: "Git",
    logo: "/assets/icons/git.svg",
    },
    github: {
    label: "GitHub",
    logo: "/assets/icons/github.svg",
    invert: true,
    },
    materialui: {
    label: "Material-UI",
    logo: "/assets/icons/materialui.svg",
    },
    ejs: {
    label: "EJS",
    logo: "/assets/icons/ejs.svg",
    invert: true,
    },
    framerMotion: {
    label: "Framer Motion",
    logo: "/assets/icons/framer.png",
    },
};

export default logos;
