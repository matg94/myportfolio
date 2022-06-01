import SocialMedia from '../components/SocialMedia'

function HomePage(props) {
    return (
        <div className='resume font-link' style={{
            backgroundColor: '#161719',
            width: '100%',
            height: '100%'
        }}>
            <div className='section'>
                <div className='sub-section'>
                    <h1 style={{fontSize: '3.25vw'}}>Mat Gautron</h1>
                </div>
                <div className='sub-section'>
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
                            image='/pdf_icon.png'
                            hoverImage='/pdf_icon_hover.png'/>
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