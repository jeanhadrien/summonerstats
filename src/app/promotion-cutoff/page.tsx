import React from "react"
import { RiotApiInstance } from "../_riot/api";
import { RiotAPI, RiotAPITypes, PlatformId } from '@fightmegg/riot-api'

export default async function PromotionCutoff() {

    const players = await RiotApiInstance.leagueExp.getLeagueEntries(
        {
            region: PlatformId.EUW1,
            queue: RiotAPITypes.QUEUE.RANKED_SOLO_5x5,
            tier: RiotAPITypes.TIER.CHALLENGER,
            division: RiotAPITypes.DIVISION.I
        }
    )


    
    return (
        <>
            <h1> Promotion Cutoff rank </h1>

            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>


                    {players.map(player =>
                        <tr key={player.summonerName}>
                            <td> {player.summonerName}</td>
                            <td> {player.summonerName}</td>
                        </tr>)}
                </tbody>
            </table>
        </>
    )
}
