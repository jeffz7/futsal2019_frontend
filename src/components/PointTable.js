import React, { useState, useEffect } from 'react'

const PointTable = () => {
    const [points, setPoints] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const resultTeams = await fetch('/api/teams/top')
            const bodyTeams = await resultTeams.json()
            setPoints(bodyTeams.data)
        }
        fetchData()

    }, [])

    return (
        <div className="table-custom-responsive">
            <table className="table-custom table-standings table-classic">
                <thead>
                    <tr>
                        <th colSpan="2">Team Position</th>
                        <th>P</th>
                        <th>W</th>
                        <th>L</th>
                        {/* <th>GD</th> */}
                        <th>PTS</th>
                    </tr>
                </thead>
                <tbody>
                    {points.map((row, i) => {
                        return (
                            <tr key={i}>
                                <td><span>{i + 1}</span></td>
                                <td className="team-inline">
                                    <div className="team-figure"><img src={row.image} alt={row.name}
                                        width="31" height="41" />
                                    </div>
                                    <div className="team-title">
                                        <div className="team-name">{row.name}</div>
                                    </div>
                                </td>
                                <td>{row.played}</td>
                                <td>{row.win}</td>
                                <td>{row.loss}</td>
                                {/* <td>{row.gd}</td> */}
                                <td>{row.points}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default PointTable