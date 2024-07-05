/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Gankur",
  title: "Hi all, I'm Ankur",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1vYn0WnLe4NVYhCxFEW4GWyHca3m6OsTH/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Ankur9669",
  linkedin: "https://in.linkedin.com/in/ankur-gupta-0805a11a7",
  gmail: "gankur860@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "yarn",
      fontAwesomeClassname: "fa-brands fa-yarn"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },

    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Shri Ram Institue Of Science and Technology",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor's of technology in Computer Science",
      duration: "June 2018 - June 2022",
      desc: "CGPA: 8.68"
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Nachiketa Higher Seconday School",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Maths / Science (PCM)",
      duration: "June 2016 - April 2018",
      desc: "Percentage: 76.6%"
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "UI Engineer",
      company: "Flipkart",
      companylogo:
        "https://media.licdn.com/dms/image/C560BAQF6H8gAs-JyFg/company-logo_200_200/0/1630669478258/flipkart_logo?e=1727913600&v=beta&t=8R2uCVjgCCpM6xWYln9VIx0MAxz4ojw6kCY1yD43F6E",
      date: "Aug 2022 – Present",
      desc: "I am currently employed at Flipkart as a UI Engineer in the CVP team. My role involves designing and building user interfaces for various projects, contributing to the development and enhancement of customer-facing platforms."
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Team Captain",
      company: "Quora",
      companylogo:
        "https://media.licdn.com/dms/image/C560BAQGAaKUlU_c3Pw/company-logo_200_200/0/1630666163987?e=1727913600&v=beta&t=28uTZfPlKueH72bSgTbFpxaXWAKwV3cz-lB_bMRAyXE",
      date: "Jan 2022 – Aug 2022",
      desc: "Managed a team of 50+ web development engineers, offering guidance and support to aid in their job placement. Conducted debugging sessions, peer code reviews, and provided interview preparation. Previously served as Team Captain at Neog Camp."
    },
    {
      role: "Full Stack Developer",
      company: "Learnbowl",
      companylogo:
        "https://media.licdn.com/dms/image/C4E0BAQEJR_IVQUA-XA/company-logo_200_200/0/1630634484717/learnbowl_logo?e=1727913600&v=beta&t=yoYSZ3HzMQWIycX-GEvyMRWK3KKJclnkN2JQV3BtXYM",
      date: "Feb 2021 – Dec 2021",
      desc: "Worked at LearnBowl as a Full Stack Developer, contributing to the development and maintenance of educational platforms and solutions."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal Projects",
  subtitle: "Diverse Ventures in Software Development and Innovation",
  projects: [
    {
      // image: require("./assets/images/fitbit.png"),
      projectName: "Fitbit Ecommerce app",
      projectDesc:
        "Designed and built a comprehensive e-commerce platform aimed at providing a seamless user experience for browsing, purchasing, and managing fitness-related items",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://fitbit-react.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "FitBook-Social-Media App",
      projectDesc:
        "This is a social media app, used Redux Toolkit for state management, neat UI(own component library) for CSS, and Typescript + React for frontend, for backend mockbee is used. Core features include Create post with text, Posting shared content, Post Feed, Search User, , Follow/Unfollow Users, Like Post, Update User Profile.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://fitbook-ankur9669.netlify.app/"
        }
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "FitVid-VideoLibrary App",
      projectDesc:
        "This is a responsive video library app inspired from youtube which is made with React, HTML, CSS & JavaScript. Core Features include search video, filter by categories, playlist management, history.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://fitvid.netlify.app/"
        }
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "QuizBizz",
      projectDesc:
        "This is responsive quiz app where you can find quizzes related to coding languages. It is made with React, HTML, CSS, JS.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ankur-quizbizz.netlify.app/"
        }
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "NeatUI",
      projectDesc:
        "An component library inspired from bootstrap and materialUI which make the UI developement fast, It is made with HTML, CSS and JS.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://suspicious-sammet-33f1b3.netlify.app/index.html"
        }
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Whats-App-Clone",
      projectDesc:
        "An Whats-App-Clone made with Mern stack.(It takes a little long time to load messages so pls have patience😅😅)",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://whats-app-clone-ankur9669.netlify.app/"
        }
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Amazon-Clone",
      projectDesc: "An Amazon-Clone made with React js and Firebase.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://clone-3019c.web.app/"
        }
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Stock-Calculator-Mark-14",
      projectDesc:
        "An Stock calculator app, where you can calculate whether u had profit😀 or loss😫..",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://stock-calculator-mark-14.netlify.app/"
        }
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Birthday-Palindrome",
      projectDesc:
        "An app, where you can check whether u have a palindrome birthdate or not.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://birthday-palindrome-mark-13.netlify.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Acheived 863/8051 rank in Hackerrank Hackfest 2020",
      // subtitle:
      //   "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image:
        "https://media.licdn.com/dms/image/D560BAQE8MivsmbT7Ig/company-logo_200_200/0/1705561459405/hackerrank_logo?e=1728518400&v=beta&t=hUjCvAGPIPsk0Tk9asAiqSx5oWUBr0Y261wkgXWL5J0",
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification Link",
          url: "https://www.hackerrank.com/results/hackerrank-hackfest-2020/gankur860?h_r=profile"
        }
      ]
    },
    {
      title: "Hackerrank 6 star problem solver",
      // subtitle:
      //   "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image:
        "https://media.licdn.com/dms/image/D560BAQE8MivsmbT7Ig/company-logo_200_200/0/1705561459405/hackerrank_logo?e=1728518400&v=beta&t=hUjCvAGPIPsk0Tk9asAiqSx5oWUBr0Y261wkgXWL5J0",
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Profile Link",
          url: "https://www.hackerrank.com/profile/gankur860"
        }
      ]
    },
    {
      title: "Solved 200+ leetcode questions",
      // subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image:
        "https://media.licdn.com/dms/image/C4E0BAQFvx45x7j4Zhg/company-logo_200_200/0/1631325952086?e=1728518400&v=beta&t=wt7USV4L2pbULySWcwSVtwPhNg8nwBxgT9H9h7qtHLY",
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Profile Link", url: "https://leetcode.com/u/gankur860/"}
      ]
    },
    {
      title: "Flipkart Seller Hackday hackathon runner-up",
      // subtitle:
      //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image:
        "https://media.licdn.com/dms/image/C560BAQF6H8gAs-JyFg/company-logo_200_200/0/1630669478258/flipkart_logo?e=1727913600&v=beta&t=8R2uCVjgCCpM6xWYln9VIx0MAxz4ojw6kCY1yD43F6E",
      imageAlt: "Google Code-In Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://hashnode.com/post/oops-concepts-easily-explained-ckseoyss00nttt2s1hl0jha0x",
      title: "OOPs Concepts for beginners",
      description:
        "I have Compiled my knowledge of Object oriented programming into this blog. Do Read it and give feedback"
    },
    {
      url: "https://hashnode.com/post/lets-learn-about-components-in-react-js-ckonynmna0edz6ds1a6rc3f5e",
      title: "Components in React",
      description:
        "In this blog I have put my knowledge of react components which could help in understanding about class and functional components in react."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 9109559728",
  email_address: "gankur860@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
