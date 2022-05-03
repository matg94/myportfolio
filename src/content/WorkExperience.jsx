function WorkExperience() {
    return (
        <div className='resume'
            style={{
                backgroundColor: 'pink',
                }}>
                <div className='section'>
                    <div className="sub-section">
                        <h1>Ocado Technology</h1>
                        <h3>Software Engineer (E2)</h3>
                        <p>Nov 2020 - present</p>
                        <div className="separator"></div>
                        <h1></h1>
                        <p>Full stack engineer, designed, developed, deployed, and maintained several REST web applications in a microservices setting</p>
                        <p>Worked using Spring Boot, React, and Angular for development</p>
                        <p>Worked using PostgresQL, jOOQ, and JPA/Hibernate for data persistence</p>
                        <p>Implemented devops solutions using Gitlab CI/CD, Kubernetes, and Bash</p>
                        <p>Applications were hosted on AWS EKS and ECS, used RDS for postgresQl database</p>
                    </div>
                    <div className="sub-section">
                        <h1>Medspace AI</h1>
                        <h3>Software Engineer (intern)</h3>
                        <p>Dec 2017 - Apr 2018</p>
                        <div className="separator"></div>
                        <h1></h1>
                        <p>Research, design, and implement backend system for storage of medical data</p>
                        <p>Wrote code to generate appropriate and useable placeholder data</p>
                        <p>Worked alongside ST Engineering’s Innosparks Open Lab to create prototypes for demonstration purposes</p>
                    </div>
                    <div className="sub-section">
                        <h1>Surge</h1>
                        <h3>Software Engineer (intern)</h3>
                        <p>May 2017 - Dec 2017</p>
                        <div className="separator"></div>
                        <h1></h1>
                        <p>Worked on creating the information display cards and interaction with the user through the chatbot system</p>
                        <p>Startup acquired by Botbot AI</p>
                    </div>
                </div>                    
        </div>
    );
  }
  
  export default WorkExperience;