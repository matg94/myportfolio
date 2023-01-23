import MyList from "../components/myList";
import SocialMedia from "../components/SocialMedia";


const piClusterDescription = [
    "Created a kubernetes cluster running on three nodes, one computer and two Raspberry Pis",
    "Used as a home server for experimentations and education",
    "Used as a staging server for personal work",
]

const ezcryptDescription = [
    "Created a CLI & Library for easy encryption and decryption",
    "Uses RSA encryption to encrypt / decrypt files and strings",
    "Written as a library to be importable and used in other projects",
    "Allows for key generation & management",
    "Written to allow piping to follow linux style commands style"
]

const godirbDescription = [
    "Finds open paths on a webapp",
    "YAML / profile based config",
    "Can send thousands of requests per second",
]

function Portfolio() {
    return (
        <div className='resume'>
            <div className='section'>
                <div className='sub-section'>
                    <SocialMedia
                        url="https://github.com/matg94/"
                        image='/github_logo.png'
                        hoverImage='/github_logo_hover.png'
                    />
                    <h1>Home Kubernetes Cluster</h1>
                    <div className="separator"/>
                    <MyList items={piClusterDescription}/>
                </div>
                <SocialMedia
                            url="https://www.linkedin.com/in/mat-gautron-177451b3/"
                            image='/linkedin_logo.png'
                            hoverImage='/linkedin_logo_hover.png'
                        />
                <div className='sub-section'>
                        <h1>EZcrypt: Golang encryption CLI</h1>
                        <div className="separator"/>
                        <MyList items={ezcryptDescription}/>
                </div>
                <div className='sub-section'>
                        <h1>Godirb: dirb clone written in Go</h1>
                        <div className="separator"/>
                        <MyList items={godirbDescription}/>
                </div>
            </div>
            
        </div>
    );
  }
  
  export default Portfolio;