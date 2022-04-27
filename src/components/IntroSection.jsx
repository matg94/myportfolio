import { ParallaxLayer } from '@react-spring/parallax'


function IntroSection() {
    return (
        <ParallaxLayer
            style={{
                justifyContent: 'flex-end',
                display: 'flex',
                alignItems: 'center'
            }}
            offset={0}
            factor={3}
            speed={1}>
                <div className='card'
                    style={{
                        backgroundColor: 'pink'
                    }}>
                    <h1>TEST 2</h1>
                </div>
        </ParallaxLayer>
    );
  }
  
  export default IntroSection;