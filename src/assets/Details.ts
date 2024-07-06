import codetribeMin from 'assets/icons/codetribe.min.webp';
import codetribe from 'assets/icons/codetribe.webp';
import belgradeMin from 'assets/icons/belgrade.min.webp';
import belgrade from 'assets/icons/belgrade.webp';
import inssioMin from 'assets/icons/inssio.min.webp';
import inssio from 'assets/icons/inssio.webp';
import fourityMin from 'assets/icons/fourity.min.webp';
import fourity from 'assets/icons/fourity.webp';
import shareitMin from 'assets/icons/shareit.min.webp';
import shareit from 'assets/icons/shareit.webp';

const details = {
  name: {
    first: 'Dusan',
    last: 'Dimic',
    nickname: 'Dule',
  },
  education: [
    {
      school: 'University of Belgrade',
      url: 'https://www.bg.ac.rs/',
      icon: belgrade,
      iconMin: belgradeMin,
      location: 'Beograd, Serbia',
      degree: 'Bachelor',
      major: 'Computer Science',
      start: 'Sep 2016',
      end: 'May 2020',
    },
  ],
  experience: [
    {
      company: 'Inssio',
      url: 'https://inssio.com/',
      icon: inssio,
      iconMin: inssioMin,
      location: 'Beograd, Serbia',
      contract: 'Full-time',
      position: 'Senior Full Stack Web & Mobile Developer',
      start: 'Oct 2022',
      end: 'Apr 2024',
      description: [
        'Built the MVP app using react-native and expo and ticket dashboard using react.',
        'Implemented UI designs of several game ideas to pixel perfect and optimized UI components.',
        'Used redux and react context for sharing the global states.',
        'Used react hooks for state management and ui optimization.',
        'Defined and used custom hooks and used apollo-graphql for backend integration.',
        'Implemented beautiful animations using react-spring/native.',
        'Collaborated with a cross-functional team using tools such as Github, Jira, and Discord, ensuring effective communication and streamlined development processes.',
      ],
      skills: [
        'React',
        'React Native',
        'Expo',
        'Angular',
        'VueJS',
        'Apollo',
        'NodeJS',
        'AWS',
        'GraphQL',
      ],
    },
    {
      company: 'Fourity',
      url: 'https://www.fourity.com/',
      icon: fourity,
      iconMin: fourityMin,
      location: 'Novi Sad, Serbia',
      contract: 'Full time',
      position: 'Senior Frontend Developer',
      start: 'Apr 2020',
      end: 'Sep 2022',
      description: [
        'Developed several web applications using React, Next.js, and TypeScript.',
        'Clarified project goals by creating wireframes, use-cases, and information architectures.',
        'Implemented web-accessible and mobile-optimized UI using Material-UI, TailWindCSS, Bootstrap5, Emotion, etc.',
        'CMS experience with Storyblok and contentful.',
        'Built animations of page transition, menus, and slideout using react-spring, gsap, and framer motion.',
        'Mentored advanced TDD practices and set the standards for the team members.',
        'Reduced initial page load speed by 60% with incremental SSG and partial hydration.',
        'Integrated Storm, Clerk, and Unifaun for checkout, product recommendations, etc.',
      ],
      skills: [
        'TypeScript',
        'React',
        'React Native',
        'VueJS',
        'NextJS',
        'NodeJS',
        'TailWindCSS',
        'Material UI',
        'GSAP',
      ],
    },
    {
      company: 'Share IT',
      url: 'https://www.shareitsolutions.com/',
      icon: shareit,
      iconMin: shareitMin,
      location: ' Novi Sad, Serbia',
      contract: 'Contract',
      position: 'Frontend React & React Native Developer',
      start: 'Oct 2019',
      end: 'Feb 2020',
      description: [
        'Built the Next.js based React Front-end and Node/DynamoDB/Lambda based serverless functions.',
        'Used AWS CloudFormation for seamless provisioning of the backend service.',
        'Set up AWS Cloudwatch logs, Budget alerts, Cognito, and AWS WAF for the back-end',
        'Built the mobile app in React Native, tested and published to iOS and Android stores.',
        'Worked on reusing React web components for React Native mobile app.',
        'Used React Native SVG library to fully rely on SVG images.',
        'Used React Navigation for navigation and Styled Components for the UI.',
        'Used Yarn workspace to build the monorepo of the backend, web frontend, and mobile app.',
      ],
      skills: [
        'NextJS',
        'React',
        'NodeJS',
        'DynamoDB',
        'Lambda',
        'AWS CloudFormation',
        'AWS Cloudwatch',
        'React Native',
        'iOS/Android',
      ],
    },
    {
      company: 'Codetribe',
      url: 'https://codetri.be/',
      icon: codetribe,
      iconMin: codetribeMin,
      location: 'Novi Sad, Serbia',
      contract: 'Part time',
      position: 'Full Stack Developer',
      start: 'Aug 2018',
      end: 'Sep 2019',
      description:
      [
        'Developed a web version of the application using React.',
        'Implement fully responsive pixel-perfect cross-platform designs in React and SASS.',
        'Refactored an application due to issues with performance and looming bottlenecks.',
        'Oversaw code quality and code review process in the engineering team.',
        'Built mobile-responsive CSS components and organized the front-end with them.',
      ],

      skills: [
        'NodeJS',
        'Docker',
        'GitHub CI/CD',
        'React',
        'Bootstrap',
      ],
    },
  ],
  languages: [
    {
      name: 'Serbia',
      level: 'C2',
      native: true,
    },
    {
      name: 'English',
      level: 'C1',
    },
  ],
  contact: {
    address: 'Barcelona, España',
    email: 'contact@bsodium.fr',
    phone: '+33 7 83 79 29 25',
    website: 'https://www.bsodium.fr',
    linkedin: 'https://www.linkedin.com/in/bsodium/',
    github: 'https://www.github.com/bsodium',
    researchgate: 'https://www.researchgate.net/profile/Elliot-Negrel-Jerzy',
    gitlab: 'https://www.gitlab.com/bsodium',
    deviantart: 'https://www.deviantart.com/bsodium',
  },
};

export default details;
