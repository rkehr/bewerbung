import React from 'react';

const themes = {
  dark: {
    background: '#EED',
    primary: '#262622',
    accent: 'orange',
  },
  light: {
    background: '#262622',
    primary: '#EEB',
    accent: 'orange',
  },
};

const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: ( theme ) => {
    return theme === themes.dark ? themes.light : themes.dark
  },
});

export { themes, ThemeContext }
