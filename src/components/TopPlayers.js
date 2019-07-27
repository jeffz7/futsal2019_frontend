import React, { useState, useEffect } from 'react'

const TopPlayers = () => {

    const [points, setPoints] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('/api/players/top')
            const body = await result.json()
            if(body.code === 200){
                setPoints(body.data)
            }
        }
        fetchData()

    }, [])

    return (
        <div className="table-custom-responsive">
            <table className="table-custom table-standings table-classNameic">
                <thead>
                    <tr>
                        <th colSpan="2">Top Players</th>
                        <th>GOALS</th>
                        <th>ASSISTS</th>
                    </tr>
                </thead>
                <tbody>
                    {points.map((row, key) => {
                        return (
                            <tr key={key}>
                                <td><span>{key + 1}</span></td>
                                <td className="team-inline">
                                    <div className="team-figure"><img src={row.image} alt={row.name}
                                        width="31" height="41" />
                                    </div>
                                    <div className="team-title">
                                        <div className="team-name">{row.name}</div>
                                        <div className="team-country"></div>
                                    </div>
                                </td>
                                <td>{row.goal_scored}</td>
                                <td>{row.goal_assisted}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default TopPlayers
