import SortingVisualiserImage from './assets/sorting-visualiser.png';
import InterpreterImage from './assets/interpreter.png';

const experiences = [
  {
    id: 1,
    startYear: 2022,
    endYear: 2024,
    role: 'Software Developer',
    company: 'Koch',
    description:
      'As a Software Developer at Molex, one of the KOCH entities, I contributed to the Sales, Service, and Experience cloud of Salesforce. My responsibilities included building LWC Components for the front end and developing backend functionality using Apex, Python and SOQL.',
    skills: ['JavaScript', 'HTML/CSS', 'Apex', 'Salesforce', 'LWC', 'Python'],
  },

  {
    id: 2,
    startYear: 2024,
    endYear: 'PRESENT',
    role: 'Software Developer',
    company: 'Mojro',
    description:
      'As a Software Developer at Mojro, I worked on the Shipper project, a logistics-related application built with React. My role involved enhancing the Shipper web application, focusing on improving functionality and user experience.',
    skills: ['JavaScript', 'HTML/SCSS', 'React', 'Redux', 'MUI'],
  },
];

const projects = [
  {
    id: 1,
    title: 'Sorting Visualiser',
    description:
      'This project provides a visual representation of different sorting algorithms such as Merge Sort, Selection Sort, and Bubble Sort. This project helped me to JavaScript skills and gain deeper understanding of sorting algorithms.',
    link: 'https://githubsumanth.github.io/SortingVisualizer/',
    image: SortingVisualiserImage,
    skills: ['React', 'JavaScript', 'HTML/CSS'],
  },
  {
    id: 2,
    title: 'Simple Interpreter',
    description: `I created a basic interpreter in Python and developed an IDE to write code and view the results. This was a significant component of my college major project. I owe thanks to Ruslan Spivak, whose blog "Let's build A Simple Interpreter" has helped me comprehend and create this project.`,
    link: 'https://github.com/GithubSumanth/Interpreter',
    image: InterpreterImage,
    skills: ['Python', 'Tkinter', 'JavaScript', 'HTML/CSS'],
  },
];

export { experiences, projects };
