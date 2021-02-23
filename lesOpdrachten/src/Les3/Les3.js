import './Les3.css';
import { useState} from 'react';
import Intro from '../shared/Intro';
import Detail from './Components/Detail';
import Students from './Components/Students';
import useGithubData from '../hooks/useGithubData';

const Les3 = () => {
    const [activeStudent, setActiveStudent] =useState();
    const {data, error, isLoading} = useGithubData("yungpanda");

    return (
        <>
            <Intro 
                subtitle = "Les 3"
                description ='useEffect  advanced'
            />
            <section>
                <h2>Lector</h2>
                {
                    data && <p>{data.name}</p>
                }
            </section>
            <h2>Studenten</h2>
            <section className="opdracht3">
               <Students onStudentClick = {(student) => setActiveStudent(student)}/>
                {
                activeStudent && <Detail student = {activeStudent}/>
                // das tzelfde 
                // activeStudent  ? <Detail{activeStudent}</div> : null
                }
                
            </section>
        </>
    );
};

export default Les3;
