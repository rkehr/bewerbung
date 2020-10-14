import React from 'react';
import { Page, SkillLevel } from '../components';

const Technologien = () => {
    return (
        <Page>
            <h1>Technologien</h1>
            <h2>Front End</h2>
            <SkillLevel name="HTML5" percentage="80"/>
            <SkillLevel name="CSS3" percentage="75"/>
            <SkillLevel name="JavaScript" percentage="60"/>
            <SkillLevel name="ReactJs" percentage="35"/>
            <h2>Back End</h2>
            <SkillLevel name="PHP 7.x" percentage="55"/>
            <SkillLevel name="WordPress" percentage="72"/>
            <SkillLevel name="NodeJs" percentage="43"/>
            <SkillLevel name="WebPack + Babel" percentage="25"/>
            <SkillLevel name="MySQL" percentage="40"/>
            <SkillLevel name="MongoDB + Mongoose" percentage="45"/>
            <h2>System Administration</h2>
            <SkillLevel name="GNU/Linux (CentOS8)" percentage="20"/>
            <SkillLevel name="NGINX" percentage="63"/>
            <SkillLevel name="Ansible" percentage="5"/>
            <SkillLevel name="Docker + Docker Compose" percentage="11"/>
            <h2>DevOps</h2>
            <SkillLevel name="Scrum" percentage="30"/>
            <SkillLevel name="Git" percentage="45"/>
            <h2>Graphics Software</h2>
            <SkillLevel name="PhotoShop" percentage="78"/>
            <SkillLevel name="GIMP" percentage="36"/>
            <SkillLevel name="Illustrator" percentage="56"/>
            <SkillLevel name="XD" percentage="34"/>
            <SkillLevel name="Lightroom" percentage="72"/>


        </Page>)
}

export default Technologien;