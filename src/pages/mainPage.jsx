
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import SectionCard from '../components/SectionCard';
import HomePage from './HomePage';
import AboutMe from '../content/AboutMe';
import Education from '../content/Education';
import WorkExperience from '../content/WorkExperience';
import Skills from '../content/Skills';

const SectionLeftStyle = {
    justifyContent: 'flex-start',
    display: 'flex',
    alignItems: 'center'
}

const SectionRightStyle = {
    justifyContent: 'flex-end',
    display: 'flex',
    alignItems: 'center'
}

const HEADER_BACKGROUND = "#161719"

function MainPage() {
  return (
    <div> 
        <Parallax pages={11}>

            {/* Front welcome full width page */}
            <ParallaxLayer>
                <HomePage/>
            </ParallaxLayer>

            {/* About me Section header */}
            <ParallaxLayer
                style={SectionLeftStyle}
                sticky={{ start: 1, end: 2}}>
                    <SectionCard
                        background={HEADER_BACKGROUND}
                        title="About Me"/>
            </ParallaxLayer>

            {/* About me Section Content */}
            <ParallaxLayer
                style={SectionRightStyle}
                factor={2}
                offset={1}>
                <AboutMe/>
            </ParallaxLayer>


            {/* Work Experience Section Header */}
            <ParallaxLayer
                style={SectionLeftStyle}
                sticky={{ start: 3, end: 4}}>
                    <SectionCard
                        background={HEADER_BACKGROUND}
                        title="Work Experience"/>
            </ParallaxLayer>

            {/* Work Experience Section Content */}
            <ParallaxLayer
                style={SectionRightStyle}
                factor={2}
                offset={3}>
                    <WorkExperience/>
            </ParallaxLayer>

            {/* Skills Section Header */}
            <ParallaxLayer
                style={SectionLeftStyle}
                sticky={{ start: 5, end: 6}}>
                    <SectionCard
                        background={HEADER_BACKGROUND}
                        title="Skills"/>
            </ParallaxLayer>

            {/* Skills Section Content */}
            <ParallaxLayer
                    style={SectionRightStyle}
                    factor={2}
                    offset={5}>
                    <Skills/>
            </ParallaxLayer>

            {/* Education Section Header */}
            <ParallaxLayer
                style={SectionLeftStyle}
                sticky={{ start: 7, end: 8}}>
                    <SectionCard
                        background={HEADER_BACKGROUND}
                        title="Education"/>
            </ParallaxLayer>

            {/* Education Section Content */}
            <ParallaxLayer
                style={SectionRightStyle}
                factor={2}
                offset={7}>
                    <Education/>
            </ParallaxLayer>

            {/* Portfolio Section Header */}
            <ParallaxLayer
                style={SectionLeftStyle}
                sticky={{ start: 9, end: 11}}>
                    <SectionCard
                        background={HEADER_BACKGROUND}
                        title="Portfolio"/>
            </ParallaxLayer>
            

            {/* Portfolio Section Content */}
            <ParallaxLayer
                style={SectionRightStyle}
                factor={2}
                offset={9}>
                    <AboutMe/>
            </ParallaxLayer>

            {/* Profile Picture */}
            {/* <ParallaxLayer
                sticky={{ start: 1, end: 4}}
                speed={0.01}
                factor={1}>
                    <img 
                        style={{
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            justifyContent: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            width: '10%',
                            border: '4px',
                            borderStyle: 'solid',
                        }}
                        src={'https://boredhumans.b-cdn.net/faces2/317.jpg'}
                        alt='profile'/>
            </ParallaxLayer> */}

        </Parallax>
    </div>
  );
}

export default MainPage;