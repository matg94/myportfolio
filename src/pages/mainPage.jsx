
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import HomePage from '../components/HomePage';
import Resume from '../components/Resume';
import SectionCard from '../components/SectionCard';

const SectionStyle = {
    justifyContent: 'flex-start',
    display: 'flex',
    alignItems: 'center'
}

function MainPage() {
  return (
    <div> 
        <Parallax pages={8}>

            <ParallaxLayer>
                <HomePage/>
            </ParallaxLayer>

            <ParallaxLayer
                style={SectionStyle}
                sticky={{ start: 1, end: 2}}>
                    <SectionCard
                        background='lavender'
                        title="About Me"/>
            </ParallaxLayer>

            <ParallaxLayer
                style={SectionStyle}
                sticky={{ start: 3, end: 4}}>
                    <SectionCard
                        background='lavender'
                        title="Education"/>
            </ParallaxLayer>

            <ParallaxLayer
                style={SectionStyle}
                sticky={{ start: 5, end: 6}}>
                    <SectionCard
                        background='lavender'
                        title="Work Experience"/>
            </ParallaxLayer>

            <ParallaxLayer
                style={SectionStyle}
                sticky={{ start: 7, end: 8}}>
                    <SectionCard
                        background='lavender'
                        title="Portfolio"/>
            </ParallaxLayer>

            <ParallaxLayer
                sticky={{ start: 1.5, end: 2.4}}
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
                            border: '5px',
                            borderStyle: 'solid',
                        }}
                        src={'https://boredhumans.b-cdn.net/faces2/317.jpg'}
                        alt='profile'/>
            </ParallaxLayer>

            <ParallaxLayer
                style={{
                    justifyContent: 'flex-end',
                    display: 'flex',
                    alignItems: 'center'
                }}
                factor={8}
                offset={1}>
                <Resume/>
            </ParallaxLayer>
        </Parallax>
    </div>
  );
}

export default MainPage;