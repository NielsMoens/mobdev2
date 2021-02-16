import students from '../students';
import Item from './Item';
const List = (onStudentClick) => {
    return (
        <main className="container">
            <ul className="student-list">
                {students.map((student) => (
                    <Item key={student.number}
                          onClick={onStudentClick}
                          {...student} />
                ))}
            </ul>
        </main>
    );
};
export default List;