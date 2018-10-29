import update from 'immutability-helper';
import { regularSetReducer, regularSetByShaReducer } from '../../utils/reducerHelpers';

export const initialState = {
  root: null,
  treeNodes: {},
  additionalData: {},
  selectedSha: null,
  selectedName: null,
};

export const reducers = {
  setRoot: regularSetReducer('root'),
  setTreeNode: regularSetByShaReducer('treeNodes'),
  setAdditionalData: regularSetByShaReducer('additionalData'),
  setKeyAdditionalData: (state, { sha, key, value }) => update(state, {
    additionalData: {
      [sha]: {
        [key]: { $set: value },
      },
    },
  }),
  setSelectedSha: regularSetReducer('selectedSha'),
  setSelectedName: regularSetReducer('selectedName'),
};
