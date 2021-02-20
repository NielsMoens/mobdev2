import Button from './Button';
const Header = ({ children, onPrevClick, onNextClick }) => {
    return (
        <header>
            <Button onClick={onPrevClick}>Prev</Button>
            <h1>{children}</h1>
            <Button onClick={onNextClick}>Next</Button>
        </header>
    )
};

export default Header;