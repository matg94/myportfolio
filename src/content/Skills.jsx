import MyList from "../components/myList";

function Skills() {
    return (
        <div className='resume'>
            <div className='section'>
                <div className='sub-section'>
                    <h1>Programming Languages</h1>
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
                    <h1>Web Frameworks / Libraries</h1>
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
                    <h1>Technologies</h1>
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