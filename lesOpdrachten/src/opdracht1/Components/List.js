import {useState} from 'react';
import students from '../../shared/students';
import Item from './Item';
import Button from './Button';
    const List = ({onStudentClick}) => {

    //  state
    //  REACT hook
    const [showPresent, setShowPresent] = useState(false);
    console.log(showPresent);
    
    const filteredStudents = showPresent ? students.filter((students)=> students.present) : students
    
    // student count
    const count = filteredStudents.length;

    const handleToggleClick = () =>{
       setShowPresent(!showPresent);
    }

    return (
        <main className="container">
            <div className="studentAtt">
                <p>Totale Carps {count} </p>
                <Button  onClick={handleToggleClick}>ToggleAttendance</Button>
            {
                showPresent ? 
                <h2> Aanwezige studenten </h2> : <h2> Alle studenten </h2>
            }
            </div>
            <ul className="student-list">
                {filteredStudents.map((student) => (
                    <Item key={student.number}
                          onClick={onStudentClick}
                          {...student} />
                ))}
            </ul>
        </main>
    );
};
export default List;