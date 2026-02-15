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
  username: "Yi Yang (Yee Yeung)",
  title: "Hi all, I'm Yi Yang (Yee Yeung)",
  subTitle: emoji(
    "A Clinical Research Physician & Developer 🩺 bridging clinical research and technology. Passionate about data science, predictive modelling, and building tools that improve healthcare outcomes."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/YeeYeung",
  // linkedin: "",
  gmail: "yiyang@yylives.today",
  // gitlab: "",
  // facebook: "",
  // medium: "",
  // stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle:
    "BRIDGING MEDICINE, DATA SCIENCE & TECHNOLOGY",
  skills: [
    emoji(
      "⚡ Clinical research design, medical writing, and regulatory strategy for pharmaceutical & biotech companies"
    ),
    emoji(
      "⚡ Data analysis & predictive modelling with Python, R, SQL, and SPSS for healthcare and real-world evidence studies"
    ),
    emoji(
      "⚡ Full-stack web development and cloud deployment to build tools that support clinical workflows"
    )
  ],

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Canberra",
      logo: require("./assets/images/ucLogo.png"),
      subHeader: "Master of Information Technology and Systems",
      duration: "2023 - 2024",
      desc: "",
      descBullets: []
    },
    {
      schoolName: "Australian National University",
      logo: require("./assets/images/anuLogo.png"),
      subHeader: "Master of Public Health",
      duration: "2019 - 2020",
      desc: "",
      descBullets: []
    },
    {
      schoolName: "Nantong University",
      logo: require("./assets/images/ntuLogo.png"),
      subHeader: "Bachelor of Clinical Medicine",
      duration: "2011 - 2016",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Clinical Research", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Analysis & Modelling",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming (Python / JS)",
      progressPercentage: "65%"
    },
    {
      Stack: "Public Health",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Scientific Manager",
      company: "Tigermed",
      companylogo: require("./assets/images/tigermedLogo.png"),
      date: "2025 – Present",
      desc: "",
      descBullets: []
    },
    {
      role: "Medical Manager",
      company: "Haihe Biopharma",
      companylogo: require("./assets/images/haiheLogo.png"),
      date: "2021 – 2022",
      desc: ""
    },
    {
      role: "Claims Manager",
      company: "Ping An Insurance",
      companylogo: require("./assets/images/pinganLogo.png"),
      date: "2017 – 2018",
      desc: ""
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "Publications",
  subtitle: "",

  achievementsCards: [
    {
      title:
        "Clinical Value of Natriuretic Peptide in Type 2 Diabetic Nephropathy",
      subtitle:
        "ZHU Yi-hua, YANG Yi, CHEN Yu-xiang, WU Jun-yuan, JIN Yan, CHEN Tong. Labeled Immunoassays & Clin Med, May 2014, Vol.21, No.2.",
      footerLink: []
    },
    {
      title:
        "Diagnostic Value of MNV in Severe Head Injury Patients with Septicemia",
      subtitle:
        "FAN Yu-ping, ZHU Yi-hua, CHEN Yu-xiang, CAO Xing-jian, WANG Zhi-feng, YANG Yi. Chin J Clinicians (Electronic Edition), Feb 2016, Vol.10, No.3.",
      footerLink: []
    },
    {
      title:
        "The Diagnostic Value of MNV in Cerebral Hemorrhage Coma Patients with Septicemia",
      subtitle:
        "LI Xin-ling, CAO Xing-jian, ZHU Yi-hua, FAN Yu-ping, YANG Yi. Labeled Immunoassays & Clin Med, Nov 2015, Vol.22, No.11.",
      footerLink: [
        {
          name: "View Paper",
          url: "https://www.bjmyfx.com/CN/10.11748/bjmy.issn.1006-1703.2015.11.004"
        }
      ]
    },
    {
      title:
        "Relationship Between the Levels of hsCRP and sEPCR with Arteriovenous Fistulas Thrombosis",
      subtitle:
        "CHEN Tong, FAN Yu-ping, CHEN Yu-xiang, WU Jun-yuan, ZHANG Xiu-lin, YANG Yi. Labeled Immunoassays & Clin Med, Apr 2015, Vol.22, No.4.",
      footerLink: []
    },
    {
      title:
        "Value of Novel Lymphocyte Population Parameters in Viral Infection Diagnosis",
      subtitle:
        "CAO Xing-jian, YANG Yi, CHEN Yu-xiang, WAN Yang-yang, QIU Yun-wen. Clinical Laboratory Journal, 2014, Vol.2.",
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
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
  title: "Podcast",
  subtitle: "Guest appearances on podcast shows",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://embed.podcasts.apple.com/au/podcast/59-%E8%80%81%E5%8F%8B-%E4%BD%A0%E4%B8%BA%E4%BB%80%E4%B9%88%E5%9C%A8%E4%B8%89%E5%8D%81%E5%B2%81%E8%A3%B8%E8%BE%9E%E7%A7%BB%E6%B0%91/id1636436841?i=1000627399134",
    "https://embed.podcasts.apple.com/au/podcast/vol-03-%E8%8B%B1%E5%85%AC%E5%AD%90%E5%A6%99%E5%BC%95%E6%83%85%E6%99%AF%E5%89%A7-%E5%AE%81%E8%B4%A2%E7%A5%9E%E7%AC%91%E5%88%9B%E6%96%B0%E6%AD%A6%E4%BE%A0/id1085635164?i=1000436356600"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact Me",
  subtitle:
    "Discuss a project or just want to say hi? My inbox is open for all.",
  number: "",
  email_address: "yiyang@yylives.today"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
