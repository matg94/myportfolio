
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef } from 'react';
import SectionCard from '../components/SectionCard';
import HomePage from './HomePage';
import AboutMe from '../content/AboutMe';
import Education from '../content/Education';
import WorkExperience from '../content/WorkExperience';
import Skills from '../content/Skills';
import Portfolio from '../content/Portfolio';

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
    const ref = useRef();
    const scrollToAboutMe = () => ref.current.scrollTo(1.5)
    const scrollToTop = () => ref.current.scrollTo(0)
    return (
        <div> 
            <Parallax pages={11} ref={ref}>

                {/* Front welcome full width page */}
                <ParallaxLayer>
                    <HomePage arrowOnClick={scrollToAboutMe}/>
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
                        <Portfolio/>
                </ParallaxLayer>

                <ParallaxLayer
                    factor={1}
                    offet={1}
                    sticky={{start: 1, end: 11}}>
                        <img className='arrow-return arrow' onClick={scrollToTop} src="/arrow_green.png"></img>
                    </ParallaxLayer>

            </Parallax>
        </div>
    );
}

export default MainPage;