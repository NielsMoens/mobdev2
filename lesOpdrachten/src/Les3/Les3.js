
import { useState, useEffect } from 'react';
import Intro from '../shared/Intro';
import StudentsOverview from './Components/StudentsOverview';

const Les3 = () => {
    // state
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

    return (
        <>
            <Intro
                subtitle="Les 3"
                description="useState en useEffect"
                />

            {
                error && <p className="error">{error}</p>
            }

            {
                isLoading && <p>Loading</p>
            }

            {
                students && <StudentsOverview students={students} />
            }
        </>
    );
};

export default Les3;
