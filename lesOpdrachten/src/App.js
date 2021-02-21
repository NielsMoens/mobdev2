import Opdracht1 from './opdracht1/Components/Opdracht-1';
import Opdracht2 from './opdracht2/Components/Opdracht-2';
import './index.css';
import {useEffect, useState} from 'react';

const pages = [ {
    key: 'Opdracht 1',
    title: 'Opdracht 1',
},
{
    key: 'Opdracht 2',
    title: 'Opdracht 2',
}];

const KEY_INDEX = 'current _page';

const App = () => {   
    // const [index, setIndex] = useState(pages.length -1);
    const [index, setIndex] = useState(
        localStorage.getItem(KEY_INDEX) !== null ? 
        parseInt(localStorage.getItem(KEY_INDEX)) : 
        0
    );

    const handlePageClick = (index) => {
        setIndex(index);
    };

    //1. De pagina laadt (onze component laadt)
    //2. Indien de pagina wijzigt
    // Een hook die je kan gebruiken met als eerste arg een fucntie en als tweede een araay die leeg is,
    // gaat iets uit voeren wanneer de compenent opstart. 
    useEffect(()=> {
        console.log('change page');
        document.title = pages[index].title;
        localStorage.setItem(KEY_INDEX, `${index}`)
    },[index]);

    const getPage = (index) => {
        const key = pages[index].key;
        switch (key) {
            case 'Opdracht 1':
                return <Opdracht1/>;
            case 'Opdracht 2':
                return <Opdracht2/>;
            // case 'Opdracht 3':
            //     return <Opdracht3/>;
            // case 'Opdracht 4':
            //     return <Opdracht4/>;
            // case 'Opdracht 5':
            //     return <Opdracht5/>;
            default:
                return null;
        }
    };

    return(
        <div className="container">
            <ul className="navbar">
            {
                pages.map((page, idx) => (
                    <li key={pages.key} className={index === idx ? 'active': ''}>
                        <button onClick={() => handlePageClick(idx)}>
                           {page.title}
                        </button>
                    </li>
                )) 
            }
            </ul>
            {/* get the right index key from getPage to show the correct page */}
           {getPage(index)}
           <button onClick={() => setIndex(0)}> Back to first lesson </button>
       </div>
    );
  };

export default App;