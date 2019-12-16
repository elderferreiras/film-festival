import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
    uri: 'https://dwqhgofyta.execute-api.us-west-2.amazonaws.com/dev/graphql',
});
