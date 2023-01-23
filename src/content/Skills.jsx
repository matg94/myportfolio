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
                        "Typesript"
                    ]}/>
                </div>
                <div className='sub-section'>
                    <h1>Web Frameworks / Libraries</h1>
                    <div className="separator"/>
                    <MyList items={[
                        "Spring Boot",
                        "React",
                        "Flask",
                        "Gin",
                    ]}/>
                </div>
                <div className='sub-section'>
                    <h1>Technologies</h1>
                    <div className="separator"/>
                    <MyList items={[
                        "PostgresQL, DynamoDB",
                        "AWS: ECS, EKS, S3, SQS/SNS",
                        "Linux", 
                        "Prometheus & Grafana",
                        "New Relic",
                    ]}/>
                </div>
                <div className='sub-section'>
                    <h1>Dev Ops</h1>
                    <div className="separator"/>
                    <MyList items={[
                        "Kubernetes",
                        "Gitlab & Github CI/CD",
                        "Docker",
                        "Terraform",
                        "Gradle & Maven"
                    ]}/>
                </div>
            </div>
        </div>
    );
  }
  
  export default Skills;