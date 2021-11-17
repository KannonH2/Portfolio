import React from 'react';
import { Button } from 'react-bootstrap';
import "../Styles/NavBar.css"
import { Link } from 'react-router-dom';

function NavBar(){

return (
    <div className="Buttons">
        <Link to="/">
            <Button className="btn btn-dark">Home </Button>
        </Link>
        <Link to="/About">
            <Button className="btn btn-dark">About Me </Button>
        </Link>
        <Button href="#footer" className="btn btn-dark">Contact </Button>
    </div>
)
}

export default NavBar;