import { FiMoon, FiCoffee, FiSun, FiBook } from 'react-icons/fi';
const themes = [
  {
    name: 'Dark',
    Icon: FiMoon,
    background: '#081622',
    backgroundDark: '#020612',
    primary: '#EEB',
    accent: 'orange',
  },
  {
    name: 'Coffee',
    Icon: FiCoffee,
    background: '#262622',
    backgroundDark: '#191919',
    primary: '#EEB',
    accent: 'orange',
  },
  {
    name: 'Light',
    Icon: FiSun,
    background: '#EED',
    backgroundDark: '#F9D999',
    primary: '#764622',
    accent: 'tomato',
  },
  {
    name: 'Contrast',
    Icon: FiBook,
    background: '#FFF',
    backgroundDark: '#CCC',
    primary: '#000',
    accent: '#F00',
  },
];

export default themes;
