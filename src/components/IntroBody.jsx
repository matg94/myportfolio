import { ParallaxLayer } from '@react-spring/parallax'


function IntroBody() {
    return (
        <ParallaxLayer
            style={{
                justifyContent: 'flex-start',
                display: 'flex',
                alignItems: 'center'
            }}
            sticky={{ start: 0, end: 2 }}
            offset={0}>
                <div
                    className='card'
                    style={{
                        backgroundColor: 'lavender'
                    }}>
                    <h1>TEST</h1>
                </div>
        </ParallaxLayer>
    );
  }
  
  export default IntroBody;