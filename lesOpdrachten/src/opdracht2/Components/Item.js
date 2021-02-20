const Item = ({ name, img, number, present, onClick }) => {
    return (
        <li className="student-item" onClick={() => onClick(name)}>
            <img className="student-item__img" src={img} alt={name} />
            <h3>{ name }</h3>
            <p>{ number }</p>
            <span className={`student__badge ${ !present ? 'student__badge--absent': ''}`}>{ present ? 'Aanwezig' : 'Afwezig' }</span>
        </li>
    );
}


export default Item;