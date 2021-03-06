import '../Styles/About.css';

function About() {

    
    return (
            <div className="App">
                <section className="main">
                    <div className="main-text">
                        <h1>Fernando Haring</h1>
                        <h4>A little info about me</h4>
                        <br />
                        <p>I am a Full Stack Developer and Lineage 2 Server (L2J) manager. Born and raised in Argentina</p>
                        <br />
                        <p>I worked for 10 years as a tattoo artist, but I had to stop when the pandemic started.
                            I had previous experience working with computers  so I turned to programming which is
                            something that always interested me. I took several courses, until I finished the
                            <a href="http://www.soyHenry.com" rel="noreferrer" target="_blank" className="henrylink"> SoyHenry</a> bootcamp,
                            which gave me the necessary tools to dedicate myself to what I like, programming !!</p>
                        <br />
                    </div>
                    <div className="hero-image">
                        <div className="cube" id="react" />
                        <div className="cube" id="javascript" />
                        <div className="cube" id="html" />
                        <div className="cube" id="css" />
                    </div>
                </section>
                <section className="sub-section">
                    <div className="square" id="backgroundcv">
                        <div className="square-tittle">
                            <h2>My Curriculum</h2>
                            <p></p>
                        </div>
                        <br />
                        <div className="sub-section-square">
                            <div className="sub-square">
                                <p className="versionpdf">English Version</p>
                                <a href="https://pdfhost.io/v/Bc4lXCwjZ_CV_Fer" target="_blank" rel="noreferrer" id="cv"> </a>
                            </div>
                            <div className="sub-square">
                                <p className="versionpdf">Spanish Version</p>
                                <a href="https://pdfhost.io/v/CSkxUf6e4_CV_Fer" target="_blank" rel="noreferrer" id="cv"> </a>
                            </div>
                        </div>
                    </div>
                    <div className="square">
                        <div className="square-git">
                            <h2>GitHub</h2>
                            <p>Check my projects on GitHub</p>
                        </div>
                        <br />
                        <div className="sub-section-square-git">
                            <div className="sub-square-git">
                                <a href="https://github.com/KannonH2" target="blank" classname="imagegit" id="git"> </a>
                            </div>
                        </div>
                    </div>
                    <div className="square">
                        <div className="square-linkedin">
                            <h2>LinkedIn</h2>
                            <p>Check my LinkedIn profile</p>
                        </div>
                        <br />
                        <div className="sub-section-square-linkedin">
                            <div className="sub-square-linkedin">
                                <a href="https://www.linkedin.com/in/fernando-haring-dev/" target="blank" id="linkedin"> </a>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="footer">
                    <p>manaxtatu@gmail.com</p>
                </footer>
            </div>
    )
}

export default About
