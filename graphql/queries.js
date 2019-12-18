import { gql } from 'apollo-boost';

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

export const getCalendar = gql`query {
    calendar {
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
        type
        venue {
            title
            address
            city
        }
    }
}
`;

export const getEvent = gql`
    query Event($id: Int){
        event(id: $id) {
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
                latitude
                longitude
            }
            awards {
                id
                title
                award
            }
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
                    latitude
                    longitude
                }
            }
        }
    }
`;
