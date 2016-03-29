import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLFloat,
  GraphQLID
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Geopoint',
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    imageId: {
      type: new GraphQLNonNull(GraphQLID)
    },
    lat: { type: new GraphQLNonNull(GraphQLFloat) },
    long: { type: new GraphQLNonNull(GraphQLFloat) },
    alt: { type: GraphQLFloat, defaultValue: 0 },
    }
});
