import { useState } from "react";

function SocialMedia(props) {
    const [hovered, setHover] = useState(false)
    return (
        <div className='image-wrap'
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => window.open(props.url)}>
            <img alt="test" src={hovered ? props.hoverImage : props.image}/>
        </div>
    )
  }
  
  export default SocialMedia;