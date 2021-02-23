import { useState, useEffect } from 'react';
import Item from './Item';

const Students = ({onStudentClick})=>{
    const [ students, setStudents ] = useState();
    const [ error, setError ] = useState();

    //
    console.log(process.env.REACT_APP_GITHUB_USERNAME);
    
    useEffect(() => {
        let isCurrent = true;

        // fetch students
        fetch('/data/students.json')
            .then((response) => response.json())
            // shorter isCurrent
            .then((data) => isCurrent && setStudents(data))
            // longer isCurrent
            .catch((e) => isCurrent && setError(String(e)));

       
        return () => isCurrent = false;
    }, []);

    const isLoading = !students && !error;
    if (isLoading) {
        return (
            <section>
                <p>Loading</p>
            </section>
        );
    }

    return(
        <ul className="sidebar">
        {students.map((student) =>(
            <Item 
            key={student.number}
            student={student}
            onClick={(student) => onStudentClick(student)}
            />

            //omgezet naar component
            // <li onClick={()=> onStudentClick(student)}>
            //     <button>{
            //     student.name} ({student.number})
            //     </button>
            // </li>
        ))}
    </ul>
    )
};

export default Students;