const Header = ({ children, onPrevClick, onNextClick }) => {
    return (
        <header>
            <h1>{children}</h1>
        </header>
    )
};

export default Header;