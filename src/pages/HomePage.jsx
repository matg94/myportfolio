import { ParallaxLayer } from '@react-spring/parallax'


function HomePage() {
    return (
        <div className='resume' style={{
            backgroundColor: '#161719',
            width: '100%',
            height: '100%'
        }}>
            <div className='sub-section'>
                <h1 style={{
                    textAlign: 'center',
                    fontSize: '100px',
                    color: '#8AB4F8'
                }}>Mathieu Gautron</h1>
                <h1 style={{
                    textAlign: 'center',
                    fontSize: '50px',
                    color: '#8AB4F8'
                }}>Fullstack Engineer</h1>
            </div>
        </div>
    );
  }
  
  export default HomePage;