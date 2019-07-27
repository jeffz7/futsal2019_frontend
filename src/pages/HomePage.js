import React from 'react'
import Schedule from '../components/Schedule'
import PointTable from '../components/PointTable'
import TopPlayers from '../components/TopPlayers'



const HomePage = () => (
    <>
        <div className="col-xl-8">
            <Schedule />
        </div>
        <div className="col-xl-4">
            <article className="heading-component">
                <div className="heading-component-inner">
                    <h5 className="heading-component-title">Standings</h5>
                </div>
            </article>
            <PointTable />
            <TopPlayers />
        </div>
    </>
)


export default HomePage