import MyList from "../components/myList";

function Skills() {
    return (
        <div className='resume'>
            <div className='section'>
                <h1>Skills</h1>
                <div className='sub-section'>
                    <h2>Programming Languages</h2>
                    <div className="separator"/>
                    <MyList items={[
                        "Java",
                        "Python",
                        "Golang",
                        "Javascript",
                        "Typesript",
                        "C#"
                    ]}/>
                </div>
                <div className='sub-section'>
                    <h2>Web Frameworks / Libraries</h2>
                    <div className="separator"/>
                    <MyList items={[
                        "Spring",
                        "React",
                        "Angular",
                        "Flask",
                        "Gin",
                        "GRPC",
                        "Click"
                    ]}/>
                </div>
                <div className='sub-section'>
                    <h2>Technologies</h2>
                    <div className="separator"/>
                    <MyList items={[
                        "Kubernetes",
                        "Gitlab & Github",
                        "PostgresQL",
                        "AWS",
                        "Linux",
                        "Bash"
                    ]}/>
                </div>
            </div>
        </div>
    );
  }
  
  export default Skills;