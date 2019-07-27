import React, { useState, useEffect } from 'react'

const PointTable = () => {
    return (
        <>
            <article className="heading-component">
                <div className="heading-component-inner">
                    <h5 className="heading-component-title">Standings
            </h5><a className="button button-xs button-gray-outline" href="standings.html">Full Standings</a>
                </div>
            </article>
            <div className="table-custom-responsive">
                <table className="table-custom table-standings table-classic">
                    <thead>
                        <tr>
                            <th colspan="2">Team Position</th>
                            <th>W</th>
                            <th>L</th>
                            <th>PTS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span>1</span></td>
                            <td className="team-inline">
                                <div className="team-figure"><img src="images/team-sportland-31x41.png" alt=""
                                    width="31" height="41" />
                                </div>
                                <div className="team-title">
                                    <div className="team-name">Sportland</div>
                                    <div className="team-country">USA</div>
                                </div>
                            </td>
                            <td>153</td>
                            <td>30</td>
                            <td>186</td>
                        </tr>
                        <tr>
                            <td><span>2</span></td>
                            <td className="team-inline">
                                <div className="team-figure"><img src="images/team-dream-team-34x34.png" alt=""
                                    width="34" height="34" />
                                </div>
                                <div className="team-title">
                                    <div className="team-name">Dream team</div>
                                    <div className="team-country">Spain</div>
                                </div>
                            </td>
                            <td>120</td>
                            <td>30</td>
                            <td>186</td>
                        </tr>
                        <tr>
                            <td><span>3</span></td>
                            <td className="team-inline">
                                <div className="team-figure"><img src="images/team-real-madrid-28x37.png" alt=""
                                    width="28" height="37" />
                                </div>
                                <div className="team-title">
                                    <div className="team-name">Real Madrid</div>
                                    <div className="team-country">Spain</div>
                                </div>
                            </td>
                            <td>100</td>
                            <td>30</td>
                            <td>186</td>
                        </tr>
                        <tr>
                            <td><span>4</span></td>
                            <td className="team-inline">
                                <div className="team-figure"><img src="images/team-celta-vigo-35x39.png" alt=""
                                    width="35" height="39" />
                                </div>
                                <div className="team-title">
                                    <div className="team-name">Celta Vigo</div>
                                    <div className="team-country">Italy</div>
                                </div>
                            </td>
                            <td>98</td>
                            <td>30</td>
                            <td>186</td>
                        </tr>
                        <tr>
                            <td><span>5</span></td>
                            <td className="team-inline">
                                <div className="team-figure"><img src="images/team-barcelona-30x35.png" alt=""
                                    width="30" height="35" />
                                </div>
                                <div className="team-title">
                                    <div className="team-name">Barcelona</div>
                                    <div className="team-country">Spain</div>
                                </div>
                            </td>
                            <td>98</td>
                            <td>30</td>
                            <td>186</td>
                        </tr>
                        <tr>
                            <td><span>6</span></td>
                            <td className="team-inline">
                                <div className="team-figure"><img src="images/team-bavaria-fc-26x34.png" alt=""
                                    width="26" height="34" />
                                </div>
                                <div className="team-title">
                                    <div className="team-name">Bavaria FC</div>
                                    <div className="team-country">Germany</div>
                                </div>
                            </td>
                            <td>98</td>
                            <td>30</td>
                            <td>186</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default PointTable