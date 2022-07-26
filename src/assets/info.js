import {
    FaGithub,
    FaLinkedin,
    FaFileAlt,
    FaEnvelope,
} from "react-icons/fa";

const resumeURL = "https://docs.google.com/document/d/e/2PACX-1vQxzj2KAB0fwBsEtC8l7s3vjgDCNfWN_fu3YJzx96JJhAvTJar-Bxvw5HM0p6iohQ/pub";
const sourceCode = "https://github.com/JtheFox/react-portfolio";

const links = [
    {
        "name": "Github",
        "desc": "My Github",
        "url": "https://github.com/JtheFox/",
        "icon": FaGithub
    },
    {
        "name": "LinkedIn",
        "desc": "My LinkedIn",
        "url": "https://www.linkedin.com/in/jason-fox-878262197/",
        "icon": FaLinkedin
    },
    {
        "name": "Resume",
        "desc": "My Resume",
        "url": resumeURL,
        "icon": FaFileAlt
    }
]

// Link template
// {
//     "name": "",
//     "desc": "",
//     "url": "",
//     "active": true,
//     "fa_icon": ""
// }

const contactInfo = [
    {
        type: "Email",
        icon: FaEnvelope,
        ref: "jfox0096@gmail.com"
    },
    {
        type: "Github",
        icon: FaGithub,
        ref: "/jthefox"
    },
    {
        type: "LinkedIn",
        icon: FaLinkedin,
        ref: "/jthefox"
    }
]

const projects = [
    {
        "date": "April 2022",
        "title": "Chopping Block",
        "image": "https://i.imgur.com/boSEAIT.png",
        "live": undefined,
        "repo": "https://github.com/FidelHen/Chopping-Block",
        "tags": ["React Native", "Firebase", "Ant Design"],
        "desc": "This was my capstone group project in college. I came up with the idea for the project as a unique take on discovering local restaurants using the Yelp API, allowing recommendations to be influenced by preferences set by the user. My primary role in this project was scrum master, and I took care of the project management tasks during each sprint. I also aided in development of the app."
    },
    {
        "date": "June 2022",
        "title": "Somewhere.",
        "image": "https://i.imgur.com/AnQy3h7.png",
        "live": "https://jthefox.github.io/somewhere-project/",
        "repo": "https://github.com/JtheFox/somewhere-project",
        "tags": ["HTML", "CSS", "jQuery"],
        "desc": "This was a group project based on an idea I had where users could discover and see facts about countries, particularly smaller and more obscure places that can be more easily found by using a max population filter. I designed the majority of the ui myself, including the state change logic for homepage and results displays, most importantly the styling and animations of the components on the home page."
    },
    {
        "date": "July 2022",
        "title": "Blastoff",
        "image": "https://raw.githubusercontent.com/JtheFox/blastoff/main/public/images/launch.png",
        "live": "https://blastoff2.herokuapp.com/",
        "repo": "https://github.com/JtheFox/blastoff",
        "tags": ["Express", "Handlebars", "Sequelize"],
        "desc": "This was a group project designed to utilize the SpaceX API and was my first project involving backend development and persistent user data. I designed almost the entire UI from scratch with raw CSS, and used Bulma as a framework for the login and launch page layouts. I also did a heavy amount of work implementing the routes and database interactions using Express and Sequelize."
    },
    {
        "date": "August 2022",
        "title": "Rosiebot",
        "image": "https://i.imgur.com/aINJ4Ek.png",
        "live": "https://rosiebot.jthefox.com",
        "repo": "https://github.com/JtheFox/rosiebot",
        "tags": ["Nodejs", "Discordjs", "Sequelize"],
        "desc": "This is a Discord bot I initially created to use in a few private servers, but I am building it out and plan to make a public release once I add enough scalability and functionality. The bot is hosted on Heroku and uses an AWS RDS MySQL database to store persistent data. The bot also makes use of Discord's application commands."
    },
    {
        "date": "August 2022",
        "title": "Twitter-Discord Feed",
        "image": "https://i.imgur.com/M4qky3A.png",
        "live": undefined,
        "repo": "https://github.com/JtheFox/twitter-discord-feed",
        "tags": ["Lambda", "Twitter API", "Webhook"],
        "desc": "This is an AWS Lambda function I created to solve the simple problem my friends and I had of constantly checking a Twitter page for tweets about new game changes. I set an AWS EventBridge rule trigger the function on a schedule, and the function checks for and runs a content filter on new tweets. Any new tweets that pass the filter are sent via webhook to a Discord channel. The most recent tweet id is stored as a baseline for the query on the next invocation to avoid duplicate posts."
    },
    {
        "date": "August 2022",
        "title": "Store-A-String API",
        "image": "https://i.imgur.com/b1TWoV0.png",
        "live": undefined,
        "repo": "https://github.com/JtheFox/store-a-string",
        "tags": ["REST API", "Serverless", "DynamoDB"],
        "desc": "This is an AWS-hosted serverless API utilizing Lambda functions for the API endpoints. I created it to solve a problem I encountered where I needed to remotely perform CRUD operations on a single piece of plain text. I did not find any suitable existing solutions so I created my own. The API uses DynamoDB for storage and uses EventBridge for automatic maintenance to prune all entries that have not been retrieved in 30 days."
    },
]

// Project template
// {
//     "date": "",
//     "title": "",
//     "image": "",
//     "live": "",
//     "repo": "",
//     "tags": [""],
//     "desc": ""
// },

const about = {
    statement: "I am a full-stack developer and recent CS graduate, eager to dive into the world of web development. I have experience in Agile processes and project management. I am primarily familiarized with the MERN stack, but I am a fast learner and interested in picking any framework, ORM/ODM, API, or other development tool needed to complete a task or project.",
    tools: [
        "VSCode",
        "Github",
        "AWS",
        "Google Workspace",
        "Adobe Creative Suite",
        "Figma",
        "Canva",
        "Slack",
        "Draw.io"
    ],
    languages: [
        "HTML5",
        "CSS",
        "JavaScript",
        "Node.JS",
        "Express.js",
        "React",
        "Next.js",
        "MySQL",
        "NoSQL",
    ],
    skills: [
        "User-First Thinking",
        "Agile Process",
        "Wireframe/Prototyping",
        "Problem Solving",
        "Debugging",
        "Project Management",
        "Strong Communication",
        "Flexible & Fast Learner",
        "Video & Image Editing"
    ]
}

export { links, projects, about, sourceCode, contactInfo, resumeURL };