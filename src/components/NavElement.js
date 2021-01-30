import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useThemeStore, useTheme } from '../state';

function NavElement({ page, updatePageDirection }) {
  const { to, name, emoji, accentColor } = page;

  const setTheme = useThemeStore((state) => state.setTheme);

  const [isDark, setIsDark] = useState(true);

  const themedNavBackground = useTheme({
    color: 'primary',
    backgroundColor: isDark ? 'background' : 'backgroundDark',
  });

  useEffect(() => {
    setIsDark(location.pathname == to);
  }, [setIsDark, to, location.pathname]);

  return (
    <NavLink
      onClick={() => {
        updatePageDirection(page.position);
        setTheme((i) => i, accentColor);
      }}
      to={to}
      activeClassName='activeLink'
      style={themedNavBackground}>
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
