import Opdracht1 from './opdracht1/Components/Opdracht-1';
import Opdracht2 from './opdracht2/Components/Opdracht-2';
import './index.css';
import {useState} from 'react';


const pages = [ {
    key: 'Opdracht 1',
    title: 'Opdracht 1',
},
{
    key: 'Opdracht 2',
    title: 'Opdracht 2',
}];

const App = () => {   

    const [index, setIndex] = useState(0);

    const handlePageClick = (index) => {
        setIndex(index);
    };

    const getPage = (index) => {
        const key = pages[index].key;
        switch (key) {
            case 'Opdracht 1':
                return <Opdracht1/>;
            case 'Opdracht 2':
                return <Opdracht2/>;
            default:
                return null;
        }
    };

    return(
        <div className="container">
            <ul className="navbar">
            {
                pages.map((page, idx) => (
                    <li className={index === idx? 'active': ''}>
                        <button onClick={() => handlePageClick(idx)}>
                           {page.title}
                        </button>
                    </li>
                )) 
            }
            </ul>
            {/* get the right index key from getPage to show the correct page */}
           {getPage(index)}
       </div>
    );
  };

export default App;