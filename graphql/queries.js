import ApolloClient, { gql } from 'apollo-boost';

export const listEvents = gql`query {
    events {
        id
        title
        subtitle
        description
        directedBy
        category
        runningTime
        poster
        time
        date
        year
        city
        country
        venue {
            title
            address
            city
        }
    }
}
`;
