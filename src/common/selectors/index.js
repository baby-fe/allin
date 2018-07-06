import {
  createSelector
} from 'reselect';
import { key_login } from '@/constants'

const loginSelector = (immu_state) => {
  return immu_state.get(key_login);
};

// const loginStatusSelector = createSelector([loginSelector], (immu_login) => {
//   return immu_login.get('status')
// });

export const commonLoginSelector = createSelector([loginSelector], (immu_login) => {
  return immu_login.get('status')
});
