import Footer from './opdracht1/Components/Footer';
import List from './opdracht1/Components/List';
import Header from './opdracht1/Components/Header';
import Intro from './opdracht1/Components/Intro';

const App = () => {   
    const title = 'FONS MAKKER';
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
                <Intro title={subtitle}/>
       
            </Header>
            <main className="container">
                <List onStudentClick={handleStudentClick} />
            </main>
            <Footer />
        </>
        
    );
  };

export default App;