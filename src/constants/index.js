import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  blender,
  django,
  kubernetes,
  linux,
  pandas,
  python,
  tensorflow,
  unity,
  unreal,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  ML,
  game,
  anonymous,
  intelligentplay,
  npc,
  gaitrecognition,
  umbc,
  vit,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Machine Leraning Engineer',
    icon: ML,
  },
  {
    title: 'Game Developer',
    icon: game,
  },
  {
    title: 'Web Developer',
    icon: frontend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
];

const technologies = [
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Django',
    icon: django,
  },
  {
    name: 'Tensorflow',
    icon: tensorflow,
  },
  {
    name: 'Kubernetes',
    icon: kubernetes,
  },
  {
    name: 'Pandas',
    icon: pandas,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'Unity',
    icon: unity,
  },
  {
    name: 'Blender',
    icon: blender,
  },
  {
    name: 'Unreal Engine',
    icon: unreal,
  },
  {
    name: 'Linux',
    icon: linux,
  },
];

const experiences = [
  {
    title: 'University Of Maryland, Baltimore COunty',
    company_name: 'Master Of Science In Computer Science',
    icon: umbc,
    iconBg: '#333333',
    date: 'Aug 2022 - May 2024',
  },
  {
    title: 'Vellore Institute Of Technology, India',
    company_name: 'Bachelor Of Technology In Computer Science',
    icon: vit,
    iconBg: '#333333',
    date: 'Mar 2022 - May 2022',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Anonymous',
    description: 'Anonymizing Users Behavior In Virtual World Using Differential Privacy',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: anonymous,
    repo: 'https://github.com/saravan-p/dp_project',
    demo: '',
  },
  {
    id: 'project-2',
    name: 'Intelligent Play',
    description:
      'Enhancing Gaming Experience through Reinforcement Learning',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: intelligentplay,
    repo: 'https://github.com/saravan-p/Intelligent_play',
    demo: '',
  },
  {
    id: 'project-3',
    name: 'AI in Games',
    description: 'AI-Enhanced Realism in Gaming: Crafting Dynamic Environments and NPCs',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: npc,
    repo: 'https://link.springer.com/chapter/10.1007/978-981-19-5221-0_60',
    demo: '',
  },
  {
    id: 'project-4',
    name: 'Gait Recognition',
    description: 'Human gait Recognition',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: gaitrecognition,
    repo: 'https://github.com/saravan-p/gait-recognition',
    demo: '',
  },
];

export { services, technologies, experiences, projects };
