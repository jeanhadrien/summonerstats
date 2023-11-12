
import { RiotAPI, RiotAPITypes, PlatformId } from '@fightmegg/riot-api'

const config: RiotAPITypes.Config = {
    debug: true,
    cache: {
        cacheType: 'local', // local or ioredis
        ttls: {
            byMethod: {
                [RiotAPITypes.METHOD_KEY.LEAGUE_EXP.GET_LEAGUE_ENTRIES]: 600000, // ms
            }
        }
    }
}

const RiotApiInstance = new RiotAPI(process.env.RIOT_API_KEY as string, config);

export { RiotApiInstance, RiotAPITypes, PlatformId };