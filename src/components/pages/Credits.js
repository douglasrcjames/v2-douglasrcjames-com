import React, { Component } from 'react'

export default class Credits extends Component {
    render() {
        return (
            <div className="wrapper">
                <h1 className="no-margin">Credits</h1>
                <p className="no-margin">Taking a moment to appreciate those who helped make this happen!</p>
                <ul>
                    <li><b>Icons</b></li>
                    <ul>
                        <li><a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer">Font Awesome</a></li>
                        <li><a href="https://www.flaticon.com/authors/freepik" target="_blank" rel="noopener noreferrer">Freepik @ Flaticon.com</a></li>
                        <li><a href="https://www.flaticon.com/authors/skyclick" target="_blank" rel="noopener noreferrer">Skyclick @ Flaticon.com</a></li>
                        <li><a href="https://www.flaticon.com/authors/eucalyp" target="_blank" rel="noopener noreferrer">Eucalyp @ Flaticon.com</a></li>
                        <li><a href="https://www.flaticon.com/authors/iconixar" target="_blank" rel="noopener noreferrer">Iconixar @ Flaticon.com</a></li>
                    </ul>
                    <li><b>Mom &amp; Dad</b></li>
                </ul>
            </div>
        )
    }
}
