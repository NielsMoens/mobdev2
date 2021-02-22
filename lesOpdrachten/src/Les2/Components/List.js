import Item from '../../opdracht2/Components/Item';
    const List = ({students, onStudentClick}) => {
    return (
        <ul className="student-list">
        {students.map((student) => (
            <Item key={student.number}
                  onClick={onStudentClick}
                  {...student} />
        ))}
    {console.log("students", students)}
    </ul>
    );
};
export default List;