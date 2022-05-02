function SectionCard(props) {
    return (
        <div className='card'
            style={{backgroundColor: props.background}}>
            <h1>{props.title}</h1>
        </div>
    );
  }
  
  export default SectionCard;