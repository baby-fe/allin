import {
  createSelector
} from 'reselect';
import Immutable from 'immutable';
import { key_home } from '@/constants'
import { commonLoginSelector } from '@/common/selectors'

const homeSelector = (immu_state) => {
  return immu_state.get(key_home);
};

const bannerSelector = createSelector([homeSelector], (immu_home) => {
  return immu_home&&immu_home.getIn(['homeSale','greatSale'])
});

const proSelector = createSelector([homeSelector], (immu_home) => {
  return immu_home&&immu_home.getIn(['products','recommendList'])
});

export default (immu_state) => {
  return {
  	// __state_login: commonLoginSelector(immu_state),
    sales: bannerSelector(immu_state) || Immutable.Map({}),
    products: proSelector(immu_state) || Immutable.Map({}),
  };
};
