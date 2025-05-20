import React from 'react';
import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom';

export default function Navbar(props) {
    return(
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    {/* <Link className="nav-link" to="/">Home</Link> */}
                </li>
                {/* <li className="nav-item">
                    <Link className="nav-link" to="/about">{props.aboutText}</Link>
                </li> */}
                </ul>
                <form className="d-flex">
                <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light' ? 'Dark' : 'Light'} mode</label>
                </div>
                </form>
            </div>
            </div>
        </nav>
    )
}

// Proptypes are used to define the type of the props that are passed to the component
// If the type of the prop is not as expected, then it will throw an error
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired

}

// Default Props are used to set the default value of the props
Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
}