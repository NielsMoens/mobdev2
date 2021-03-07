import './Opdracht3.css';
import { useState, useEffect } from 'react';
import Intro from '../shared/Intro';
import Header from './Components/Header';
import Detail from './Components/Detail';
import Students from './Components/Students';

const Opdracht3 = () => {
    const title = 'FONS MAKKER';
    const [activeStudent, setActiveStudent] =useState();
   
    return (
        <>
            <Header >
                { title }
                <Intro 
                    subtitle = "Checkt da derde vinneken "
                    description ='useState & useEffect'
                    />
            </Header>
            
            <section className="opdracht3">
               <Students onStudentClick = {(student) => setActiveStudent(student)}/>
                {
                activeStudent && <Detail student = {activeStudent}/>
                // das tzelfde 
                // activeStudent  ? <Detail{activeStudent}</div> : null
                }
                {console.log(activeStudent)};
            </section>
        </>
    );
};

export default Opdracht3;
