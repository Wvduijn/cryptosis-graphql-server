// resolver signature = (parent, args, context, info)

/*
== parent ==: 
The object that contains the result returned from the resolver on the parent field, or, in the case of a top-level Query field, the rootValue passed from the server configuration. 

== args ==: 
An object with the arguments passed into the field in the query.

== context ==: 
This is an object shared by all resolvers in a particular query, and is used to contain per-request state, including authentication information, dataloader instances, and anything else that should be taken into account when resolving the query.

== info ==: 
This argument contains information about the execution state of the query, including the field name, path to the field from the root, and more.
*/

const coinResolver = {
  Query: {
    getCoins: async (_source, {}, { dataSources }) => {
      return dataSources.coinAPI.getCoins();
    },
  },
};

export default coinResolver;
