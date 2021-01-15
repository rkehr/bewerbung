const skillLevels = [
  {
    groupName: 'Programmiersprachen',
    category: 'Development',
    description: '',
    skillLevels: [
      { name: 'JavaScript/ ES6', percentage: 78 },
      { name: 'TypeScript', percentage: 37 },
      { name: 'Java', percentage: 61 },
      { name: 'PHP 7.X', percentage: 38 },
      { name: 'Python', percentage: 24 },
      { name: 'C++', percentage: 10 },
      { name: 'Rust', percentage: 35 },
    ],
  },
  {
    groupName: 'Front End',
    category: 'Development',
    description: '',
    skillLevels: [
      { name: 'HTML5', percentage: 90 },
      { name: 'CSS3', percentage: 75 },
      { name: 'Sass/ Scss', percentage: 41 },
      { name: 'ReactJs', percentage: 55 },
      { name: 'jQuery', percentage: 65 },
      { name: 'Bootstrap', percentage: 45 },
    ],
  },
  {
    groupName: 'Back End',
    category: 'Development',
    description: '',
    skillLevels: [
      { name: 'Wordpress', percentage: 73 },
      { name: 'NodeJs/yarn', percentage: 42 },
      { name: 'Express', percentage: 35 },
      { name: 'Actix', percentage: 30 },
      { name: 'GraphQL/Apollo', percentage: 30 },
      { name: 'SQL', percentage: 40 },
      { name: 'MongoDB', percentage: 35 },
    ],
  },
  {
    groupName: 'SysAdmin',
    category: 'Infrastruktur',
    description: '',
    skillLevels: [
      { name: 'GNU/Linux (Ubuntu)', percentage: 54 },
      { name: 'NGINX', percentage: 63 },
      { name: 'Docker + Docker Compose', percentage: 11 },
    ],
  },
  {
    groupName: 'DevOps',
    category: 'Infrastruktur',
    skillLevels: [
      { name: 'Scrum', percentage: 30 },
      { name: 'Git', percentage: 45 },
      { name: 'WebPack/Babel', percentage: 25 },
    ],
  },
  {
    groupName: 'Grafiksoftware',
    category: 'Design',
    description: '',
    skillLevels: [
      { name: 'Photoshop', percentage: 78 },
      { name: 'GIMP', percentage: 56 },
      { name: 'Illustrator', percentage: 63 },
      { name: 'XD', percentage: 34 },
      { name: 'Lightroom', percentage: 72 },
      { name: 'Indesign', percentage: 46 },
      { name: 'Processing3/p5.js', percentage: 54 },
    ],
  },
  {
    groupName: 'Sprachen',
    category: 'Softskills',
    description: '',
    skillLevels: [
      { name: 'Deutsch', percentage: 100 },
      { name: 'Englisch', percentage: 90 },
      { name: 'Schwedisch', percentage: 20 },
      { name: 'Spanisch', percentage: -8 },
    ],
  },
  {
    groupName: 'Andere Software',
    category: 'Andere',
    description: '',
    skillLevels: [
      { name: 'Ableton Live', percentage: 95 },
      { name: 'LibreOffice', percentage: 62 },
    ],
  },
];

export { skillLevels };
