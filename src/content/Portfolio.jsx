import MyList from "../components/myList";


const piClusterDescription = [
    "Created a kubernetes cluster running on two nodes",
    "Used as a home server for experimentations and education",
    "Ran HomeAssistant & Pihole",
    "Used as a staging server for personal work"
]

const ezcryptDescription = [
    "Created a CLI & Library for easy encryption and decryption",
    "Uses RSA encryption to encrypt / decrypt files, and strings",
    "Written as a library to be importable and used in other projects",
    "Allows for key generation & management",
    "Written to allow piping to follow linux style commands style"
]

const shortenerDescription = [
    "URL Shortener written in Golang using Gin",
    "Uses REDIS as a database",
    "Frontend written in React",
    "Config stored & downloaded from S3"
]

function Portfolio() {
    return (
        <div className='resume'>
            <div className='section'>
                <div className='sub-section'>
                        <h1>Raspberry Pi Kubernetes Cluster</h1>
                        <div className="separator"/>
                        <MyList items={piClusterDescription}/>
                </div>
                <div className='sub-section'>
                        <h1>EZcrypt: Golang encryption CLI</h1>
                        <div className="separator"/>
                        <MyList items={ezcryptDescription}/>
                </div>
                <div className='sub-section'>
                        <h1>URL Shortener Webapp</h1>
                        <div className="separator"/>
                        <MyList items={shortenerDescription}/>
                </div>
            </div>
            
        </div>
    );
  }
  
  export default Portfolio;