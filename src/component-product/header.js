import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className='myHeader'>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand text-light" href="/#">Shopping Shoe |</a>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link text-light" href="/#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="/#">Product</a>
                            </li>                          
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
};
