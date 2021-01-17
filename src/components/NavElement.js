import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useThemeStore } from '../state';

function NavElement({ page, updatePageDirection }) {
  const { to, name, emoji, accentColor } = page;

  const {
    backgroundColorBackgroundDark,
    backgroundColorBackground,
    colorPrimary,
    setTheme,
  } = useThemeStore((state) => {
    const { theme } = state;
    return {
      backgroundColorBackgroundDark: theme.backgroundColorBackgroundDark,
      backgroundColorBackground: theme.backgroundColorBackground,
      colorPrimary: theme.colorPrimary,
      setTheme: state.setTheme,
    };
  });

  const [background, setBackground] = useState(backgroundColorBackgroundDark);

  useEffect(() => {
    setBackground(
      location.pathname == to
        ? backgroundColorBackground
        : backgroundColorBackgroundDark
    );
  }, [backgroundColorBackground, backgroundColorBackgroundDark, to]);

  return (
    <NavLink
      onClick={() => {
        updatePageDirection(page.position);
        setTheme((i) => i, accentColor);
      }}
      to={to}
      activeClassName='activeLink'
      style={{ ...background, ...colorPrimary }}>
      <div className='before' style={{ backgroundColor: accentColor }}></div>
      {emoji}
      <br />
      <span className='navText'>{name}</span>
    </NavLink>
  );
}

NavElement.propTypes = {
  page: PropTypes.object,
  updatePageDirection: PropTypes.func,
  changePageDirection: PropTypes.func,
};

export default NavElement;
