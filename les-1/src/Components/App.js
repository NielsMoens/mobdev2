import Footer from './Footer';
import List from './List';
import Header from './Header';
import Intro from './Intro';
import Info from './Info';


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
            <Header onPrevClick={handlePrevClick}
                    onNextClick={handleNextClick}>
                { title }
            <Intro title={subtitle}/>
            <Info/>
            </Header>
            <main className="container">
                <List onStudentClick={handleStudentClick} />
            </main>
            <Footer />
        </>
        
    );
  };

export default App;