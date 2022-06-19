import SocialMedia from '../components/SocialMedia'
import GA4React from 'ga-4-react';

const ga4react = new GA4React(
    "G-3F30BFJXY4",
    { /* ga custom config, optional */ },
    [ /* additional code, optional */ ],
    5000 /* timeout, optional, defaults is 5000 */,
  );
    
ga4react.initialize().then((ga4) => {
    ga4.pageview('MainPage')
    ga4.gtag('event','pageview','HomePage') // or your custom gtag event
},(err) => {
    console.error(err)
})

function HomePage(props) {
    return (
        <div className='resume font-link' style={{
            backgroundColor: '#161719',
            width: '100%',
            height: '100%'
        }}>
            <div className='section-home'>
                <div className='sub-section'>
                    <h1 style={{fontSize: '3.25vw'}}>Mat Gautron</h1>
                    <h1 style={{fontSize: '1.7vw'}}>Fullstack Software Engineer</h1>
                </div>
                <div className='sub-section'>
                    <div className='social-media'>
                        <SocialMedia
                            url="https://www.linkedin.com/in/mat-gautron-177451b3/"
                            image='/linkedin_logo.png'
                            hoverImage='/linkedin_logo_hover.png'/>
                        <SocialMedia
                            url="https://github.com/matg94/"
                            image='/github_logo.png'
                            hoverImage='/github_logo_hover.png'/>
                        <SocialMedia
                            url="https://google.com"
                            image='/cv_icon.png'
                            hoverImage='/cv_icon_hover.png'/>
                    </div>
                </div>
                <div className='sub-section'>
                    <img onClick={props.arrowOnClick} className='arrow' src="/arrow_green.png"></img>
                </div>
            </div>
        </div>
    );
  }
  
  export default HomePage;