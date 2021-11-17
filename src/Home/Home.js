import '../Styles/Home.css';
import React, { useState } from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme, GlobalStyles} from '../Components/themes';

const StyledApp = styled.div`
  color: ${props => props.theme.fontColor};
`;


function Home() {

  const [theme, setTheme] = useState('light');

  const themeToggle = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <div className="App">
        <header>
          <StyledApp>
            <button onClick={() => themeToggle()} className="btn btn-dark">Change Theme</button>
          </StyledApp>
        </header>
        <section className="main">
          <div className="main-text">
            <h1>Fernando Haring</h1>
            <p>Welcome to my Portfolio!</p>
            <br/>
            <p>Here i will be sharing some projects and works done by me</p>
            <br/>
          </div>
          <div className="hero-image">
            <div className="cube" id="react"/>
            <div className="cube" id="javascript"/>
            <div className="cube" id="html"/>
            <div className="cube" id="css"/>
          </div>
        </section>
        <section className="sub-section">
          <div className="square">
            <h2>Weather APP</h2>
            <p>APP to check actual weather on Any Country</p>
            <br/>
            <a href="">Check it out!</a>
            <div className="sub-square" id="weather">
            </div>
          </div>
          <div className="square">
            <h2>VideoGames APP</h2>
            <p>A Videogame app to check all videogames u want, listed by name and rating. Also, you can create your own
              game</p>
            <br/>
            <a href="">Check it out!</a>
            <div className="sub-square" id="videogames">
            </div>
          </div>
          <div className="square">
            <h2>API Weather Notices</h2>
            <p>a free to use API to see lots of news about climate changes</p>
            <br/>
            <a href="https://climatechangelive1.herokuapp.com/news">Check it out!</a>
            <div className="sub-square" id="news">
            </div>
          </div>
        </section>
        <footer id="footer">
          <p>manaxtatu@gmail.com</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default Home;
