import '../Styles/Home.css';


function Home() {

  return (
      <div className="App-home">
        <section className="main-home">
          <div className="main-text-home">
            <h1>Fernando Haring</h1>
            <p>Welcome to my Portfolio!</p>
            <br/>
            <p>Here i will be sharing some projects and works done by me</p>
            <br/>
          </div>
          <div className="hero-image-home">
            <div className="cube-home" id="react-home"/>
            <div className="cube-home" id="javascript-home"/>
            <div className="cube-home" id="html-home"/>
            <div className="cube-home" id="css-home"/>
          </div>
        </section>
        <section className="sub-section-home">
          <div className="square-home">
            <h2>Weather APP</h2>
            <p>APP to check actual weather on Any Country</p>
            <br/>
            <a className="links-home" href="http://weatherapp.fer-dev.com/" target="_blank" rel="noreferrer">Check it out!</a>
            <div className="sub-square-home" id="weather">
            </div>
          </div>
          <div className="square-home">
            <h2>API Weather Notices</h2>
            <p>a free to use API to see lots of news about climate changes</p>
            <br/>
            <a className="links-home" href="https://climatechangelive1.herokuapp.com/news" target="_blank" rel="noreferrer">Check it out!</a>
            <div className="sub-square-home" id="news">
            </div>
          </div>
          {/* <div className="square">
            <h2>VideoGames APP</h2>
            <p>A Videogame app to check all videogames u want, listed by name and rating. Also, you can create your own
              game</p>
            <br/>
            <a className="links-home" href="">Check it out!</a>
            <div className="sub-square" id="videogames">
            </div>
          </div> */}
        </section>
        <footer id="footer">
          <p>manaxtatu@gmail.com</p>
        </footer>
      </div>
  );
}

export default Home;
