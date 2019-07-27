import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => (
    <section className="section parallax-container breadcrumbs-wrap">
        <div className="material-parallax parallax"><img src="images/bg-breadcrumbs-1-1920x726.jpg" alt="images/bg-breadcrumbs-1-1920x726.jpg" /></div>
        <div className="parallax-content breadcrumbs-custom context-dark">
            <div className="container">
                <h3 className="breadcrumbs-custom-title">FUTSAL 2019</h3>
                <div className="row">
                    <div className="col-xl-1">
                        <Link className="button button-xs button-gray-outline" to="/">Home</Link>
                    </div>
                    <div className="col-xl-1">
                        <Link className="button button-xs button-gray-outline" to="/results">Results</Link>
                    </div>
                </div>

            </div>
        </div>
    </section>
)

export default NavBar