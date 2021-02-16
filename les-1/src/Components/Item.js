const Item = ({ number, name, img, present, onClick }) => {
     return(
        <li className="student-item" onClick={() => onClick(name)}>
            <img className="student-item__img" src={img} alt={name} />
            <h3>{ name }</h3>
            <p>{ number }</p>
            <p>{ present ? 'Aanwezig' : 'Afwezig' }</p>
        </li>
    );
};

export default Item;