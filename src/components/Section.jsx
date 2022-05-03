import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import SectionCard from "./SectionCard";
import AboutMe from "../content/AboutMe";

const SectionStyle = {
    justifyContent: 'flex-start',
    display: 'flex',
    alignItems: 'center'
}

function Section(props) {
    return (
        <>
            <ParallaxLayer
                style={SectionStyle}
                sticky={{ start: 1, end: 2}}>
                    <SectionCard
                        background='lavender'
                        title="TEST DIV"/>
            </ParallaxLayer>
            <ParallaxLayer
                style={{
                    justifyContent: 'flex-end',
                    display: 'flex',
                    alignItems: 'center'
                }}
                factor={2}
                offset={3}>
                <AboutMe/>
            </ParallaxLayer>
        </>
    );
  }
  
  export default Section;