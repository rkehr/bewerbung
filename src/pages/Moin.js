import React from 'react';
import PropTypes from 'prop-types';
import { Page, Slider } from '../components';
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
    <Page page={page} header={false}>
      <div className='moinTopSection'>
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
      </div>
      <h1 className='clampWidth' style={colorAccent}>
        {page.name}
      </h1>
      <Slider>
        <p className='p1'>
          Ich habe Eure Anzeige auf Indeed gefunden und glaube, dass wir sehr
          glücklich miteinander werden könnten! Ich liebe Design und vorallem
          wohldesignte Benutzeroberflächen. Popups und Blinkende Werbungen finde
          ich dagegen furchtbar.
        </p>
        <p className='p2'>
          ich habe dank meines verlängerten Studiums inzwischen auch schon ein
          paar erfahrungen in der Programmierung sowohl innerhalb der Uni als
          auch in der &apos;echten&apos; Welt sammeln dürfen, sowohl was Design
          und Fotografie, als auch beim Bau von Webseiten für persönliche
          Projekte und eine Autowerkstatt.
        </p>
        <p className='p3'>
          An dieser Stelle würde ich Euch natürlich fragen wie es Euch so geht
          und was Ihr so macht, allerdings ist das wohl nicht der richtige Ort
          dafür, deshalb erstmal mehr über mich! :)
        </p>
      </Slider>
    </Page>
  );
};

Moin.propTypes = {
  page: PropTypes.object,
};

export default Moin;
