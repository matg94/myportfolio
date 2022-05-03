
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import SectionCard from '../components/SectionCard';
import HomePage from './HomePage';
import AboutMe from '../content/AboutMe';
import Education from '../content/Education';
import WorkExperience from '../content/WorkExperience';

const SectionStyle = {
    justifyContent: 'flex-start',
    display: 'flex',
    alignItems: 'center'
}

function MainPage() {
  return (
    <div> 
        <Parallax pages={9}>

            {/* Front welcome full width page */}
            <ParallaxLayer>
                <HomePage/>
            </ParallaxLayer>

            {/* About me Section header */}
            <ParallaxLayer
                style={SectionStyle}
                sticky={{ start: 1, end: 2}}>
                    <SectionCard
                        background='lavender'
                        title="About Me"/>
            </ParallaxLayer>

            {/* About me Section Content */}
            <ParallaxLayer
                style={{
                    justifyContent: 'flex-end',
                    display: 'flex',
                    alignItems: 'center'
                }}
                factor={2}
                offset={1}>
                <AboutMe/>
            </ParallaxLayer>


            {/* Education Section Header */}
            <ParallaxLayer
                style={SectionStyle}
                sticky={{ start: 3, end: 4}}>
                    <SectionCard
                        background='lavender'
                        title="Education"/>
            </ParallaxLayer>

            {/* Education Section Content */}
            <ParallaxLayer
                style={{
                    justifyContent: 'flex-end',
                    display: 'flex',
                    alignItems: 'center'
                }}
                    factor={2}
                    offset={3}>
                    <Education/>
            </ParallaxLayer>

            {/* Work Experience Section Header */}
            <ParallaxLayer
                style={SectionStyle}
                sticky={{ start: 5, end: 6}}>
                    <SectionCard
                        background='lavender'
                        title="Work Experience"/>
            </ParallaxLayer>

            {/* Work Experience Section Content */}
            <ParallaxLayer
                style={{
                    justifyContent: 'flex-end',
                    display: 'flex',
                    alignItems: 'center'
                }}
                factor={2}
                offset={5}>
                    <WorkExperience/>
            </ParallaxLayer>

            {/* Portfolio Section Header */}
            <ParallaxLayer
                style={SectionStyle}
                sticky={{ start: 7, end: 8}}>
                    <SectionCard
                        background='lavender'
                        title="Portfolio"/>
            </ParallaxLayer>

            {/* Portfolio Section Content */}
            <ParallaxLayer
                style={{
                    justifyContent: 'flex-end',
                    display: 'flex',
                    alignItems: 'center'
                }}
                factor={2}
                offset={7}>
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