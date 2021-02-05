import React from 'react';
import PropTypes from 'prop-types';
import { SocialMediaLink } from '../components';
import { useTheme } from '../state';
import { images } from '../data';
import GradientBorderImage from '../components/GradientBorderImage';

const Moin = ({ page }) => {
  const themedHeader = useTheme({ color: 'accent' });
  const themedList = useTheme({ borderColor: 'accent' });
  return (
    <>
      <div className='moinHeader'>
        <div className='imgAndLists'>
          <ul style={themedList} className='moinList'>
            <li>Student</li>
            <li>Front End Entwickler</li>
            <li>UX Designfreund</li>
            <li>Backend- Neuling</li>
          </ul>
          <GradientBorderImage image={images.moinImage} />
          <ul className='moinList'>
            <li>Neugierig</li>
            <li>Kaffeeenthusiast</li>
            <li>Hobbyfotograf</li>
            <li>Pflanzenmensch</li>
          </ul>
        </div>
        <div className='socialMediaLinks'>
          <SocialMediaLink
            platformName='github'
            handle='rkehr'
            link='https://github.com/rkehr/'
          />
          <SocialMediaLink
            platformName='instagram'
            handle='robinkehr'
            link='https://instagram.com/robinkehr/'
          />
          <SocialMediaLink
            platformName='linkedin'
            handle='robinkehr'
            link='https://www.linkedin.com/in/robin-kehr-006367172/'
          />
          <SocialMediaLink
            platformName='email'
            handle='ich@robinkehr.de'
            link='ich@robinkehr.de'
            copyLinkOnClick
          />
          <SocialMediaLink
            platformName='phone'
            handle='+49 159 01038708'
            link='+49 159 01038708'
            copyLinkOnClick
          />
        </div>
      </div>
      <div className='moinTextSection'>
        <h1 className='clampWidth' style={themedHeader}>
          {page.name}
        </h1>
        <p>
          Ich bin Robin. Ich bin ein neugieriger Mensch und wenn ich endlos viel
          Zeit hätte würde ich am liebsten
          <span className='bold'> alles</span> lernen.
        </p>
        <p>
          Nach 24 Jahren musste ich allerdings feststellen, dass das etwas knapp
          wird und habe mich endgültig entschieden meinen Schwerpunkt auf die
          Programmierung zu legen.
        </p>
        <p>
          Warum Programmierung? <br />
          Kein anderes Feld bietet in meinen Augen eine ähnliche Vielfalt.
          Kreativität, analytisches Denken, kreative Problemlösung, und
          Mustererkennung, machen mir Spaß. Und all das lässt sich dann anwenden
          auf sinnstiftende Projekte, absolut sinnbefreite Projekte, esthetische
          Projekte, reine Kommandozeilenprojekte... Alles ist möglich und genau
          das fasziniert mich.
        </p>
      </div>
    </>
  );
};

Moin.propTypes = {
  page: PropTypes.object,
};

export default Moin;
