
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import IntroBody from '../components/IntroBody';
import IntroSection from '../components/IntroSection';
function MainPage() {
  return (
    <div> 
        <Parallax pages={5}>
        <ParallaxLayer
            style={{
                justifyContent: 'flex-start',
                display: 'flex',
                alignItems: 'center'
            }}
            sticky={{ start: 0, end: 2}}
            speed={1}
            offset={0}>
                <div
                    className='card'
                    style={{
                        backgroundColor: 'lavender'
                    }}>
                    <h1>TEST</h1>
                </div>
        </ParallaxLayer>
            <IntroSection/>  
        </Parallax>

    </div>
  );
}

export default MainPage;