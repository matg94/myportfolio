import MyList from "../components/myList";

function Education() {
    const descriptions = [
        "Grade Point Average: 3.34",
        "Worked in the Hyperloop competition team",
        "Blank award for excellence in finding a creative solution"
    ]
    return (
        <div className='resume'>
            <div className='section'>
                <div className='sub-section'>
                    <h1>New York University</h1>
                    <h2>Bachelor of Science - BS, Computer Science</h2>
                    <p>2014 - 2018</p>
                    <div className="separator"></div>
                    <MyList items={descriptions}/>
                </div>
            </div>
        </div>
    );
  }
  
  export default Education;