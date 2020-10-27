import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Page } from '../components';
import { useGlobalStore } from '../state/globalState';
const moinImage = '../../assets/img/BewerbungsfotoBG_sm.png';

const Hallo = ({ page }) => {
  const { backgroundColorBackground, colorAccent, accent } = useGlobalStore(
    state => {
      return state.theme;
    }
  );
  const [isVisible, setIsVisible] = useState(false);
  const slowTransition = { ease: 'easeOut', duration: 1 };
  const slowerTransition = { ease: 'easeOut', duration: 1.5 };
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <Page page={page} header={false}>
      <AnimatePresence>
        <div className='moinImageWrapper'>
          {isVisible && (
            <motion.div
              className='moinImageFrame'
              initial={{ transform: 'rotateY(-90deg)' }}
              animate={{ transform: 'rotateY(0deg)' }}
              exit={{ transform: 'rotateY(90deg)' }}
              transition={slowerTransition}>
              <div
                className='moinImageBackground'
                style={backgroundColorBackground}></div>
            </motion.div>
          )}
          {isVisible && (
            <motion.img
              className='moinImage'
              initial={{ transform: 'rotateY(270deg)' }}
              animate={{ transform: 'rotateY(0deg)' }}
              exit={{ transform: 'rotateY(90deg)' }}
              transition={slowTransition}
              src={moinImage}
              alt='Ein Foto von Robin mit Bücherstapel und zimmerpflanze'
            />
          )}
        </div>
      </AnimatePresence>
      <ul>
        <li>Student</li>
        <li>Front End Entwickler</li>
        <li>UX Designfreund</li>
        <li>Wordpressrehabilitand</li>
        <li>Back End neuling</li>
        <li>Kaffeeenthusiast</li>
      </ul>
      <h1
        onClick={() => {
          setIsVisible(!isVisible);
        }}
        style={colorAccent}>
        {page.name}
      </h1>
      <p>
        Ich habe Eure Anzeige auf Indeed gefunden und glaube, dass wir sehr
        glücklich miteinander werden könnten! Ich liebe Design und vorallem
        wohldesignte Benutzeroberflächen. Popups und Blinkende Werbungen finde
        ich dagegen furchtbar.
      </p>
      <p>
        ich habe dank meines verlängerten Studiums inzwischen auch schon ein
        paar erfahrungen in der Programmierung sowohl innerhalb der Uni als auch
        in der 'echten' Welt sammeln dürfen, sowohl was Design und Fotografie,
        als auch beim Bau von Webseiten für persönliche Projekte und eine
        Autowerkstatt.
      </p>
      <p style={{ borderColor: accent }}>
        An dieser Stelle würde ich Euch natürlich fragen wie es Euch so geht und
        was Ihr so macht, allerdings ist das wohl nicht der richtige Ort dafür,
        deshalb erstmal mehr über mich! :)
      </p>
    </Page>
  );
};

export default Hallo;
