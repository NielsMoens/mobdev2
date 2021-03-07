// Item component
const Item = ({ student, onClick }) => {
    return (
        <li>
            <button onClick={() => onClick(student)}>
                {student.name} ({student.number})
            </button>
        </li>
    );
}
export default Item;