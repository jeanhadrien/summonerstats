import React from "react"
import { RiotApiInstance } from "../_riot/api";
import { RiotAPI, RiotAPITypes, PlatformId } from '@fightmegg/riot-api'
import { DDragon } from '@fightmegg/riot-api';
import Image from "next/image";
import CachedChampions from "./cache"

export default async function Champions() {
    console.log(CachedChampions)

    return (
        <>
            <h1> List of champions </h1>

            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Champ</th>
                        <th>Title</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.values(CachedChampions.data).map(champ =>
                        <tr key={champ.name}>
                            <td> {champ.name}</td>
                            <td> {champ.title}</td>
                            <td> <Image src={'http://ddragon.leagueoflegends.com/cdn/' + CachedChampions.version + '/img/champion/' + champ.id + '.png'} alt="lol" width="50" height="50"></Image></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}
