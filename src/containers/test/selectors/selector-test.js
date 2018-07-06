import {
  createSelector
} from 'reselect';
import { key_test } from '@/constant'

const testSelector = (state) => {
  return state.get(key_test);
};

const bannerSelector = createSelector([testSelector], (immu_test) => {
  return immu_test
});

export default (state) => {
  return {
    banners: bannerSelector(state)
  };
};
