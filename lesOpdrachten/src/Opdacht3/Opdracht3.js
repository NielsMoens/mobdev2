import Intro from '../shared/Intro';
import { useState, useEffect } from 'react';
const Opdracht3 = () => {
    
    const [ students, setStudents ] = useState();
    const [ error, setError ] = useState();

    useEffect(() => {
        let isCurrent = true;

        fetch('/data/students.json')
            .then((response) => response.json())
            .then((data) => {
                if (isCurrent) {
                    setStudents(data);
                }
            })
            .catch((e) => {
                if (isCurrent) {
                    setError(String(e));
                }
            });
        return () => {
            isCurrent = false;
        };
    }, []);

    const isLoading = !students && !error;
    
    if(isLoading) {
        return (
            <section>
                <p>
                    loading 
                </p>
            </section>
        );
    }

    return (
        <section>
            <ul>
                {students.map((student) => (
                    <li > <button onClick={() => setActiveSt
                    }>{student.name} ({student.number})</button></li>
                ))}
            </ul>
            {
                
            }
        </section>
    );
};

export default Opdracht3;
