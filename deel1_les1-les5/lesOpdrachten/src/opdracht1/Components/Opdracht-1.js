import Footer from './Footer';
import List from './List';
import Header from './Header';
import Intro from '../../shared/Intro';

const Opdracht1 = () => {   
    const title = 'FONS MAKKER ';
    const subtitle = 'Checkt Da Vinneke'

    const handlePrevClick = () => {
        window.alert("prev");
    }
    
    const handleNextClick = () => {
        window.alert("next");
    }
    const handleStudentClick = (name) => {
        window.alert(name);
    };

    return(
        <>
            <Header onPrevClick={handlePrevClick} onNextClick={handleNextClick}>
                { title }
                <Intro subtitle={subtitle}/>
       
            </Header>
            <main className="container">
                <List onStudentClick={handleStudentClick} />
            </main>
            <Footer />
        </>
        
    );
  };

export default Opdracht1;