import React from "react"
import { RiotApiInstance } from "../_riot/api";
import { RiotAPI, RiotAPITypes, PlatformId } from '@fightmegg/riot-api'
import { DDragon } from '@fightmegg/riot-api';
import Image from "next/image";



export default await new DDragon().champion.all();