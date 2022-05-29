import SocialMedia from '../components/SocialMedia'

function HomePage() {
    return (
        <div className='resume' style={{
            backgroundColor: '#161719',
            width: '100%',
            height: '100%'
        }}>
            <div className='section'>
                <div className='sub-section'>
                    <h1 style={{fontSize: '9rem'}}>Mat Gautron</h1>
                </div>
                <div className='sub-section'>
                    <h1 style={{fontSize: '3.5rem'}}>Fullstack Software Engineer</h1>
                </div>
                <div className='sub-section'>
                    <div className='social-media'>
                        <SocialMedia
                            image='/linkedin_logo.png'
                            hoverImage='/linkedin_logo_hover.png'/>
                        <SocialMedia
                            image='/github_logo.png'
                            hoverImage='/github_logo_hover.png'/>
                        <SocialMedia
                            image='/pdf_icon.png'
                            hoverImage='/pdf_icon_hover.png'/>
                    </div>
                </div>
                <div className='sub-section'>
                    <img className='arrow' src="/arrow_green.png"></img>
                </div>
            </div>
        </div>
    );
  }
  
  export default HomePage;