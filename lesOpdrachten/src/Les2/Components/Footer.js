const Footer = ({footer}) =>{
    const year = new Date().getFullYear();
    return(
        <footer>© ArteveldeHogeschool { year } • Niels Moens </footer>
    );
};

export default Footer;