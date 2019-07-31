import React from 'react'
// import { Link } from 'react-router-dom'

const NavBar = () => (
    <section className="section parallax-container breadcrumbs-wrap" style={{backgroundColor:"rgb(53, 173, 121)"}}>
        {/* <div className="material-parallax parallax"><img src={window.location.origin + '/images/banner-SFL19.png'} /></div> */}
        <div className="parallax-content breadcrumbs-custom context-dark" style={{paddingTop: 50, paddingBottom:50}}>
            <div className="container">
                <h3 className="breadcrumbs-custom-title font-weight-bold">SUYATI FUTSAL 2019</h3>
                {/* <div className="row">
                    <div className="col-xl-1">
                        <Link className="button button-xs button-gray-outline" to="/">Home</Link>
                    </div>
                    <div className="col-xl-1">
                        <Link className="button button-xs button-gray-outline" to="/results">Results</Link>
                    </div>
                </div> */}

            </div>
        </div>
    </section>
)

export default NavBar