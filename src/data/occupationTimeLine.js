const occupationTimeLine = [
  {
    name: 'Bachelor Studium',
    organisation: 'Medieninformatik HTW Berlin',
    description:
      'Seid Einigen Jahren (I know, I know) Studier ich inzwischen Medieninformatik. Für längere Zeit war ich mir nicht sicher ob ich überhaupt fertigstudieren möchte weil mir die kreative Komponente fehlte, jetzt aber habe ich die Kreativität in der Programmierung entdeckt.',
    interval: {
      start: new Date('2016-4-1'),
      end: new Date(),
    },
    color: '#447900',
    textColor: '#EEB',
  },
  {
    name: 'Content Creator',
    organisation: 'Urban Motors und Bredlow Automobile via Soniques',
    description:
      'Hier habe ich für die Socialmediaauftritte zweier Werkstätten bzw. Autohändler Fotos gemacht und getextet. Weil ich sonst weder viel mit Autos noch mit Motorrädern am Hut hab, war es hier besonders spannend gute Motive zu suchen und dabei gleich zwei Werkstätten entdecken zu können.',
    interval: {
      start: new Date('2016-12-1'),
      end: new Date('2017-5-31'),
    },
    color: '#990000',
    textColor: '#EEB',
  },
  {
    name: 'Barista',
    organisation: 'The Bowl GmbH',
    description:
      'Meine Erste Berührung mit der Gastronomie. Viel Kaffee gemacht viel Kontakt mit Menschen gehabt. Da die Bowl ausschließlich vegane Lebensmittel servierte, gelernt Latte Art mit verschiedenen Pflanzenmilchen zu machen.',
    interval: {
      start: new Date('2017-7-1'),
      end: new Date('2018-10-31'),
    },
    color: '#087',
    textColor: '#EEB',
  },
  {
    name: 'Webdesign und Development',
    organisation: 'db Automobile GmbH',
    description:
      "Diese Getriebewerkstat brauchte eine Website und ich habe knapp ein halbes Jahr and einem neuen Wordpresstheme für sie 'from scratch' gebastelt. Leider konnten ich und mein damaliger Chef uns nicht darauf einigen wie eine moderne Website aussehen sollte und er ist letzten Endes bei seiner alten geblieben. Leider existieren hiervon nurnoch Fotos und ein Logo dass ich entworfen hatte. Ich habe jedoch trotzdem sehr viel über die Entwicklung von Themes und Plugins für Wordpress gelernt.",
    interval: {
      start: new Date('2018-12-1'),
      end: new Date('2019-4-30'),
    },
    color: '#228',
    textColor: '#EEB',
  },
  {
    name: 'Webentwicklung',
    organisation: 'Cleaner.Earth',
    description:
      'Mein Herzensprojekt. Mit meinem Vater und meinem Bruder habe ich Cleaner.Earth, eine Online Plattform zur Finanzierung von Plastiksammel- und Recyclingprojekten, gegründet und die Entwicklung der Website übernommen. Nachdem wir zunächst mit Wordpress arbeiteten haben wir uns dazu entschieden die Website als React App mit Rust backend aufzubauen. Dieser Switch war eine der lehrreichsten und befriedigendsten erfahrungen meiner bisherigen Entwicklerlaufbahn. Moderne Webtechnologien sind etwas wunderschönes 💞',
    interval: {
      start: new Date('2019-3-1'),
      end: new Date(),
    },
    color: '#006688',
    textColor: '#EEB',
  },
  {
    name: 'Barista',
    organisation: 'Unser Cafe/ Portuguese Bakery by Veloso & Freshlife GmbH',
    description:
      'Ein weiterer Caféjob. Zahlose Tassen Kaffee gekocht und super viele Nette Menschen kennengelernt. Früher oder später wird es wohl allerdings Zeit sich von der Gastronomie zu verabschieden. Allerdings kann ich jetzt exzellenten Kaffee kochen.',
    interval: {
      start: new Date('2019-5-1'),
      end: new Date('2020-10-18'),
    },
    color: '#2d2f2f',
    textColor: '#EEB',
  },
].reverse();

export { occupationTimeLine };
