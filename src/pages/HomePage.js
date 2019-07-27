import React, { useState, useEffect } from 'react'
import Schedule from '../components/Schedule'
import PointTable from '../components/PointTable'


const HomePage = () => (
    <>
        <div className="col-xl-8">
            <Schedule />
        </div>
        <div className="col-xl-4">
            <PointTable />
        </div>
    </>
)


export default HomePage