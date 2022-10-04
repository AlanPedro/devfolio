module.exports = {
  pathPrefix: '/devfolio',
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Alan Hutcheson',
    // Main Site Title
    title: `Alan Hutcheson | Full-Stack Developer & Platform Engineer`,
    // Description that goes under your name in main bio
    description: `Experienced full stack developer and platform engineer looking for work in climate & sustainability technology`,
    // Optional: Resume link file name
    resume: `https://drive.google.com/file/d/15vdIkCfZirUI_uYamJpfW_w85HPl2ab0/view?usp=sharing`,
    // Optional: Twitter account handle
    // author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/AlanPedro`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/alan-p-hutcheson/`,
    // Content of the About Me section
    about: `Technical lead with 5 years experience working across the technology stack; from full stack web and mobile development to functional automation testing, performance testing and dev-ops and infrastructure work. Passionate about designing and building applications and technologies that can help provide real world social value, particularly in the climate change space. Worked on a range of project scales and technologies, from solo freelance mobile development to large scale critical public sector infrastructure projects.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Carbon Emission Measurement Tool',
        description:
          'A tool enabling consulting teams to track and monitor their carbon emissions from work travel',
        link: 'https://github.com/AlanPedro/cemt-web',
      },
      {
        name: 'Doodle',
        description:
          'An online multiplayer game where players take turns drawing and describing wacky scenarios. The game has reached 70 countries with over 3000 completed games',
        link: 'https://doodle-game.io',
      },
      {
        name: 'CoffeeBreak',
        description:
          'A slack bot that connects colleagues for an informat coffee chat',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Résumé',
        description: '',
        link: `https://drive.google.com/file/d/15vdIkCfZirUI_uYamJpfW_w85HPl2ab0/view?usp=sharing`,
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Platform',
        description:
          'Jenkins, Kubernetes, Docker, Amazon Web Services (AWS), Firebase, ELK Stack (Elasticsearch, Kibana, Logstash), Grafana, Dynatrace, Github Actions, Groovy, Bash',
      },
      {
        name: 'Back End',
        description: 'Scala, Java, Play Framework, Springboot, Node, Typescript, Kotlin',
      },
      {
        name: 'Front End',
        description:
          'Typescript, React, D3.js, Tailwind CSS, Material UI, Redux Observable, RxJS, Jest, Cypress',
      },
      {
        name: 'Databases',
        description: 'PostgreSQL, Firebase Cloud Firestore',
      },
      {
        name: 'Testing',
        description: 'Selenium, Gatling',
      },
      {
        name: 'Other',
        description: 'CI/CD, Microservices, API Design, Agile working, JIRA',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: `projects`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
