import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';
import {Types} from 'mongoose';

import imageRecType from '../../types/image';
import getProjection from '../../get-projection';
import ImageRecModel from '../../../models/image-rec';

export default {
  type: imageRecType,
  description: "Retrieves a single image by ID",
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve (root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);

    return ImageRecModel
      .findById(params.id)
      .select(projection)
      .exec();
  }
};
