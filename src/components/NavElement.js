import React from 'react';
import { NavLink } from 'react-router-dom';
import { useGlobalStore } from '../state';

function NavElement({ to, children }) {
  const {
    backgroundColorBackgroundDark,
    backgroundColorBackground,
    colorPrimary,
  } = useGlobalStore(state => state.theme);
  console.log(location.pathname + ' == ' + to + ' resolves to');
  console.log(location.pathname == to);
  const background =
    location.pathname == to
      ? backgroundColorBackground
      : backgroundColorBackgroundDark;
  console.log(location);
  return (
    <NavLink
      to={to}
      activeClassName='activeLink'
      style={{ ...background, ...colorPrimary }}>
      <div className='before'></div> {children}
    </NavLink>
  );
}

export default NavElement;
