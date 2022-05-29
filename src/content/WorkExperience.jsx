import MyList from "../components/myList";

function WorkExperience() {
    return (
        <div className='resume'>
                <div className='section'>
                    <div className="sub-section">
                        <h1>Ocado Technology</h1>
                        <h2>Software Engineer (E2)</h2>
                        <p>Nov 2020 - present</p>
                        <div className="separator"></div>
                        <h1></h1>
                        <MyList items={[
                            "Full stack engineer, designed, developed, deployed, and maintained several REST web applications in a microservices architecture",
                            "Worked using Spring Boot, React, and Angular for development",
                            "Worked using PostgresQL, jOOQ, and JPA/Hibernate for data persistence",
                            "Implemented devops solutions using Gitlab CI/CD, Kubernetes, and Bash",
                            "Applications were hosted on AWS EKS and ECS, used RDS for postgresQl database"
                        ]}/>
                    </div>
                    <div className="sub-section">
                        <h1>Medspace AI</h1>
                        <h2>Software Engineer (intern)</h2>
                        <p>Dec 2017 - Apr 2018</p>
                        <div className="separator"></div>
                        <h1></h1>
                        <MyList items={[
                            "Research, design, and implement backend system for storage of medical data",
                            "Created software to generate appropriate and useable placeholder data",
                            "Worked alongside ST Engineering’s Innosparks Open Lab to create prototypes for demonstration purposes",
                        ]}/>
                    </div>
                    <div className="sub-section"> 
                        <h1>Surge</h1>
                        <h2>Software Engineer (intern)</h2>
                        <p>May 2017 - Dec 2017</p>
                        <div className="separator"></div>
                        <h1></h1>
                        <MyList items={[
                            "Worked on creating the information display cards and interaction with the user through the chatbot system",
                            "Startup acquired by Botbot AI",
                        ]}/>
                    </div>
                </div>                    
        </div>
    );
  }
  
  export default WorkExperience;