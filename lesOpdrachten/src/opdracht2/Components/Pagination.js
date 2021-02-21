import Button from './Button';

const Pagination = ({currentPage , max, onClick}) => {
    let array = [];
    for(let i = 1; i<= max; i++){
        array.push(
            <li key={i} className={currentPage === i? "active" :""}>
                <Button onClick = {() => onClick(i)}>{i}</Button>
            </li>
        )
    }
    return (
        <nav className="pagination">
            <ul> 
                <Button disabled = {currentPage === 1}onClick={() => onClick(currentPage - 1)}>&lt;</Button>
                {array}
                <Button disabled = {currentPage === max} onClick={() => onClick(currentPage + 1)}>&gt;</Button>
            </ul>  
        </nav>
    )
};

export default Pagination;