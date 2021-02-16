const Footer = ({footer}) =>{
    const year = new Date().getFullYear();
    return(
        <footer>© ArteveldeHogeschool { year } • Michael Vanderpoorten</footer>
    );
};

export default Footer;