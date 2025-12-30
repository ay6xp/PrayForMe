import { makeExecutableSchema } from '@graphql-tools/schema';
import { getPrayerTimes, sendSalams } from './utils';

const typeDefs = `
    type PrayerTimes {
        fajr: String!
        dhuhr: String!
        asr: String!
        maghrib: String!
        isha: String!
        sunrise: String!
    }

    type Query {
        sendSalams: String!
        getPrayerTimes(lat: Float!, lon: Float!, method: Int, school: Int, date: String): PrayerTimes!
     }
`;

const resolvers = {
    Query: {
        sendSalams: () => {
            return sendSalams();
        },
        getPrayerTimes: async (
            _parent: unknown,
            args: { lat: number; lon: number; method?: number; school?: number; date?: string }
        ) => {
            return getPrayerTimes({
                lat: args.lat,
                lon: args.lon,
                method: args.method,
                school: args.school,
                date: args.date,
            });
        },
    }
}



export const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});