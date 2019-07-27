import React, { useState, useEffect } from 'react'

const Results = () => {

    const [
        state,
        setState
    ] = useState({ games: [], teams: {} })

    useEffect(() => {
        const fetchData = async () => {
            const resultTeams = await fetch('/api/teams')
            const bodyTeams = await resultTeams.json()

            const teamsArray = bodyTeams.data
            let teams = { TeamA: "TeamA", TeamB: "TeamB" }
            if (teamsArray && teamsArray.length > 0) {
                teamsArray.forEach(team => {
                    teams[team.id] = team
                })
            }
            const resultGames = await fetch('/api/games')
            const bodyGames = await resultGames.json()
            let games = bodyGames.data.reverse().filter(g => g.status === "played")
            setState({ games: games, teams: teams })
        }
        fetchData()

    }, [])

    let team1Name = "TeamA"
    let team2Name = "TeamB"
    let team1Image = "https://images.onefootball.com/icons/leagueColoredCompetition/128/10.png"
    let team2Image = "https://images.onefootball.com/icons/leagueColoredCompetition/128/10.png"

    return (
        <>
            <article className="heading-component">
                <div className="heading-component-inner">
                    <h5 className="heading-component-title">Latest games results
                          </h5>

                </div>
            </article>
            <div className="row row-30">
                {state.games.map((row, i) => {

                    let team1Id = row.teams[0] || "TeamA"
                    let team2Id = row.teams[1] || "TeamB"

                    if (team1Id) {
                        team1Name = state.teams[team1Id].name
                        team1Image = state.teams[team1Id].image
                    }
                    if (team2Id) {
                        team2Name = state.teams[team2Id].name
                        team2Image = state.teams[team2Id].image
                    }

                    return <div className="col-md-6" key={i}>
                        <article className="game-result game-result-classic">
                            <div className="game-result-main">
                                <div className="game-result-team game-result-team-first">
                                    <figure className="game-result-team-figure game-result-team-figure-big">
                                        <img src={team1Image} alt="" width="41" height="55" />
                                    </figure>
                                    <div className="game-result-team-name">{team1Name}</div>
                                    <div className="game-result-team-country">Suyati</div>
                                </div>
                                <div className="game-result-middle">
                                    <div className="game-result-score-wrap">
                                        {winLabel(row.winner, row.teams[0], row.stats.result)}
                                        <div className="game-result-score-divider">
                                            <svg x="0px" y="0px" width="7px" height="21px" viewBox="0 0 7 21" enableBackground="new 0 0 7 21" >
                                                <g>
                                                    <circle cx="3.5" cy="3.5" r="3"></circle>
                                                    <path d="M3.5,1C4.879,1,6,2.122,6,3.5S4.879,6,3.5,6S1,4.878,1,3.5S2.122,1,3.5,1 M3.5,0C1.567,0,0,1.567,0,3.5S1.567,7,3.5,7      S7,5.433,7,3.5S5.433,0,3.5,0L3.5,0z"></path>
                                                </g>
                                                <g>
                                                    <circle cx="3.695" cy="17.5" r="3"></circle>
                                                    <path d="M3.695,15c1.378,0,2.5,1.122,2.5,2.5S5.073,20,3.695,20s-2.5-1.122-2.5-2.5S2.316,15,3.695,15 M3.695,14      c-1.933,0-3.5,1.567-3.5,3.5s1.567,3.5,3.5,3.5s3.5-1.567,3.5-3.5S5.628,14,3.695,14L3.695,14z"></path>
                                                </g>
                                            </svg>
                                        </div>
                                        {winLabel(row.winner, row.teams[1], row.stats.result)}
                                    </div>
                                    <div className="game-results-status">{/** home/away */}</div>
                                </div>
                                <div className="game-result-team game-result-team-second">
                                    <figure className="game-result-team-figure game-result-team-figure-big">
                                        <img src={team2Image} alt="" width="50" height="50" />
                                    </figure>
                                    <div className="game-result-team-name">{team2Name}</div>
                                    <div className="game-result-team-country">Suyati</div>
                                </div>
                            </div>
                            <div className="game-result-footer">
                                <ul className="game-result-details">
                                    <li>United Sports Center </li>
                                    <li>
                                        <time dateTime="2019-04-14"> {row.date + " Aug 2019"}</time>
                                    </li>
                                </ul>
                            </div>
                        </article>
                    </div>
                })}
            </div>
        </>
    )
}

const winLabel = (winner, team, result) => {
    if (winner === team) {
        return <div className="game-result-score game-result-team-win"> {result[team]}
            <span className="game-result-team-label game-result-team-label-top">Win</span>
        </div>
    }
    return <div className="game-result-score">{result[team]}</div>
}

export default Results