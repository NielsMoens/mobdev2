const Intro = ({subtitle, description}) =>{
    return(
        <section className="intro">
            <h2> {subtitle} </h2>
            <p>{description}</p>
        </section>
    );
};

export default Intro;