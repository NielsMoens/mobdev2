import {useState} from 'react';
import Footer from './Components/Footer';
import List from '../Les2/Components/List';
import Header from './Components/Header';
import Intro from '../shared/Intro';
import students from '../shared/students';
import Pagination from '../Les2/Components/Pagination';

const Opdracht2 = () => {   
    const title = 'FONS MAKKER';
    
    const MAX_PER_PAGE = 4;
    const [page, setPage] = useState(1);
    
    const handleStudentClick = (name) => {
        window.alert(name);
    };

    const handlePageClick = (page) => {
        setPage(page)
    };

    const maxPages = Math.ceil(students.length/MAX_PER_PAGE);
    const pagedStudents = students.slice((page - 1 ) * MAX_PER_PAGE, page * MAX_PER_PAGE);

    return(
        <>
            <Header >
                { title }
                <Intro 
                    subtitle = "Checkt da tweede vinneken "
                    description = "useState en useEffect"
                />
            </Header>
            <main className="container">
                <List 
                    students={pagedStudents}
                    onStudentClick={handleStudentClick} 
                />
            {console.log(pagedStudents)}            
            </main>
            <Pagination 
                currentPage = {page}
                max = {maxPages}
                onClick= {handlePageClick}
            />
            <Footer />
        </>
        
    );
  };

export default Opdracht2;