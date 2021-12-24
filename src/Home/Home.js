import '../Styles/Home.css';
import weather from "../images/weather.png";
import weatherApi from "../images/news-app.png";
import games from "../images/games.png";
import flight from "../images/flights.png";


function Home() {

    return (
        <div className="App-home">
            <section className="main-home">
                <div className="main-text-home">
                    <h1 className="name-home">Fernando Haring</h1>
                    <h2>Welcome to my Portfolio!</h2>
                    <br/>
                    <p>Here i will be sharing some projects i've done</p>
                    <br/>
                </div>
                <div className="hero-image-home">
                    <div className="cube-home" id="react-home"/>
                    <div className="cube-home" id="javascript-home"/>
                    <div className="cube-home" id="html-home"/>
                    <div className="cube-home" id="css-home"/>
                </div>
            </section>
            <div className="main-section">
                <section className="sub-section-home">
                    <div className="square-home">
                        <h2 className="card-name">Dev-Sky</h2>
                        <p>Web page to search and buy flight tickets,
                            maded with react, nodejs, SASS and Firebase</p>
                        <br/>
                        <a className="links-home" href="https://dev-sky.vercel.app/" target="_blank" rel="noreferrer">Check
                            it out!</a>
                        <img src={flight} alt="" className="sub-square-home"/>

                    </div>
                </section>
                <section className="sub-section-home">
                    <div className="square-home">
                        <h2 className="card-name">Weather APP</h2>
                        <p>APP to check actual weather on Any Country</p>
                        <br/>
                        <a className="links-home" href="https://weatherapp.fer-dev.com/" target="_blank"
                           rel="noreferrer">Check
                            it out!</a>
                        <img src={weather} alt="" className="sub-square-home"/>

                    </div>
                </section>
                <section className="sub-section-home">
                    <div className="square-home">
                        <h2 className="card-name">API Weather Notices</h2>
                        <p>a free to use API to see lots of news about climate changes</p>
                        <br/>
                        <a className="links-home" href="https://climatechangelive1.herokuapp.com/news" target="_blank"
                           rel="noreferrer">Check it out!</a>
                        <img src={weatherApi} alt="" className="sub-square-home"/>
                    </div>
                </section>
                <section className="sub-section-home">
                    <div className="square-home">
                        <h2 className="card-name">VideoGames APP</h2>
                        <p>A Videogame app to check all videogames you want, listed by name and rating. Also, you can
                            create
                            your own
                            game</p>
                        <br/>
                        <a className="links-home" href="https://videogames-project-six.vercel.app/" target="_blank"
                           rel="noreferrer">Check it out!</a>
                        <img src={games} alt="" className="sub-square-home"/>
                    </div>
                </section>
            </div>
            <footer className="footer">
                    <p>manaxtatu@gmail.com</p>
            </footer>
        </div>
    );
}

export default Home;
