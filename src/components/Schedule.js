import React, { useState, useEffect } from 'react'

const Schedule = () => {

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
            setState({ games: bodyGames.data, teams: teams })
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
                    <h5 className="heading-component-title">Matches</h5>
                </div>
            </article>

            {state.games.map(game => {

                let team1Id = game.teams[0] || "TeamA"
                let team2Id = game.teams[1] || "TeamB"

                if (team1Id) {
                    team1Name = state.teams[team1Id].name
                    team1Image = state.teams[team1Id].image
                }
                if (team2Id) {
                    team2Name = state.teams[team2Id].name
                    team2Image = state.teams[team2Id].image
                }

                if (game.teams.length === 0) {
                    team1Image = "https://futsal-2019.s3.us-east-2.amazonaws.com/default_team.png"
                    team2Image = "https://futsal-2019.s3.us-east-2.amazonaws.com/default_team.png"
                    if (game.type === "Eliminator") {
                        team1Name = "League Table 2nd"
                        team2Name = "League Table 3rd"
                    }
                    if (game.type === "Final") {
                        team1Name = "League Table 1st"
                        team2Name = "Winner of Eliminator"
                    }
                }

                return (
                    <article className="game-result game-result-override-box" key={game.id}>
                        <div className="game-info">
                            <p className="game-info-subtitle">{game.type === "Group Stage" ? '' : game.type}</p>
                            {/* <h3 className="game-info-title"> {game.type} </h3> */}
                            <div className="game-info-main">
                                <div className="game-info-team game-info-team-first">
                                    <figure className="d-flex align-items-center"><img src={team1Image} alt="" />
                                    </figure>
                                    <div className="game-result-team-name">{team1Name}</div>
                                    {/* <div className="game-result-team-country">Suyati</div> */}
                                </div>
                                {gameStats(game)}
                                <div className="game-info-team game-info-team-second">
                                    <figure className="d-flex align-items-center"><img src={team2Image} alt="" />
                                    </figure>
                                    <div className="game-result-team-name">{team2Name}</div>
                                    {/* <div className="game-result-team-country">Suyati</div> */}
                                </div>
                            </div>
                            {showGoals(game.stats, game.teams)}
                        </div>
                    </article>
                )
            }
            )}
        </>
    )
}

function gameStats (game) {
    if (game.status === "played") {
        return (
            <div className="game-info-middle game-info-middle-vertical">
                <time className="time-big" ><span className="heading-3">{game.stats.result[game.teams[0]]} : {game.stats.result[game.teams[1]]}</span>
                </time>
                <div className="group-sm font-weight-lighter text-capitalize">
                    <time>{game.date_time[0] + ", " + game.date_time[1] + " " + game.date_time[2] + " " + game.date_time[3]}</time>

                </div>
            </div>)
    }
    return (
        <div className="game-info-middle game-info-middle-vertical">
            <time className="time-big" ><span className="heading-3">{game.date_time[0] + ", " + game.date_time[1]}</span>
                {game.date_time[2] + " " + game.date_time[3]}
            </time>
            <div className="game-result-divider-wrap"><span className="game-info-team-divider">VS</span></div>
            <div className="group-sm">

                <time> {game.time}</time>

            </div>
        </div>)
}

function showGoals (stats, teams) {

    let goals = stats && stats.goals
    if (goals) {
        goals = goals.sort((a, b) => parseInt(a.time) - parseInt(b.time))

        let team1Goals = [], team2Goals = []

        goals.map(g => {
            if (g.for_team === teams[0]) {
                team1Goals.push(g)
            } else if (g.for_team === teams[1]) {
                team2Goals.push(g)
            }
        })

        let goalScorers1 = team1Goals.map(g => {

            let own_goal = ''
            if (g.own_goal) {
                own_goal = ', Own Goal'
            }
            let text = `${g.scored_by.name} (${g.time}'${own_goal})`
            return text
        })
        let goalScorers2 = team2Goals.map(g => {
            let own_goal = ''
            if (g.own_goal) {
                own_goal = ', Own Goal'
            }
            let text = `${g.scored_by.name} (${g.time}'${own_goal})`
            return text
        })


        return (
            <div className="row">
                <div className="col">
                    <small className="text-center">{goalScorers1.join(', ')}</small>

                </div>
                <div className="col">
                    <small className="text-center"> {goalScorers2.join(', ')}</small>

                </div>
            </div>)
    }
    return null
}

export default Schedule