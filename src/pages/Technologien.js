import React from 'react';
import { Page, SkillMeterGroup } from '../components';

const Technologien = ({ skillLevelData }) => {
  const skillMeterGroups = skillLevelData.map(
    ({ groupName, skillLevels }, index) => {
      return (
        <SkillMeterGroup
          key={index.toString()}
          groupName={groupName}
          skillLevels={skillLevels}
        ></SkillMeterGroup>
      );
    }
  );

  return (
    <Page>
      <h1>Technologien</h1>
      <div className='gridContainer'>
        <SkillMeterGroup
          groupName='Jack of all trades, master of some...'
          skillLevels={[]}
        >
          <p>
            Ich lerne leidenschaftlich gerne neue Dinge!
            <br />
            Führt das gelegentlich dazu dass ich so viele verschiedene Dinge
            lerne, dass ich am ende vieles ein bisschen kann und wenig perfekt?
            Vielleicht.
          </p>
          <p>
            Allerdings hilft es mir in vielen Situationen auch dabei das große
            Ganze zu sehen und viele Konzepte die in mehreren
            Programmiersprachen und Programmen auftauchen anwenden zu können
          </p>
        </SkillMeterGroup>
        {skillMeterGroups}
      </div>
    </Page>
  );
};

export default Technologien;
