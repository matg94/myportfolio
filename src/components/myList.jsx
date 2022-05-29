function MyList(props) {
    return (
        <ul className="description-list">
            {
                props.items.map(
                    item => <li className="description-item">{item}</li>
                )
            }
        </ul>
    );
  }
  
  export default MyList;