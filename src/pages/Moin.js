import React from 'react';
import PropTypes from 'prop-types';
import { SocialMediaLink } from '../components';
import { useThemeStore } from '../state';
import { images } from '../data';
import GradientBorderImage from '../components/GradientBorderImage';

const Moin = ({ page }) => {
  const { colorAccent, borderColorAccent } = useThemeStore((state) => {
    return {
      colorAccent: state.theme.colorAccent,
      borderColorAccent: state.theme.borderColorAccent,
    };
  });

  return (
    <>
      <div className='centerVertically'>
        <div className='moinGrid'>
          <GradientBorderImage image={images.moinImage} />
          <ul style={borderColorAccent}>
            <li>Student</li>
            <li>Front End Entwickler</li>
            <li>UX Designfreund</li>
            <li>Wordpressrehabilitand</li>
          </ul>
          <ul>
            <li>Back End neuling</li>
            <li>Kaffeeenthusiast</li>
            <li>Hobbyfotograf</li>
            <li>Pflanzenmensch</li>
          </ul>
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
      </div>
      <div className='moinTextSection'>
        <h1 className='clampWidth' style={colorAccent}>
          {page.name}
        </h1>
        <div>
          <p className='p1'>
            Ich habe Eure Anzeige auf Indeed gefunden und glaube, dass wir sehr
            glücklich miteinander werden könnten! Ich liebe Design und vorallem
            wohldesignte Benutzeroberflächen. Popups und Blinkende Werbungen
            finde ich dagegen furchtbar.
          </p>
        </div>
        <div>
          <p className='p2'>
            ich habe dank meines verlängerten Studiums inzwischen auch schon ein
            paar erfahrungen in der Programmierung sowohl innerhalb der Uni als
            auch in der &apos;echten&apos; Welt sammeln dürfen, sowohl was
            Design und Fotografie, als auch beim Bau von Webseiten für
            persönliche Projekte und eine Autowerkstatt.
          </p>
        </div>
        <div>
          <p className='p3'>
            An dieser Stelle würde ich Euch natürlich fragen wie es Euch so geht
            und was Ihr so macht, allerdings ist das wohl nicht der richtige Ort
            dafür, deshalb erstmal mehr über mich! :)
          </p>
        </div>
        <div>
          Falls sich das für euch gut anhört, oder ihr sonst noch Fragen habt,
          zögert nicht euch zu melden
        </div>
      </div>
    </>
  );
};

Moin.propTypes = {
  page: PropTypes.object,
};

export default Moin;
